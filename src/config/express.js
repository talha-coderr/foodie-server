const bodyParser = require("body-parser");
const express = require("express"),
    app = express(),
    router = require("../routes/index");
path = require("path");

app.use(bodyParser.json({ limit: "500mb" }));
app.use(
    bodyParser.urlencoded({
        limit: "500mb",
        extended: true,
        parameterLimit: 50000,
    })
);

app.use(bodyParser.json());

app.use((req, res, next) => {
    if (
        !["POST", "GET", "DELETE", "PUT", "PATCH", "OPTIONS"].includes(req.method)
    )
        res.status(403).json({ message: "Mehtod Not allowed" });
    next();
});

app.use("/api/v1", router);
module.exports = app;
