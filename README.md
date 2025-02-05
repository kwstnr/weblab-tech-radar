# weblab-tech-radar
Tech Radar HSLU-WEBLAB Project

# Local Devleopment
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
from the root of the repository run:
`cd src/server && npm start`

## Start app
from the root of the repository run:
`cd src/app && ng serve`
