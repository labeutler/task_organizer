const express = require("express");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

const app = express();
const PORT = process.env.PORT || 3001;

//Setting up to use middleware
app.use(express.json());
app.use('/', htmlRoutes);
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use(express.urlencoded({ extended: true }));

// app.get("/notes", (req, res) => res.sendFile(notesHTMLPath));

app.listen(PORT, () => {
    console.log(`Task Organizer listening on Port ${PORT}`);
});
