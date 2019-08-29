// Load the AWS SDK for Node.js
var AWS = require("aws-sdk");
var attr = require("dynamodb-data-types").AttributeValue;
// Set the region
AWS.config.update({ region: "us-east-2" });

// Create the DynamoDB service object
var ddb = new AWS.DynamoDB();

var params = {
  TableName: "youtubeTable",
  Key: {
    DeviceId: { S: "NodeDevice1" },
    TimeStamp: { S: "1566553626391" }
  }
};

// Call DynamoDB to read the item from the table
ddb.getItem(params, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    var obj = data.Item.data["M"].state["M"].reported["M"];
    console.log(obj.color);
    console.log(obj.temperature);
    console.log(obj.DeviceId);
  }
});
