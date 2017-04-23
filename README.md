# express-graphql-boilerplate-ES2017
(Based on [Edd Yerburgh's](https://github.com/eddyerburgh) [express-graphql-boilerplate](https://github.com/eddyerburgh/express-graphql-boilerplate))
## Features

- Express server
- GraphQL
- GraphQl tools
- Babel ES2017 preset (async/await, import/export, etc.)
- eslint with airbnb, ES2017 syntax
- winston logger

## Installation

```
npm install
```

```
yarn install
```

## Usage

### Production

Start the server
```
npm start
```
```
yarn start
```
This script compiles the source files to /lib for compatibility with the standard (non-Babel) Node.js runtime, 
and starts the server.

```
npm run build
```
will build the files without starting the server.

The server will be running at http://localhost:4000/graphql/

Example query:
```shell
curl -X POST \
-H "Content-Type: application/json" \
-d '{"query": "{ posts { id } }"}' \
http://localhost:4000/graphql
```

### Dev

This script starts the server using babel-node without any compiling beforehand.

```
npm run dev
```

```
yarn run dev
```

GraphiQL will be running at http://localhost:4000/graphiql/
