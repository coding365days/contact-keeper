cmds:
dependencies: npm i express bcryptjs jsonwebtoken config express-validator mongoose
devDependencies: npm i -D nodemon concurrently
start: npm run server

notes:

- express is the web framework used for routing kind of stuff
- bcryptjs is used to hash password
- jsonwebtoken for authentication
- config is used for global variables
- express-validator is used to validate any body that is coming in
- mongoose is used as an abstraction layer to perform CRUD operations in db
- nodemon allows us to keep watching for any file changes and restart the server
- concurrently allows us to run both react and api at the same time
