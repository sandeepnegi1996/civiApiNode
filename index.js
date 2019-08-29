const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("this node api is working ");
});

port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("listening started");
});
