const express = require("express");
const router = express.Router();
var AWS = require("aws-sdk");
var attr = require("dynamodb-data-types").AttributeValue;
// Set the region
AWS.config.update({ region: "us-east-2" });

// Create the DynamoDB service object
var ddb = new AWS.DynamoDB();


// router.post("/:nodeid/:timestamp", (req, res) => {
//   const devicenmae = req.body.params.nodeid;
//   const timeseries = req.body.params.timestamp;

//   res.send(
//     `request received device name is ${devicenmae} and time is ${timeseries}`
//   );
// });

router.get("/:nodeid/:timestamp", (req, res) => {
  var data = {

    nodeid: req.params.nodeid,
    timestamp: req.params.timestamp

  };

  //this is the params which is being sent by the get request pass this paramater to the 
  //requesting from  the database
  console.log(data.nodeid);
  console.log(data.timestamp);

  var params = {
    TableName: "civitest2",
    Key: {
      DeviceId: { S: data.nodeid },
      Timestamp: { S: data.timestamp }
    }
  };

  var finalData;
  ddb.getItem(params, function (err, data) {
    if (err) {
      console.log("Error", err);
    } else {
      // console.log(data);
      var obj = data.Item.data["M"].state["M"].reported["M"];
      console.log(obj);
      finalData = obj;
      res.send(finalData);
    }
  });




  //  res.json(finalData);
});

router.get("/node", (req, res) => {
  res.json("called node");
});

module.exports = router;
