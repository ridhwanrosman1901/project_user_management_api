# Project User Management API

## Description

This is a simple Express.js application that provides a RESTful API for managing users. It includes endpoints to create, read, update, partially update, and delete users. The application also includes middleware for logging requests and checking for an authorization header.

## Features

- **Logging Middleware**: Logs HTTP methods and URLs for each request.

- **Authorization Middleware**: Checks for the presence of an Authorization header.

- **Validation and Sanitization**: Validates and sanitizes user input for POST requests.

- **CRUD Operations**: Supports Create, Read, Update, Partial Update, and Delete operations for users.

- **Query Filtering**: Allows filtering of users based on query parameters.

## Endpoints

### Root Route

- **GET /**: Returns a message about the list of classmates.

### Classmates Route

- **GET /classmates**: Returns a list of classmates with their ID, name, age, and email.

### User Management

- **POST /api/users**: Creates a new user. Requires name (minimum 3 characters) and email (valid email).

    **Request Body Example**:

'''json
{
    "name": "Ridhwan Rosman"
    "email": "ridhwan@example.com"
}
'''

- **GET /api/users**: Retrieves the list of users. Supports query parameters for filtering.

    **Query Parameters**:

    -**filter**: Field to filter by (e.g., name, email).

    -**value**: Value to filter for.

- **GET /api/users**: Retrieves a user ID.

    **Path Parameter**:

    - **id**: The ID of the user.

- **PUT /api/users**: Updates a user by ID.

    **Path Parameter**:

    -**id**: The ID of the user.

    **Request Body Example**:

'''json
{
    "name":"Jane Doe",
    "email":"jan@example.com"
}
'''