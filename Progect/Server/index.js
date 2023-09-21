const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const dotenv = require('dotenv').config();
const userRouter = require("./routes/user.routes");
const authRouter = require("./routes/user.auth.routes");
const cardsRouter  = require("./routes/cards.routes");
const categoriesRouter = require("./routes/categories.routes");
const commentsRouter = require("./routes/comments.routes");
const favoritesRouter = require("./routes/favorites.routes");
const orderRouter = require("./routes/orders.routes");
const productsRouter = require("./routes/products.routes");
const ratingRouter = require("./routes/rating.routes");
const sellersRouter = require("./routes/sellers.routes");
const statusesoforderRouter = require("./routes/statusesoforder.routes");
const statusesofproductRouter = require("./routes/statusesofproduct.routes");


const db = require('./models');
db.sequelize.sync();

PORT = process.env.PORT;
app.use(bodyParser.json())

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:4000");
  res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type");
  res.header('Access-Control-Allow-Credentials', 'true')
  res.header("Access-Control-Allow-Methods" , "GET,POST,PUT,DELETE,OPTIONS");
  next();
  });
app.use('/login',authRouter);
app.use('/users',userRouter);
app.use('/cards',cardsRouter);
app.use('/categories',categoriesRouter);
app.use('/comments',commentsRouter);
app.use('/favorites',favoritesRouter);
app.use('/orders',orderRouter);
app.use('/products',productsRouter);
app.use('/rating',ratingRouter);
app.use('/sellers',sellersRouter);
app.use('/statusesoforder',statusesoforderRouter);
app.use('/statusesofproduct',statusesofproductRouter);


app.listen(PORT, () => {
    console.log(`Сервер начал прослушивание запросов на порту http://localhost:${PORT}`)
})

