const Recipe = require('./recipeSchema');
const recipeArray = require('./sample');

async function addData(){
    try {
        recipeArray.map((r) => {
            const rec = new Recipe(r);
            rec.save()
            .then(() => console.log(`${rec.name} added`))
            .catch(() => console.log("failed"));
            
        });
    } catch (error) {
        console.log(error);
    }
}

addData();