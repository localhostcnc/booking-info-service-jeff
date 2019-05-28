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

> 1. npm run createDb (only if you haven't already created the database this)
> 2. npm run seed (starting the serving fills database upon connection)

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install
server "start": "nodemon server/index.js",
database access: "database": "mysql -u root -p",
linter: "eslint": "eslint *.js",
webpack "react-dev": "webpack -d --watch",
jest "test": "jest --watch --coverage",
super test "supertest": "mocha 'test/apiTest.js'"
```

