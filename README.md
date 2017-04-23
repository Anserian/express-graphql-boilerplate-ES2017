# express-graphql-boilerplate-ES2017
(Copied from Edd Yerburgh's repository at https://github.com/eddyerburgh/express-graphql-boilerplate)

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

The server will be running at http://localhost:4000/graphql/

Example query:
```shell
curl -X POST \
-H "Content-Type: application/json" \
-d '{"query": "{ posts { id } }"}' \
http://localhost:4000/graphql
```

### Dev

Start the server

```
npm run dev
```

```
yarn run dev
```

GraphiQL will be running at http://localhost:4000/graphiql/
