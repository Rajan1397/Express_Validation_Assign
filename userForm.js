const express = require("express");
const { body, validationResult } = require("express-validator");

const app = express();

app.use(express.json());
// app.post("/user", (req, res) => {
//   User.create({
//     // first_name, last_name, email, pincode, age, gender,
//     first_name: req.body.first_name,
//     last_name: req.body.last_name,
//     email: req.body.email,
//     pincode: req.body.pincode,
//     age: req.body.age,
//     //gender: req.body.gender,
//   }).then((user) => res.json(user));
// });

app.post(
  "/user",
  //// first_name, last_name, email, pincode, age, gender,

  body("first_name").isString(),
  // password must be at least 5 chars long
  body("last_name").isString(),

  body("email").isEmail(),
  body("pincode").isLength({ min: 6 }),
  body("age").isLength({ max: 2 }),

  (req, res) => {
    console.log(res);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    User.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      pincode: req.body.pincode,
      age: req.body.age,
    }).then((user) => res.json(user));
  }
);

app.listen(8000, () => {
  console.log("Server started at port no 8000");
});
