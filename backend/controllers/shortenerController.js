const URLData = require('../models/shortURL')

const createShortURL = async (req, res) => {
    try {
        if (!req.body.url) {
            return res.status(400).json({message: 'Todo name is required'});
        }
        const newURL = new URLData({
            url: req.body.url
        });
        await newURL.save();
        res.status(201).json(newURL);
    } catch (err) {
        res.status(400).json({message: err.message});
    }
};

const getShortURL = async (req, res) => {
    const urlID = req.params.id;
    try {
        const url = await URLData.findOne({_id: urlID});
        if (!url) {
            return res.status(404).send('Todo not found or user not authorized');
        }

        res.status(200).json(url);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
};


module.exports = {
    createShortURL,
    getShortURL,
}