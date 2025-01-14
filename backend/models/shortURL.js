const mongoose = require("mongoose");
const {customAlphabet} = require("nanoid");

const generateId = customAlphabet('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz', 10);

const shortenerSchema = mongoose.Schema({
    id: {type: String, required: true},
    url: {type: String, required: true},
}, {timestamps: true})


shortenerSchema.pre('save', function (next) {
    if (!this.id) {
        this.id = generateId();
    }
    next();
});

const ShortUrls = mongoose.model("ShortUrls", shortenerSchema);

module.exports = ShortUrls;