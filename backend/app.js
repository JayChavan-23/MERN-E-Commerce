const express = require("express");

const app = express();

const errorMiddleware = require('./middleware/error');

app.use(express.json());

//RouteImports
const product = require("./routes/productRoute");

app.use("/api/v1",product)

//MiddleWare for Errors
app.use(errorMiddleware);


module.exports = app