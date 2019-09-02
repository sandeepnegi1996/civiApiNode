// Load the AWS SDK for Node.js
var AWS = require("aws-sdk");
var attr = require("dynamodb-data-types").AttributeValue;
// Set the region
AWS.config.update({ region: "us-east-2" });

// Create the DynamoDB service object
var ddb = new AWS.DynamoDB();

var params = {
  TableName: "civitest2",
  Key: {
    DeviceId: { S: "cividevice1" },
    Timestamp: { S: "1567414865469" }
  }
};

ddb.getItem(params, function (err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log(data);
    var obj = data.Item.data["M"].state["M"].reported["M"];
    console.log(obj.humidity);
    // var obj = data.Item.data["M"].state["M"].reported["M"];
    // console.log(obj.color);
    // console.log(obj.temperature);
    // console.log(obj.DeviceId);
  }
});
