let colors = ["red", "blue", "green", "orange"];
let answers = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"];

const express = require("express");
const port = 3216;

const app = express();

app.get("/", (req, res) => {
    res.send(`<h1>LINKS TO APPS</h1><br /><br /><a href="/home">Home Page</a><br /><br /><a href="/greeting/:name">Greeting Page</a><br /><br /><a href="/colors/:indexOfColor">Color Page</a><br /><br /><a href="/hello/:firstname/:lastname">Hello Page</a><br /><br /><a href="/tip/:total/:tipPercentage">Tip Calculator</a><br /><br /><a href="/magic/:question">Magic 8 Ball</a><br /><br /><a href="/99bottles/:numberOfBottles">99 Bottles</a>`);
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

app.get("/magic/:question", (req, res) => {
    let randomAnswer = Math.floor(Math.random() * answers.length);
    res.send(`<h1>${req.params.question}</h1> <p>${answers[randomAnswer]}</p>`);
});

app.get("/99bottles/:numberOfBottles", (req, res) => {
    if(req.params.numberOfBottles > 2) {
        res.send(`<p>${req.params.numberOfBottles} bottles of beer on the wall. ${req.params.numberOfBottles} bottles of beer...</p><br /><br /><p>Take one down, pass it around...</p><br /><br /><p><a href="${req.params.numberOfBottles - 1}">${req.params.numberOfBottles - 1} bottles</a> of beer on the wall.</p>`);
    } else if (req.params.numberOfBottles == 2) {
        res.send(`<p>${req.params.numberOfBottles} bottles of beer on the wall. ${req.params.numberOfBottles} bottles of beer...</p><br /><br /><p>Take one down, pass it around...</p><br /><br /><p><a href="${req.params.numberOfBottles - 1}">${req.params.numberOfBottles - 1} bottle</a> of beer on the wall.</p>`);
    } else if (req.params.numberOfBottles == 1) {
        res.send(`<p>1 bottle of beer on the wall. 1 bottle of beer...Take it down, pass it around...No more bottles of beer on the wall.</p><br /><br /><h2>Back to <a href="/">main page</a></h2>`);
    } else {
        res.send(`<h1>Back to <a href="/">main page</a></h1>`);
    }
});

// app.get("/:test", (req, res) => {
//     res.send(`<p>Test</p>`);
// });

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});