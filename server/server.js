const dotenv = require('dotenv');
const express = require('express');
const app = express();
const cors = require('cors');

dotenv.config({path: './config.env'});
const PORT = process.env.PORT;

//Mongoose connection
require('./db/connection');

//converting any json data in objects
app.use(express.json());

app.use(cors());

//Router
const indexRouter = require('./routes/indexRoute.js');
const loginRouter = require('./routes/loginRoute.js');
const breakfastRouter = require('./routes/breakfastRoute');
const snacksRouter = require('./routes/snacksRoute');
const mainCourseRouter = require('./routes/mainCourseRoute');
const dessertsRouter = require('./routes/dessertsRoute');
const recipeRouter = require('./routes/recipe');
const cakeRouter = require('./routes/cakes');
const beverageRouter = require('./routes/beverages');


app.use(indexRouter);
app.use(loginRouter);
app.use(breakfastRouter);
app.use(snacksRouter);
app.use(mainCourseRouter);
app.use(dessertsRouter);
app.use(recipeRouter);
app.use(cakeRouter);
app.use(beverageRouter);



app.listen(PORT, () => {
    console.log('Server is running at port', PORT);
});


