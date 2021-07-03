import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import Clock from '../images/clock.svg';

const Recipes = () => {
    const params = useParams();
 
    const [recipe, setRecipe] = useState({});
    const [suggestions, setSuggestions] = useState([]);
    const [isEmpty, setEmpty] = useState(true);

    const url = "http://localhost:5000/";

    useEffect(() => {   
        axios.get(`${url}recipe`, {
            params:{
                dishName: params.dishName
            }
        })
        .then((data) => {
            console.log(data.data);
            setRecipe(data.data[0]);
            setSuggestions(data.data[1]);
            setEmpty(false);
        })
        .catch((err) => {
            console.log("recipe axios error -> ", err);
            setEmpty(true);
        })

        
    }, []);

    



    return(
        <div>
        <div className="row d-flex justify-content-center">
        <div className="recipeContainer col-md-6 col-sm-10">
            {!isEmpty ?
                <div className="recipe">
                    <h1>{recipe.name}</h1>
                    <img className="" src={`https://drive.google.com/uc?export=view&id=${recipe.photo}`} alt={recipe.name} />
                    <div className="row">
                        {recipe.servings ? 
                            <div className="col-md-6">
                                <p><strong>Yields</strong></p> 
                                <p>{recipe.servings} Servings</p>
                            </div>
                        : "" }
                        {/* {recipe.prepTime ?
                            <div className="col-md-2">
                                <div className="d-flex">
                                <img src={Clock} alt="clock" width="20px" height="20px" className="clock"></img>
                                <p className="time">Prep Time</p>
                                </div>
                                <p className="ml-auto">{recipe.prepTime} mins</p>
                            </div>
                        : "" } */}
                        {recipe.prepTime ?
                            <div className="col-md-2">
                                <p><strong>Prep Time</strong></p> 
                                <p>{recipe.prepTime} mins</p>
                            </div>
                        : "" }
                        {recipe.cookingTime ?
                            <div className="col-md-2">
                                <p><strong>Cook Time</strong></p> 
                                <p>{recipe.cookingTime} mins</p>
                            </div>
                        : "" }
                        {recipe.cookingTime || recipe.prepTime ?
                            <div className="col-md-2">
                                <p><strong>Total Time</strong></p> 
                                <p>{Number(recipe.prepTime) + Number(recipe.cookingTime)} mins</p>
                            </div>  
                        : "" }  
                    </div> 
                    {recipe.calories ? <p><strong>{recipe.calories}</strong></p>  : ""}
                    {recipe.course ? 
                        <div>
                            <span className="recipieFeature">Course: </span>
                            {recipe.course.map((c, index) => {
                                return(
                                    <span key={index}>{c}</span>
                                )
                            })}
                        </div>
                    : ""}  
                    {recipe.cuisines ? 
                        <div>
                            <span className="recipieFeature">Cuisines: </span>
                            {recipe.cuisines.map((c, index) => {
                                return(
                                    <span key={index}>{c}</span>
                                )
                            })}
                        </div>
                    : ""}  
                    {recipe.diet.length >= 1 ? 
                        <div>
                            <span className="recipieFeature">Diet: </span>
                            {recipe.diet.map((c, index) => {
                                return(
                                    <span key={index}>{c} </span>
                                )
                            })}
                        </div>
                    : ""}   
                    {recipe.difficulty ? 
                        <div>
                            <span className="recipieFeature">Difficulty: </span>
                            <span>{recipe.difficulty}</span>
                        </div> 
                    : ""}

                    <div className="my-4">
                        <h3 className="recipieFeature">Ingredients</h3>
                        {recipe.ingredients.map((group, index) => {
                            return(
                                <div key={index} className="my-3">
                                    <h5><strong>{group.groupTitle}</strong></h5>
                                    {group.group_ingredients.map((ingre, index2) => {
                                        return(
                                            <div key={index2}>
                                                <li>{ingre.slice(3)}</li>
                                            </div>
                                        )
                                    })}
                                </div>
                            )
                        })}
                    </div>

                    <div className="my-4">
                        <h3 className="recipieFeature">Instructions</h3>
                        {recipe.instructions.map((group, index) => {
                            return(
                                <div key={index} className="my-3">
                                    <h5><strong>{group.groupTitle}</strong></h5>
                                    {group.group_instructions.map((instruct, index2) => {
                                        return(
                                            <div key={index2}>
                                                <li>{instruct.slice(3)}</li>
                                            </div>
                                        )
                                    })}
                                </div>
                            )
                        })}
                    </div>

                </div>
                : "We will soon include the recipe you wished for. Thanks!"
            }
        </div>
        </div>



        <div className="row d-flex justify-content-center">
            <div className="likeContainer col-md-6 col-sm-10">
            <h3>You may also like</h3>
                {suggestions ? 
                    <div className="d-flex justify-content-between">
                        {suggestions.map((suggestion, index) => {
                            return(
                                <div key={index} className="suggestionCard col-md-4 col-sm" style={{backgroundImage: `url(${`https://drive.google.com/uc?export=view&id=${suggestion.photo}`})`}}>
                                    <h5>{suggestion.name}</h5>
                                    <a href={`/recipe/${suggestion.name}`} className="button">Read</a>
                                </div>
                            )
                        })}
                    </div>
                : "No suggestons"}
            </div>
        </div>
        </div>
    )
}

export default Recipes;