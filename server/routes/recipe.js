const express = require('express');
const router = express.Router();
const Recipe = require('../models/recipeSchema');

router.get('/recipe', async (req, res) => {
    try {
        const dishName = req.query.dishName;
        let cursor = await Recipe.find({name: dishName});

        console.log(dishName);

        if (!cursor)
            return res.status(400).json({error:"No data available"})

        const recipe = cursor[0];

        //console.log("recipe -> ", recipe);

        let data = []
        data.push(recipe);

        const course = recipe.course[0];
        const cuisine = recipe.cuisines[0];
        cursor = await Recipe.find({$or : [{course: course}, {cuisine: cuisine}]});

        if(cursor){
            for (i=0; i<cursor.length; i++){
                if (cursor[i].name == recipe.name)
                    cursor.splice(i,1);
                //console.log(cursor[i].name);
            }
        }

        let suggestions = []

        if (cursor.length <= 3){
            //push all in suggestions
            for (i=0; i<cursor.length; i++){
                likeRecipe = {}
                likeRecipe.name = cursor[i].name;
                likeRecipe.photo = cursor[i].photo;
                suggestions.push(likeRecipe);
            }
        }
        else {
            //push random recipes
            let randomIndex;
            while(1){
                if (suggestions.length == 3)
                    break;
                randomIndex = Math.floor(Math.random() * cursor.length);
                likeRecipe = {}
                likeRecipe.name = cursor[randomIndex].name;
                likeRecipe.photo = cursor[randomIndex].photo;
                if (!contain(suggestions, likeRecipe)){
                    //console.log("Adding");
                    suggestions.push(likeRecipe);
                }
            }

        }

        data.push(suggestions);

        //console.log(data);

        return res.status(200).json(data);
        
    } catch (error) {
        console.log("recipe route error -> ", error);
        return res.status(500).json({error: "Something went wrong!"})
    }
});

function contain(arr, obj){
    for(i=0; i<arr.length; i++){
        if (obj.name == arr[i].name){
            //console.log("true");
            return true;
        }
    }
   // console.log("false");
    return false;
}

module.exports = router;