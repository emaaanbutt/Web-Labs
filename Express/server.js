import express from "express";

const port = 4000;
const app = express();

app.use(express.static("public"));

app.get("/", (req,res)=>{
    res.render("index.ejs");
});

app.get("/checkout", (req,res) => {
    res.render("checkout.ejs");
});


app.listen(port, ()=>{
    console.log(`Server listening at port ${port}.`);
});