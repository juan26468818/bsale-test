const express = require("express");
const app = express();
const path = require("path")


// Settings
app.set("port", process.env.PORT || 3000);

// Middlewares
app.use(express.json());

// Routes
app.use("/api/products", require("./src/routes/products"));
app.use("/api/categories", require("./src/routes/categories"));

// Static files
app.use(express.static(path.join(__dirname, "./front")))


// Starting the server
app.listen(app.get("port"), ()=>{
    console.log("Server on port", app.get("port"));
});