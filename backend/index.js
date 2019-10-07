'use strict'
const express = require("express");
const app = express();
const routes=require('./routes');
require("dotenv").config();
const port=process.env.PORT||3001;

app.use(routes);

app.use("/", express.static("../frontend/build"));




app.listen(port, () => {
    console.log(`Server runnig at port ${port}`)
})
