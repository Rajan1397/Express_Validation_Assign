const express = require("express");

const bodyParser = require("body-parser");

const data = bodyParser.json();

const app = express();

app.post(
  "/users",
  data,
  function (req, res, next) {
    const body = req.body;
    console.log(body);
    // first_name, last_name, email, pincode, age, gender,
    if (body.first_name == null) {
      res.send("Please enter valid first name");
    }
    if (body.last_name == null) {
      res.send("Please enter valid last name");
    }
    if (!body.email.includes("@gmail.com")) {
      res.send("Please enter valid email address");
    }
    if (body.pincode.length < 6) {
      res.send("Please enter a valid pincode");
    }
    if (body.age <= 99) {
      res.send("Please enter a valid age");
    }
    if (
      body.gender !== "male" &&
      body.gender !== "female" &&
      body.gender !== "others"
    ) {
      res.send("Please enter a valid gender");
    }

    next();
  },
  function (req, res, next) {
    res.json("Succesefull");
  }
);

//app.get("/", (req, res) => {});

app.listen(8000, () => {
  console.log("Server started at port 8000");
});
