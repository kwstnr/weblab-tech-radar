# weblab-tech-radar
Tech Radar HSLU-WEBLAB Project

# Local Development
## Setup Environment Variables
create a `.env`-file in the root directory of the repository.
add variables to the `.env` file for the database credentials, i.e.:
```
MONGODB_USERNAME=root
MONGODB_PASSWORD=password
```

## Start database
`docker compose up -d`

## Install dependencies
from the root of the repository both of these commands:
`cd src/server && yarn`
`cd src/app && yarn`

## Start server
The server also needs a set of environment variables.
Create a .env file in the `src/server` repository and add the db connection string, test user password and jwt secret, i.e.
```
DATABASE_URI=mongodb://root:password@localhost:27017/tech-radar
TEST_PASSWORD=TEST_123
JWT_SECRET=jwt_secret
```

from the root of the repository run:
`cd src/server && npm start`

## Start app
from the root of the repository run:
`cd src/app && ng serve`

## Login
Two users are seeded using the provided `TEST_PASSWORD` in the environment variables. Developers can use these logins to work with the tech-radar.
The two users have the following credentials and roles.

| Rolle | Email | Password |
| ----- | ----- | -------- |
| ADMINISTRATOR | administrator@company.com | value of `TEST_PASSWORD` |
| EMPLOYEE | mitarbeiter@company.com | value of `TEST_PASSWORD` |
