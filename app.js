const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

// Load survey form
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "exercise6.html"));
});

// Handle POST request
app.post("/submit", (req, res) => {

    const name = req.body.name;
    const email = req.body.email;
    const rating = req.body.rating;
    const feedback = req.body.feedback;

    res.send(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>Survey Result</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    </head>

    <body class="bg-light">

    <div class="container mt-5">
        <div class="card shadow">
            <div class="card-header bg-success text-white">
                <h3>Survey Submitted Successfully</h3>
            </div>

            <div class="card-body">
                <p><b>Name:</b> ${name}</p>
                <p><b>Email:</b> ${email}</p>
                <p><b>Rating:</b> ${rating}</p>
                <p><b>Feedback:</b> ${feedback}</p>

                <a href="/" class="btn btn-primary">Back to Form</a>
            </div>
        </div>
    </div>

    </body>
    </html>
    `);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});