const express = require("express");
const app = express();
const port = process.env.PORT || 3002;
const mongoose = require("mongoose");

app.use(express.json({}));

//routes for api
app.use("/api/users", require("./routes/users"));
app.use("/api/messages", require("./routes/messages"));

//express "/"" route
app.get("/", (req, res) => res.json({ Message: "Hello World!" }));

//start server on port
app.listen(port, () => console.log(`Server listening on port ${port}!`));
