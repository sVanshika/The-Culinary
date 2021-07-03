const express = require('express');
const router = express.Router();
const Recipe = require('../models/recipeSchema');

router.get('/breakfast', async (req, res) => {
    try {
        let cursor = await Recipe.find({course:"Breakfast"});

        console.log(cursor.length, " breakfast recipes");

        if (!cursor)
            return res.status(400).json({error:"No data available"})
        
        return res.status(200).json(cursor);
        
    } catch (error) {
        console.log("breakfast route error -> ", error);
        return res.status(500).json({error: "Something went wrong!"})
    }
});

module.exports = router;