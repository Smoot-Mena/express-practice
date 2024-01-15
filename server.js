let colors = ["red", "blue", "green", "orange"];

const express = require("express");
const port = 3216;

const app = express();

app.get("/", (req, res) => {
    res.send(`<h1>Hello Express!</h1>`);
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
})

app.get("/:test", (req, res) => {
    res.send(`<p>Test</p>`);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});