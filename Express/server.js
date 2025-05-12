import express from "express";

const port = 4000;
const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req,res)=>{
    res.render("index");
});

app.get("/checkout", (req,res) => {
    res.render("checkout");
});

app.get("/women", (req,res)=>{
    res.render("women");
});


app.listen(port, ()=>{
    console.log(`Server listening at port ${port}.`);
});