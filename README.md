# Project User Management API

## Description

This is a simple Express.js application that provides a RESTful API for managing users. It includes endpoints to create, read, update, partially update, and delete users. The application also features middleware for logging requests and checking for authorization headers, as well as validation and sanitization for user input.

## Features

- **Logging Middleware**: Logs HTTP methods and URLs for each request.
- **Authorization Middleware**: Checks for the presence of an Authorization header.
- **Validation and Sanitization**: Validates and sanitizes user input for POST requests.
- **CRUD Operations**: Supports Create, Read, Update, Partial Update, and Delete operations for users.
- **Query Filtering**: Allows filtering of users based on query parameters.

## Endpoints

### Root Route

- **GET /**: Returns a message about the list of classmates.

  **Response Example**:
  ```json
  {
    "message": "list of classmate names and age and id"
  }

### Classmates Route

- **GET /classmates**: Retrieves a list of classmates with their ID, name, and age.

  **Response Example**:
  ```json
  [
    {
      "id": 1,
      "name": "Ridhwan Rosman",
      "age": 32
    },
    {
      "id": 2,
      "name": "Wan Khairul",
      "age": 31
    }
    // Additional classmates
  ]

### User Management

- **POST /api/users**: Creates a new user. Requires `name` (minimum 3 characters) and `email` (valid email).

  **Request Body Example**:
  ```json
  {
    "name": "John Doe",
    "email": "john.doe@example.com"
  }
