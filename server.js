const express = require("express");
const app = express();
const path = require("path");

const PORT = 3000;

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Default route
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
    console.log(`Pomodoro Timer running on http://localhost:${PORT}`);
});
