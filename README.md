# DataSequelizeProject work for CBCwork (Coding BootCamp Network)

This is a subproject creating the datamodel, database and sequelize ORM modeling for the "CBCWork" project.  It utilized the sqldbm.com online datamodelling application to define the supporting datamodel and export/forward-engineer the raw SQL DDL.  The DDL was applied to a mySQL database, and then transfomed using the npm "sequelize-auto" package to generate Sequelize models for our MVC architecture.  These models are automatically imported by the typical index.js sequelize model file, and use a data-seeding callback to populate every table in the database with development seed data (including base64-encoded image data for user avatar/profile pictures).

-------------
https://github.com/tarose412/CBCwork

CBCwork is a social networking app for students, alumni, teaching assistants, and instructors at the University of Minnesota Coding Boot Camp. The app is intended to offer members a means to connect with each other during and after their cohort has graduated.

Users start at a landing page where they can either sign in or create an account. It is recommended that users login with an email address that has a Gravatar associated with it. The Gravatar serves as their "profile picture" and follows them around the site.

After sign in, users are brought to their dashboard, which allows them to view their current experience and education, as well as add and remove experience and education.

New users are required to complete a profile, which allows them to define things like current employment, status, skills, and share any applicable social media accounts (such as GitHub repositories).

The Newsfeed page is where members can interact with each other via a message-board like feature. Members can pose questions, share meaningful personal and professional updates, or even goof around to decompress from the rigors of life as a developer.

There are features we would like to incorporate in the future, such as functionality for a streamlined study group/meetup scheduler.

NOTE: as of 07/07/2018 at 9:15 am, the "Members" list is not displaying correctly. As more members were added to the database it seems to no longer display all profiles as intended.
