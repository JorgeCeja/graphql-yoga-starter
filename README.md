[![Maintainability](https://api.codeclimate.com/v1/badges/c032a516c90d1ec7dd89/maintainability)](https://codeclimate.com/github/JorgeCeja/graphql-yoga-database/maintainability)  [![Known Vulnerabilities](https://snyk.io/test/github/JorgeCeja/graphql-todo-auth/badge.svg)](https://snyk.io/test/github/JorgeCeja/graphql-todo-auth)
# Todo App - GraphQL Node Server

## Features
- ___async___ functions
- Eslint - Airbnb
- [Helmet](https://github.com/helmetjs/helmet) and [Rate limit](https://github.com/nfriedly/express-rate-limit) middlewares


## Databases:

1. [MongoDB](https://github.com/JorgeCeja/graphql-yoga-starter)
2. [PostgreSQL](https://github.com/JorgeCeja/graphql-yoga-starter/tree/with-postgresql)

## Getting Started

1. `git clone ` + repo URL
2. `cd` to repo
3. `yarn` - installing node packages
4. Create and configure a `.env` file in the root directory 

**Note: Make sure to create a long and random hash for `SESSION_SECRET` in the `.env` file**

Start server

`yarn dev` - start development server

`yarn start` - start production server

To run eslint - find lint errors

`yarn eslint`

<details>
<summary>GraphQL Playground Queries & Mutations</summary>

## Mutations

SignUp
```
mutation {
  signup(
    email: "🌮@🌮.🌮"
    password: "🌮-tuesday"
  ) {
    token
  }
}
```

Login
```
mutation {
  login(
    email: "🌮@🌮.🌮"
    password: "🌮-tuesday"
  ) {
    token
  }
}
```

Create Todo
```
mutation {
  createTodo(
    content: "I love 🌮's"
  ) {
    _id,
    content
  }
}

#HTTP HEADERS
{
  "Authorization": "Bearer __TOKEN__"
}
```

Update Todo
```
mutation {
  updateTodo(
    _id: "1",
    content: "I love 🌮 tuesday"
  ) {
    _id,
    content
  }
}

#HTTP HEADERS
{
  "Authorization": "Bearer __TOKEN__"
}
```

Delete Todo
```
mutation {
  deleteTodo(
    _id: "1"
  ) {
    _id
  }
}

#HTTP HEADERS
{
  "Authorization": "Bearer __TOKEN__"
}
```

##  Queries

Get Todo
```
query {
  Todo(
    _id: "1"
  ) {
    _id,
    content
  }
}

#HTTP HEADERS
{
  "Authorization": "Bearer __TOKEN__"
}
```

Get All Todos
```
query {
  allTodos {
    _id,
    content
  }
}

#HTTP HEADERS
{
  "Authorization": "Bearer __TOKEN__"
}
```
</details>