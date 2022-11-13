const express = require("express");
const router = express.Router();
const mysqlConnection = require("../database");


router.get("/", (req, res)=>{
    mysqlConnection.query("SELECT * FROM category", (err, rows, fields)=>{
        if(!err){
            res.json(rows);
        } else{
            console.error(err)
        }
    });
})


module.exports = router;