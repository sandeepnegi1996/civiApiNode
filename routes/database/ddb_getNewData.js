// Load the AWS SDK for Node.js
var AWS = require("aws-sdk");
var attr = require("dynamodb-data-types").AttributeValue;
// Set the region
AWS.config.update({ region: "us-east-2" });

// Create the DynamoDB service object
var ddb = new AWS.DynamoDB.DocumentClient();

// var params = {
//     TableName: "civinew",
//     Key: {
//         DeviceId: { S: "cividevice1" },
//         Timestamp: { S: "1567578190750" }
//     }
// };

// ddb.getItem(params, function (err, data) {
//     if (err) {
//         console.log("Error", err);
//     } else {
//         console.log(data);
//         // var obj = data.Item.data["M"].state["M"].reported["M"];
//         //console.log(obj);
//         // var obj = data.Item.data["M"].state["M"].reported["M"];
//         // console.log(obj.color);
//         // console.log(obj.temperature);
//         // console.log(obj.DeviceId);
//     }
// });

var params = {
    TableName: "civinew",
    KeyConditionExpression: "#deviceid = :deviceidvalue",
    ExpressionAttributeNames: {
        "#deviceid": "DeviceID"
    },
    ExpressionAttributeValues: {
        ":deviceidvalue": "cividevice1"
    },
    Limit: 1,
    ScanIndexForward: false
};


ddb.query(params, function (err, data) {
    if (err) {
        console.log("Error", err);
    } else {
        //   console.log(data);
        console.log(data.Items[0].DeviceID);
        console.log(data.Items[0].data);
        console.log(typeof data.Items[0].data);
        // var objt = JSON.stringify(data.Items);
        // console.log(objt);

        // data.Items.forEach(element => {
        //     console.log(element);

        // });

        // var obj = data.Item.data["M"].state["M"].reported["M"];
        //console.log(obj);
        // var obj = data.Item.data["M"].state["M"].reported["M"];
        // console.log(obj.color);
        // console.log(obj.temperature);
        // console.log(obj.DeviceId);
    }
});



