const express = require("express");
const router = express.Router();
const mysqlConnection = require("../database");


router.get("/", (req, res)=>{
    mysqlConnection.query("SELECT * FROM product", (err, rows, fields)=>{
        if(!err){
            res.json(rows);
        } else{
            console.error(err)
        }
    });
})

router.get("/:id", (req, res)=>{
    const { id } = req.params;
    mysqlConnection.query("SELECT * FROM product WHERE id = ?", [id], (err, rows, fields)=>{
        if(!err){
            res.json(rows[0]);
        } else{
            console.error(err)
        }
    })
})
router.get("/category/:cat", (req, res)=>{
    const { cat } = req.params;
    mysqlConnection.query("SELECT * FROM product WHERE category = ?", [cat], (err, rows, fields)=>{
        if(!err){
            res.json(rows);
        } else{
            console.error(err)
        }
    })
})
router.get("/name/:name", (req, res)=>{
    const { name } = req.params;
    mysqlConnection.query("SELECT * FROM product WHERE name REGEXP ?", [name], (err, rows, fields)=>{
        if(!err){
            res.json(rows);
        } else{
            console.error(err)
        }
    })
})

module.exports = router;