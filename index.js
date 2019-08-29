const express = require("express");
const app = express();

//adding the middle ware for the post request from the body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/devices", require("./routes/api/devices"));

app.use("/api/nodedata", require("./routes/database/requestFromDbRoute"));

port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
