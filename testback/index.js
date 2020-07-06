const express = require("express");

const app = express();

const port = 8000

const admin = (req, res) => {
    return res.send("Admin Dashboard");
};

const isAdmin = (req, res, next) => {
    console.log("isAdmin running")
    next();
};

const isLoggedIn = (req, res) => {
    console.log("isLoggedIn running");
}

app.get("/login", (req, res) => {
    return res.send("Hello there visitor!!!");
});

app.get("/admin", isLoggedIn, isAdmin, admin);

app.get("/signout", (req, res) => {
    return res.send("You are signed out");
});

app.get("/signin", (req, res) => {
    return res.send("You are signed in");
});

app.get("/hitesh", (req, res) => {
    return res.send("Hello hitesh insta fam");
})

app.listen(port, () => {
    console.log("Server running");
});


// const port = 3000

// app.get('/', (req, res) => res.send('Hello World!'))

// app.listen(port, () => console.log(`Example app listening on port ${port}!`))