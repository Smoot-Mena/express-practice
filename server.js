let colors = ["red", "blue", "green", "orange"];

const express = require("express");
const port = 3216;

const app = express();

app.get("/", (req, res) => {
    res.send(`<h1>LINKS TO APPS</h1><br /><br /><a href="/home">Home Page</a><br /><br /><a href="/greeting/:name">Greeting Page</a><br /><br /><a href="/colors/:indexOfColor">Color Page</a><br /><br /><a href="/hello/:firstname/:lastname">Hello Page</a><br /><br /><a href="/tip/:total/:tipPercentage">Tip Calculator</a>`);
});

app.get("/home", (req, res) => {
    res.send(`<p>Welcome to the home page.</p>`);
});

app.get("/greeting/:name", (req, res) => {
    res.send(`<p>Yo, what's good, ${req.params.name}?</p>`);
});

app.get("/colors/:indexOfColor", (req, res) => {
    if (colors[req.params.indexOfColor]) {
        res.send(colors[req.params.indexOfColor]);
    } else {
        res.send("cannot find anything at this index: " + req.params.indexOfColor);
    }
});

app.get("/hello/:firstname/:lastname", (req, res) => {
    res.send("hello " + req.params.firstname + " " + req.params.lastname);
});

app.get("/tip/:total/:tipPercentage", (req, res) => {
    res.send(`<h1>Your calculated tip is: $${(req.params.total * req.params.tipPercentage / 100)}</h1>`);
});

// app.get("/:test", (req, res) => {
//     res.send(`<p>Test</p>`);
// });

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});