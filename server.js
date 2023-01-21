const express = require("express");
//const path = require("path");
//const routes to call public info in path
const htmlRoutes = require("./routes/htmlRoutes");
// const notesHTMLPath = path.join(__dirname, "public/notes.html");

const app = express();
const PORT = 3001;

//Setting up to use middleware
app.use(express.json());
app.use('/', htmlRoutes);
app.use(express.static('public'));


app.get("/", (req, res) => res.send("Hello bootcamp, what's up?"));

// app.get("/notes", (req, res) => res.sendFile(notesHTMLPath));

app.listen(PORT, () => {
    console.log(`Example Task Organizer listening on Port ${PORT}`);
});
