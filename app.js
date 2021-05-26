// Required npms

const express = require("express");
const bodyParser = require("body-parser");

// start app
const app = express();

// start ejs
app.set('view engine', 'ejs');

// something we need, but I'm not totally sure why
app.use(express.urlencoded({ extended: true}));
app.use(express.static("public"));

// setting systems variable as an empty array
let systems = [];

// Home page
app.get("/", function(req, res){
  res.render("project", {

  });
});

app.get("/systems", function(req, res){
  res.render("systems", {
    projectTitle: projectTitleName
  });
});

// After project title post go to systems page
app.post("/", function(req, res){
  let projectTitleName = req.body.ProjectTitleInput;
  res.render("systems", {
    projectTitle: projectTitleName
  });
});

app.post("/systems", function(req, res){
  projectTitleName = req.h1;
  let newSystem = req.body.addSystem;
  systems.push(newSystem);
  res.redirect("/systems");
});

app.listen(3000, function() {
  console.log("listening on server 3000");
});
