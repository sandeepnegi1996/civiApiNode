const express = require("express");
const router = express.Router();
var AWS = require("aws-sdk");
var attr = require("dynamodb-data-types").AttributeValue;
// Set the region
AWS.config.update({ region: "us-east-2" });
var ddb = new AWS.DynamoDB.DocumentClient();


router.post("/", (req, res) => {
    var data = {
        dbTableName: req.body.tablename
    };
    console.log(data.dbTableName);

    dbQueryTableName = data.dbTableName;

    var params = {
        TableName: dbQueryTableName,
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
    var finalDataObj;
    ddb.query(params, function (err, data) {
        if (err) {
            console.log("Error", err);
        } else {
            //   console.log(data);
            // console.log(data.Items[0].DeviceID);
            // console.log(data.Items[0].data);
            console.log(data.Items[0].data);
            finalDataObj = data.Items[0].data
            console.log(finalDataObj.DeviceID);

            var finaldataReturn = {
                DeviceID: finalDataObj.DeviceID,
                Battery: finalDataObj.Battery,
                AccelerationX: finalDataObj.AccelerationX,
                AccelerationY: finalDataObj.AccelerationY,
                AccelerationZ: finalDataObj.AccelerationZ,
                Temperature: finalDataObj.Temperature,
                Humidity: finalDataObj.Humidity,
                CNTData: finalDataObj.CNT

            };


            console.log("outside function sending back the object");
            res.send(finaldataReturn);



        }
    });


});

// router.get("/", (req, res) => {
//     res.json("request checking dynamo db");
// });

module.exports = router;








// // Load the AWS SDK for Node.js
// var AWS = require("aws-sdk");
// var attr = require("dynamodb-data-types").AttributeValue;
// // Set the region
// AWS.config.update({ region: "us-east-2" });

// // Create the DynamoDB service object
// var ddb = new AWS.DynamoDB.DocumentClient();

// // var params = {
// //     TableName: "civinew",
// //     Key: {
// //         DeviceId: { S: "cividevice1" },
// //         Timestamp: { S: "1567578190750" }
// //     }
// // };

// // ddb.getItem(params, function (err, data) {
// //     if (err) {
// //         console.log("Error", err);
// //     } else {
// //         console.log(data);
// //         // var obj = data.Item.data["M"].state["M"].reported["M"];
// //         //console.log(obj);
// //         // var obj = data.Item.data["M"].state["M"].reported["M"];
// //         // console.log(obj.color);
// //         // console.log(obj.temperature);
// //         // console.log(obj.DeviceId);
// //     }
// // });

// var params = {
//     TableName: "civinew",
//     KeyConditionExpression: "#deviceid = :deviceidvalue",
//     ExpressionAttributeNames: {
//         "#deviceid": "DeviceID"
//     },
//     ExpressionAttributeValues: {
//         ":deviceidvalue": "cividevice1"
//     },
//     Limit: 1,
//     ScanIndexForward: false
// };


// ddb.query(params, function (err, data) {
//     if (err) {
//         console.log("Error", err);
//     } else {
//         //   console.log(data);
//         console.log(data.Items[0].DeviceID);
//         console.log(data.Items[0].data);
//         console.log(typeof data.Items[0].data);

//     }
// });

