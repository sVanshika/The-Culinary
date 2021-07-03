const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const recipeSchema = new mongoose.Schema({
    name: {type: String, required: true},
    prepTime: {type: String},
    cookingTime: { type: String},
    ingredients: {type: Array, required:true},
    servings: {type: String},
    course: {type:Array, required:true}, //breakfast, brunch, lunch, evening snacks, dinner
    cuisines: {type:Array, required:true},
    diet: {type: Array}, //veg non-veg
    difficulty: {type:String}, //easy, mid, hard
    calories: {type: String},
    instructions: {type: Array, required:true},
    photo: {type:String}   
});  


const Recipe = mongoose.model('recipes', recipeSchema);
module.exports = Recipe;