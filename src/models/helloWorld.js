const mongoose = require("mongoose");

const helloWorldSchema = new mongoose.Schema(
    {
        helloWorld: {
            type: String,
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("helloWorld", helloWorldSchema);
