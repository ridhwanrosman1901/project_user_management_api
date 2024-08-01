import express from 'express';
import { body, validationResult } from 'express-validator';

const app = express();
const PORT = process.env.PORT || 5000;


// Middleware to log the HTTP method and URL of each incoming request
const loggingMiddleware = (req, res, next) => {
    console.log('${req.method} - ${req.url}');
    next();
}
// Middleware to check for the presence of an Authorization header
const authMiddleware = (req, res, next) => {
    if (req.headers.authorization){
        console.log('Authorization header is present');
    } else {
        console.log('No authorization header');
    }
    next();
};
 
app.use(express.json());
app.use(loggingMiddleware);
app.use(authMiddleware);

// POSTS requests validation and sanitazation 
app.post('/api/users', [
    body('name')
    .trim() // Remove whitespace
    .isLength({ min:3 }) // Ensure name is not empty
    .withMessage('Name is required'), // Provide custom error

    body('email')
    .isEmail() // Ensure the field contains email
    .withMessage('Must be valid email') // Provide custom error message
    .normalizeEmail() // Normalize the email address to standard
], (req, res) =>{
    const errors = validationResult(req);

    if (!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }
    // If validation successful, create new user object with new ID
    const newUser = { id: mockUsers[mockUsers.length - 1].id +1, ...req.body}
    // Add the new user to the mockUsers array
    mockUsers.push(newUser);
    // Send a 201 created response with the new user object
    res.status(201).send(newUser);
})

// Mock user data
const mockUsers = [
    {
        id: 1,
        name: "Ridhwan Rosman",
        age: 32,
        email: "ridhwan@example.com"
    },
    {
        id: 2,
        name: "Wan Khairul",
        age: 31,
        email: "khairul@example.com"
    },
    {
        id: 3,
        name: "Aminur Haziq",
        age: 25,
        email: "haziq@example.com"
    },
];

// Root route
app.get("/", (req, res) => {
    res.status(201).send({
        message: "list of classmate names and email and id",
    });
});

// Classmates route
app.get("/classmates", (req, res) => {
    res.status(200).send([
        {
            id: 1,
            name: "Ridhwan Rosman",
            age: 32,
            email: "ridhwan@example.com"
        },
        {
            id: 2,
            name: "Wan Khairul",
            age: 31,
            email: "khairul@example.com"
        },
        {
            id: 3,
            name: "Aminur Haziq",
            age: 25,
            email: "haziq@example.com"
        },
        {
            id: 4,
            name: "Aiman Rusyaidi",
            age: 28,
            email: "rusyaidi@example.com"
        },
        {
            id: 5,
            name: "Ahmad Fitri",
            age: 30,
            email: "fitri@example.com"
        },
        {
            id: 6,
            name: "Zarina",
            age: 28,
            email: "zarina@example.com"
        },
        {
            id: 7,
            name: "Mashitah",
            age: 26,
            email: "mashitah@example.com"
        },
        {
            id: 8,
            name: "Hamzah",
            age: 26,
            email: "hamzah@example.com"
        },
        {
            id: 9,
            name: "Ismareeza Hanif",
            age: 23,
            email: "hanif@example.com"
        },
        {
            id: 10,
            name: "NHL97",
            age: 24,
            email: "nhl97@example.com"
        },
        {
            id: 11,
            name: "Yatt",
            age: 32,
            email: "yatt@example.com"
        },
        {
            id: 12,
            name: "Hafiz",
            age: 28,
            email: "hafiz@example.com"
        },
        {
            id: 13,
            name: "Muhammad Iqbal",
            age: 25,
            email: "iqbal@example.com"
        },
        {
            id: 14,
            name: "Faris Haziq",
            age: 22,
            email: "haziq@example.com"
        },
        {
            id: 15,
            name: "Amalin Zuhari",
            age: 26,
            email: "zuhari@example.com"
        },
        {
            id: 16,
            name: "Ahmad",
            age: 25,
            email: "ahmad@example.com"
        },
        {
            id: 17,
            name: "Zayn Zary",
            age: 25,
            email: "zary@example.com"
        },
        {
            id: 18,
            name: "Ezzat Fikri (PJ)",
            age: 24,
            email: "pj@example.com"
        },
        {
            id: 19,
            name: "Maisarah Ibrahim",
            age: 24,
            email: "maisarah@example.com"
        },
        {
            id: 20,
            name: "Nurul Ashiqin",
            age: 26,
            email: "ashiqin@example.com"
        },
        {
            id: 21,
            name: "Aini Atiqah",
            age: 24,
            email: "atiqah@example.com"
        },
        {
            id: 22,
            name: "Idlan Mohd",
            age: 24,
            email: "mohd@example.com"
        },
        {
            id: 23,
            name: "Syaheerah Syafiqa",
            age: 28,
            email: "syafiqa@example.com"
        },
    ]);
});

// Get filtered user data
app.get("/api/users", (req, res) => {console.log(req.query);
    const { filter, value } = req.query;

    // Check if both 'filter' and 'value' are undefined
    // If so, return the full list of mock users
    if (!filter && !value) {
        return res.status(200).send(mockUsers);
    }

    // If both 'filter' and 'value' are defined,
    // filter the mockUsers array based on the provided filter and value
    if (filter && value) {
        // Filter the users where the user's property specified by 'filter'
        // includes the 'value' string
        const filteredUsers = mockUsers.filter((user) => user[filter] && user[filter].includes(value));

        // Send the filtered list of users as the response
        return res.status(200).send(filteredUsers);
    }

    // If only 'filter' or 'value' is provided but not both, return a 400 Bad Request response
    res.status(400).send({ msg: "Bad request. Both filter and value are required for filtering." });
});

// User by ID route
app.get("/api/users/:id", (req, res) => {
    // Log the route parameter 'id'
    console.log(req.params);

    // Parse the 'id' parameter to an integer
    const parseId = parseInt(req.params.id);

    // Log the parsed 'id'
    console.log(parseId);

    // Check if the parsed 'id' is not a number (NaN)
    if (isNaN(parseId)) {
        return res.status(400).send({ msg: "Bad request. Invalid ID" });
    }

    // Find the user with the matching 'id'
    const findUser = mockUsers.find((user) => user.id === parseId);

    // If no user is found with the matching 'id'
    if (!findUser) {
        return res.status(404).send({ msg: "User not found" });
    }

    // If user is found, send a 200 OK response with the user data
    res.status(200).send(findUser);
});

// POST REQUESTS
app.post("/api/users", (req, res) => {
    // Log the request body
    console.log(req.body);

    // Get the request body
    const { body } = req;

    // Generate a new user ID
    const newUser = { id: mockUsers[mockUsers.length - 1].id + 1, ...body };

    // Add the new user to the mockUsers array
    mockUsers.push(newUser);

    // Respond with the newly created user
    return res.status(201).send(newUser);
});

// PUT REQUESTS
// Define a route handler for PUT requests to the "/api/users/:id" endpoint

app.put("/api/users/:id", (req, res) => {

    // Destructure the body of the request and the 'id' parameter from the URL

    const {

        body,

        params: { id },

    } = req;

    // Parse the 'id' parameter from the URL to an integer

    const parseId = parseInt(id);

    // Check if the parsed 'id' is not a number

    // If so, send a 400 Bad Request status

    if (isNaN(parseId)) return res.sendStatus(400);

    // Find the index of the user in the mockUsers array with the matching 'id'

    const finuserIndex = mockUsers.findIndex((user) => user.id === parseId);

    // Check if no user with the given 'id' was found

    // If so, send a 404 Not Found status

    if (finuserIndex === -1) return res.sendStatus(404);

    // Update the existing user at the found index with the new data from the request body

    // Preserve the existing 'id' while updating the user's data

    mockUsers[finuserIndex] = { id: parseId, ...body };

    // Send a 200 OK status to indicate that the update was successful

    return res.sendStatus(200);

});

// PATCH REQUESTS
app.patch("/api/users/:id", (req, res) => {
    try {
        const { body, params: { id } } = req;
        const parseId = parseInt(id);

        // Check if the ID is valid
        if (isNaN(parseId)) return res.status(400).send({ msg: "Invalid ID" });

        // Find the index of the user to update
        const userIndex = mockUsers.findIndex(user => user.id === parseId);
        if (userIndex === -1) return res.status(404).send({ msg: "User not found" });

        // Update the user details
        mockUsers[userIndex] = { ...mockUsers[userIndex], ...body };

        // Respond with a success status
        res.status(200).send(mockUsers[userIndex]);
    } catch (error) {
        console.error('Error handling PATCH request:', error);
        res.status(500).send({ msg: "Internal Server Error" });
    }
});

// DELETE REQUESTS
app.delete("/api/users/:id", (req, res) => {
    // Destructure the 'id' parameter from the request parameters
    const { params: { id } } = req;

    // Parse the 'id' parameter to an integer
    const parseId = parseInt(id);

    // Check if the parsed ID is not a number, if so, return a 400 Bad Request status
    if (isNaN(parseId)) return res.sendStatus(400); // Bad Request

    // Find the index of the user with the given ID in the mockUsers array
    const userIndex = mockUsers.findIndex((user) => user.id === parseId);

    // If the user is not found (index is -1), return a 404 Not Found status
    if (userIndex === -1) return res.sendStatus(404); // Not Found

    // Remove the user from the mockUsers array using splice
    mockUsers.splice(userIndex, 1);

    // Return a 200 OK status to indicate the user was successfully deleted
    return res.sendStatus(200); // OK
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});