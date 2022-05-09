const express = require("express");
const app = express();

// setting up the template engine
app.set("views", "./views");
app.set("view engine", "pug");

// function that checks the time of the request and return true or false based on if the time is coressponding to the working hours
const time_function = function (req, res, next) {
  var dateTime = new Date();
  var day = dateTime.getDay();
  var hour = dateTime.getHours();
  var visible = false;
  if (day >= 1 && day <= 5 && hour > 9 && hour < 17) {
    visible = true;
  }
  if (visible) {
    next();
  } else {
    // if the time of the request not in working hours , we render return_soon page
    res.render("return_soon");
  }
};

// applying our middleware function
app.use(time_function);

// get request for home page
app.get("/", function (req, res) {
  res.status(200);
  res.render("home");
});

// get request for services page
app.get("/services", function (req, res) {
  res.status(200);
  res.render("services");
});

// get request for contact page
app.get("/contact", function (req, res) {
  res.status(200);
  res.render("contact");
});

const port = 3000;
app.listen(port, function () {
  console.log(
    "The server is running, " +
      " please, open your browser at http://localhost:%s",
    port
  );
});
