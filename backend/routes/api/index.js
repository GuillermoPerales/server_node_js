const app=require("express").Router();



app.use("/main", (req, res) => {
    res.status(200).send("Esta ok")
    })


module.exports=app;    