[![Maintainability](https://api.codeclimate.com/v1/badges/c032a516c90d1ec7dd89/maintainability)](https://codeclimate.com/github/JorgeCeja/graphql-yoga-database/maintainability)  [![Known Vulnerabilities](https://snyk.io/test/github/JorgeCeja/graphql-todo-auth/badge.svg)](https://snyk.io/test/github/JorgeCeja/graphql-todo-auth)
# Todo App - Nodejs GraphQL Server - PostgreSQL

## Features
- ___async___ functions
- Eslint - Airbnb
- [Helmet](https://github.com/helmetjs/helmet) and [Rate limit](https://github.com/nfriedly/express-rate-limit) middlewares

## Databases

1. [MongoDB](https://github.com/JorgeCeja/graphql-yoga-starter)
2. [PostgreSQL](https://github.com/JorgeCeja/graphql-yoga-starter/tree/with-postgresql)

## Getting Started

```bash
# Clone repository as AwesomeProject
https://github.com/JorgeCeja/graphql-yoga-starter/tree/with-postgresql AwesomeProject

# Change directory
cd AwesomeProject

## Follow commands based on your package manager

# Install NPM dependencies 
npm install

# Create and configure a .env file in the root directory

## Workflow:

# Developement
npm run dev

# Production
npm start

# Docker compose
docker-compose up
```

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
    todo_id,
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
    todo_id: "1",
    content: "I love 🌮 tuesday"
  ) {
    todo_id,
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
    todo_id: "1"
  ) {
    todo_id
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
    todo_id: "1"
  ) {
    todo_id,
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
    todo_id,
    content
  }
}

#HTTP HEADERS
{
  "Authorization": "Bearer __TOKEN__"
}
```
</details>