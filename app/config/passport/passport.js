
//load bcrypt
var bCrypt = require('bcrypt-nodejs');

module.exports = function (passport, user) {

  var User = user;

  console.log( user );

  var LocalStrategy = require('passport-local').Strategy;

  passport.serializeUser(function (user, done) {
    done(null, user);
  });

  // used to deserialize the user
  passport.deserializeUser(function (user, done) {
    done(null, user);
  });


  passport.use('local-signup', new LocalStrategy(

    {
      usernameField: 'username',
      passwordField: 'password',
      passReqToCallback: true // allows us to pass back the entire request to the callback
    },

    function (req, username, password, done) {

      var generateHash = function (password) {
        return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
      };

      User.findOne({ where: { userName: username } }).then( (user) => {

        if (user) {
          return done(null, false, { message: 'That username is already taken' });
        }

        else {
          var userPassword = generateHash(password);
          var data =
          {
            email: req.body.email,
            password: userPassword,
            userName: username,
            firstName: req.body.firstname,
            lastName: req.body.lastname
          };


          User.create(data).then( (newUser, created) => {
            if (!newUser) {
              return done(null, false);
            }

            if (newUser) {
              return done(null, newUser);

            }


          });
        }


      });



    }



  ));

  //LOCAL SIGNIN
  passport.use('local-signin', new LocalStrategy({

      // by default, local strategy uses username and password, we will override with email
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true // allows us to pass back the entire request to the callback
    
    },

    function (req, email, password, done) {

      var User = user;

      var isValidPassword = function (userpass, password) {
        return bCrypt.compareSync(password, userpass);
      }

      User.findOne({ where: { email: email } }).then(function (user) {

        if (!user) {
          return done(null, false, { message: 'Email does not exist' });
        }

        if (!isValidPassword(user.password, password)) {

          return done(null, false, { message: 'Incorrect password.' });

        }

        var userinfo = user.get();

        console.log(userinfo);

        return done(null, userinfo);

      }).catch(function (err) {

        console.log("Error:", err);

        return done(null, false, { message: 'Something went wrong with your Signin' });


      });

    }
  ));

}

