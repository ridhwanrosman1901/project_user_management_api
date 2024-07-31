import express from 'express';
import bodyParser from 'body-parser'; // Import body-parser

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Root route
app.get("/", (req, res) => {
    res.status(201).send({
        message: "list of classmate names and age and id",
    });
});

// Classmates route
app.get("/classmates", (req, res) => {
    res.status(200).send([
        {
            id: 1,
            name: "Ridhwan Rosman",
            age: 32,
        },
        {
            id: 2,
            name: "Wan Khairul",
            age: 31,
        },
        {
            id: 3,
            name: "Aminur Haziq",
            age: 25,
        },
        {
            id: 4,
            name: "Aiman Rusyaidi",
            age: 28,
        },
        {
            id: 5,
            name: "Ahmad Fitri",
            age: 30,
        },
        {
            id: 6,
            name: "Zarina",
            age: 28,
        },
        {
            id: 7,
            name: "Mashitah",
            age: 26,
        },
        {
            id: 8,
            name: "Hamzah",
            age: 26,
        },
        {
            id: 9,
            name: "Ismareeza Hanif",
            age: 23,
        },
        {
            id: 10,
            name: "NHL97",
            age: 24,
        },
        {
            id: 11,
            name: "Yatt",
            age: 32,
        },
        {
            id: 12,
            name: "Hafiz",
            age: 28,
        },
        {
            id: 13,
            name: "Muhammad Iqbal",
            age: 25,
        },
        {
            id: 14,
            name: "Faris Haziq",
            age: 22,
        },
        {
            id: 15,
            name: "Amalin Zuhari",
            age: 26,
        },
        {
            id: 16,
            name: "Ahmad",
            age: 25,
        },
        {
            id: 17,
            name: "Zayn Zary",
            age: 25,
        },
        {
            id: 18,
            name: "Ezzat Fikri (PJ)",
            age: 24,
        },
        {
            id: 19,
            name: "Maisarah Ibrahim",
            age: 24,
        },
        {
            id: 20,
            name: "Nurul Ashiqin",
            age: 26,
        },
        {
            id: 21,
            name: "Aini Atiqah",
            age: 24,
        },
        {
            id: 22,
            name: "Idlan Mohd",
            age: 24,
        },
        {
            id: 23,
            name: "Syaheerah Syafiqa",
            age: 28,
        },
    ]);
});

// Mock user data
const mockUsers = [
    {
        id: 1,
        name: "John",
        email: "gGZfH@example.com",
    },
    {
        id: 2,
        name: "Jack",
        email: "gGZfH@example.com",
    },
    {
        id: 3,
        name: "Jenny",
        email: "gGZfH@example.com",
    },
];

// Mock Users route with filtering
app.get("/api/users", (req, res) => {
    // Log the query parameters to the console
    console.log(req.query);

    // Destructure the query object to extract 'filter' and 'value' parameters
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




// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});