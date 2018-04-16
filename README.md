[![Known Vulnerabilities](https://snyk.io/test/github/JorgeCeja/graphql-todo-auth/badge.svg)](https://snyk.io/test/github/JorgeCeja/graphql-todo-auth)
# Todo App - Nodejs GraphQL Server - PostgreSQL

## Prerequisites

- [Node.js](https://nodejs.org/en/) v8
- [PostgreSQL](https://www.postgresql.org/)
- [Yarn](https://yarnpkg.com/en/) Prefered
- [Prettier](https://prettier.io/) Prefered
- [Docker](https://www.docker.com/) Optional

## Getting Started

1. `git clone ` + repo URL
2. `cd` to repo
3. `yarn` - installing node packages
4. Create and configure a `.env` file in the root directory 

**Note: Make sure to create a long and random hash for `SESSION_SECRET` in the `.env` file**

## Start server: 

Normal

`yarn dev` - start development server

`yarn start` - start production server

Docker compose

```
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