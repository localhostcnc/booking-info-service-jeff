# localhost CnC

> Group project at Hack Reactor where we replicated an airbnb item page.

## Related Projects

- https://github.com/localhostcnc/top-image-bar
- https://github.com/localhostcnc/reviewList-ak
- https://github.com/localhostcnc/calendar-component-kt
- https://github.com/localhostcnc/listinginfo

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> 1. npm install
> 2. npm run createDb (only if you haven't already created the database this)
>   *user and password needs to be changed to match your local info in both database/index.js and sqlDataGenerator.js*
> 3. npm run seed (starting the serving fills database upon connection)
> 4. npm run database (if you want to take a look at the database)
> 5. npm start
> 6. npm run react-dev

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -----
"start" -  server - "nodemon server/index.js",
"database" - database access - "mysql -u root -p",
"eslint" - linter - "eslint *.js",
"react-dev" - webpack - "webpack -d --watch",
"test" - jest - "jest --watch --coverage",
"supertest" - supertest - "mocha 'test/apiTest.js'"
```

