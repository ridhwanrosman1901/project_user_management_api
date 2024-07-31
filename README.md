# Project User Management API

## Description

User Management API is a simple RESTful API built with Express.js. It provides endpoints to manage a list of classmates and mock users. This project demonstrates basic CRUD operations including filtering and handling JSON data.

## Features

- **Root Route (`/`):** Provides a simple message.

- **Classmates Route (`/classmates`):** Returns a list of classmates with their IDs and age.

- **Mock Users Route (`/api/users`):** Retrieves a list of mock users with support for filtering by query parameters.
- **User by ID Route (`/api/users/:id`):** Retrieves a single user by ID.
- **POST Request (`/api/users`):** Adds a new user to the mock user list.
- **PUT Request (`/api/users/:id`):** Updates an existing user’s data by ID.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ridhwanrosman1901/project_user_management_api.git

2. Navigate to the project directory:
   ```bash
   cd projectone

3. Install dependencies::
   ```bash
   npm install

## Usage

1. Start the server:
   ```bash
   node index.js

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

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contributing

If you have suggestions or improvements, please feel free to open an issue or submit a pull request.

## Contact

For any inquiries, please reach out to me.
