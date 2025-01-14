const mongoose = require("mongoose");


const shortenerSchema = mongoose.Schema({
    url: {type: String, required: true},
}, {timestamps: true});

const ShortUrls = mongoose.model("ShortUrls", shortenerSchema);

module.exports = ShortUrls;
