[![Known Vulnerabilities](https://snyk.io/test/github/JorgeCeja/graphql-todo-auth/badge.svg)](https://snyk.io/test/github/JorgeCeja/graphql-todo-auth)
# Todo App - GraphQL Node Server

## Prerequisites

- [Node.js](https://nodejs.org/en/) v8
- [Yarn](https://yarnpkg.com/en/) Prefered
- [Prettier](https://prettier.io/) Prefered

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

## GraphQL Playground Queries & Mutations

**Note:** The `Todo` and `allTodos` queries are redundant and an antipattern. This is due to the fact that `User` containt all the `todos` and is returned on login or signup. The only reason they are there is to have examples of Queries. 

### Mutations

SignUp
```
mutation {
  signup(
    email: "test@test.test"
    password: "test123"
  ) {
    token
  }
}
```

Login
```
mutation {
  login(
    email: "test@test.test"
    password: "test123"
  ) {
    token
  }
}
```

Create Todo
```
mutation {
  createTodo(
    content: "Do you know the way?"
  ) {
    _id,
    content
  }
}

HTTP HEADERS
{
  "Authorization": "Bearer __TOKEN__"
}
```

Update Todo
```
mutation {
  updateTodo(
    _id: "5a6437d5cacbed9e62630e13",
    content: "DO YOU KNOW DA WAE UPDATED"
  ) {
    _id,
    content
  }
}

HTTP HEADERS
{
  "Authorization": "Bearer __TOKEN__"
}
```

Delete Todo
```
mutation {
  deleteTodo(
    _id: "5a6437d5cacbed9e62630e13"
  ) {
    _id
  }
}

HTTP HEADERS
{
  "Authorization": "Bearer __TOKEN__"
}
```

###  Queries

Get Todo
```
query {
  Todo(
    _id: "5a6437d5cacbed9e62630e13"
  ) {
    _id,
    content
  }
}

HTTP HEADERS
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

HTTP HEADERS
{
  "Authorization": "Bearer __TOKEN__"
}
```