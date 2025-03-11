const express = require("express");

const connectDB = require("./config/database");

const User = require("./models/user");

const app = express();

app.post("/signup", async (req, res) => {
  const userObj = {
    firstName: "Deepender",
    lastName: "sigh",
    emailId: "Deep@email.com",
    password: "Deepender",
  };

  const user = new User(userObj);

  try {
    await user.save();
    res.send("User Added Successfully!");
  } catch (err) {
    res.status(400).send("Error saving the user:" + err.message);
  }
});

connectDB()
  .then(() => {
    console.log("Database connection established...");
    app.listen(3333, () => {
      console.log("Server is successfully running on port 3333....");
    });
  })
  .catch((err) => {
    console.error(err);
  });
