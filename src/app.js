const express = require('express');
const path=require('path');
const hbs=require('hbs');

const app=express();
const port=process.env.PORT || 3000;

const staticPath=path.join(__dirname, "../public");
const views_Path=path.join(__dirname, '../templates/views');
const partials_Path=path.join(__dirname, '../templates/partials');

app.use(express.static(staticPath));
app.set("view engine", "hbs");
app.set("views", views_Path)
hbs.registerPartials(partials_Path);


//home page
app.get("/", function(req, res){
  res.render("index",{
    title:"Weather App -home"
  });
});

//about page
app.get("/about", function(req, res){
  res.render("about",{
    title:"Weather App -about"
  });
});

//weather page
app.get("/weather", function(req, res){
  res.render('weather',{
    title:"Weather App -weather"

  });
});

//404 error page
app.get("*", function(req, res){
  res.status(404).render("404error",{
    title:"Page is not found .Weather App"
  });
});

app.listen(port, ()=>{
  console.log(`listening at the port ${port}`);
});
