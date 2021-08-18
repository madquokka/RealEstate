// server.js template
const express = require('express');
const app = express();
const PORT = 8080;
//  DB Configuration
require('./src/database');

const CLIENT_BUILD_PATH = path.join(__dirname, "../client/build");

// Static files
app.use(express.static(CLIENT_BUILD_PATH));

// Server React Client
app.get("/", function (req, res) {
    res.sendFile(path.join(CLIENT_BUILD_PATH, "index.html"));
});

app.get('/', (req, res) => {
    res.send("Hello World ! ");
});

app.listen(PORT, function () {
    console.log(`Server Listening on ${PORT}`);
});

// will redirect all the non-api routes to react frontend
router.use(function (req, res) {
    res.sendFile(path.join(__dirname, '../client', 'build', 'index.html'));
});

