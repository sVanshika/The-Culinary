import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Category = (props) => {

    const [recipes, setRecipes] = useState([]);

    const url = "http://localhost:5000/";

   
    useEffect(() => {
        async function getRecipes(){
            await axios.get(`${url}${props.category}`)
            .then((data) => {
                console.log(data.data);
                setRecipes(data.data);
            })
            .catch((err) => {
                console.log("breakfast route error -> ", err);
            })
        }
        getRecipes();
    },[props]);

    return(
        <div className="breakfastContainer">
            <h1>{props.title} Recipes</h1>
            <div className="recipeContainer d-flex flex-wrap justify-content-center">
                {recipes ?
                    recipes.map((r, index) => {
        
                        return(
                            <div className="card recipeCard border-0 py-3" key={index}>  
                                <div className="recipeImage">                          
                                    <img className="card-img-top" src={`https://drive.google.com/uc?export=view&id=${r.photo}`} alt="Card cap" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title recipeName">{r.name}</h5>
                                    <div className="recipeCuisine">
                                    {
                                        r.cuisines.map((c, i) => {
                                            return(
                                                <span key={i}>{c} </span>
                                            )
                                        })
                                    }
                                    </div>
                                    <a href={`/recipe/${r.name}`} className="button">Read</a>
                                </div>
                            </div>
                        )
                    }) 
                :
                <p className="oops">Oops! No content available :(</p>
                }
            </div>
          
            
        </div>
    );
};

export default Category;



