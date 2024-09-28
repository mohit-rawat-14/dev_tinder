const express = require("express");

const app = express();

app.use("/home", (req, res) => {
  res.send("welcome to dev tinder homepage");
});

app.listen(3003, () => {
  console.log("server listening on port 3003");
});
