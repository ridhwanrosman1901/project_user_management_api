# Project User Management API

## Description

This is a simple Express.js application that provides a RESTful API for managing users. It includes endpoints to create, read, update, partially update, and delete users. The application also includes middleware for logging requests and checking for an authorization header.

## Features

<<<<<<< HEAD
- **Logging Middleware**: Logs HTTP methods and URLs for each request.
=======
- **Root Route (`/`):** Provides a simple message.

- **Classmates Route (`/classmates`):** Returns a list of classmates with their IDs and age.

- **Mock Users Route (`/api/users`):** Retrieves a list of mock users with support for filtering by query parameters.
- **User by ID Route (`/api/users/:id`):** Retrieves a single user by ID.
- **POST Request (`/api/users`):** Adds a new user to the mock user list.
- **PUT Request (`/api/users/:id`):** Updates an existing user’s data by ID.
>>>>>>> abbea67334618f25f5fccb6c470e5e66e3e683e5

- **Authorization Middleware**: Checks for the presence of an Authorization header.

<<<<<<< HEAD
- **Validation and Sanitization**: Validates and sanitizes user input for POST requests.
=======
1. Clone the repository:
   ```bash
   git clone https://github.com/ridhwanrosman1901/project_user_management_api.git
>>>>>>> abbea67334618f25f5fccb6c470e5e66e3e683e5

- **CRUD Operations**: Supports Create, Read, Update, Partial Update, and Delete operations for users.

- **Query Filtering**: Allows filtering of users based on query parameters.

## Endpoints

### Root Route

<<<<<<< HEAD
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
=======
2. Open your web browser or use a tool like Postman to interact with the API:

**- Root Route: 'http://localhost:5000/'**

**- Classmates Route: 'http://localhost:5000/classmates'**

**- Mock Users Route: 'http://localhost:5000/api/users'**

**- User by ID Route: 'http://localhost:5000/api/users/:id'**

**- Filter Mock Users: 'http://localhost:5000/api/users?filter=name&value=John'**


## API Endpoints

**1. Root Route**

**- GET '/'**
    
   **-Response: '{ "message": "list of classmate names and age and id" }'**

**2. Classmates Route**

**- GET '/classmates'**
   
   **-Response:** JSON array of classmates with **'id'**, **'name'**, and **'age'** fields.

**3. Mock Users Route**

**- Get '/api/users'**
    
   **- Query Parameters:**
        **- 'filter':** Field to filter (e.g. **'name'**).
        **- 'value':** Value to filter by.
    
   **- Response:** JSON array of mock users.

**4. User by ID Route**

**- GET '/api/users/:id'**
    
   **- Response:** JSON object of the user with the specified ID.

**5. POST Request**

**- POST '/api/users'**
    **- Request Body:** JSON object with user data (e.g., **'{ "name": "John", "email": "john@example.com" }'**).
    
   **- Response:** JSON object of the newly created user.

**6. PuT Request**

**- PUT '/api/users/:id'**
    **- Request Body:** JSON object with updated user data.
    
   **- Response:** HTTP status code **'200 OK'** on success.
>>>>>>> abbea67334618f25f5fccb6c470e5e66e3e683e5

    **Query Parameters**:

    -**filter**: Field to filter by (e.g., name, email).

    -**value**: Value to filter for.

- **GET /api/users**: Retrieves a user ID.

    **Path Parameter**:

<<<<<<< HEAD
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
=======
For any inquiries, please reach out to me.
>>>>>>> abbea67334618f25f5fccb6c470e5e66e3e683e5
