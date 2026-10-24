const express = require("express");
const userRouter = require("./routes/userRouter");
const tripRouter = require("./routes/tripRouter");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello from Express!");
});

app.use("/api/v1/users", userRouter);
app.use("/trips", tripRouter);
app.use("/api/v1/trips", tripRouter);

module.exports = app;
