const express = require("express");
const shortenerRouter = express.Router();
const shortUrlController = require("../controllers/shortenerController");


shortenerRouter.post('/',shortUrlController.createShortURL)
shortenerRouter.get('/:id',shortUrlController.getShortURL)


module.exports = shortenerRouter