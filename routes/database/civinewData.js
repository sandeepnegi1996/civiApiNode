const express = require("express");
const router = express.Router();
var AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-2" });

var ddb = new AWS.DynamoDB.DocumentClient();



    var params = {
        TableName: "nodecivi",
        KeyConditionExpression: "#deviceid = :deviceidvalue",
        ExpressionAttributeNames: {
            "#deviceid": "DeviceId"
        },
        ExpressionAttributeValues: {
            ":deviceidvalue": "nodecivi"
        },
        Limit: 1,
        ScanIndexForward: false
    };
    var finalDataObj;
    ddb.query(params, function (err, data) {
        console.log("inside query");
        if (err) {
            console.log("Error", err);
        } else {
             //  console.log(data);
            // console.log(data.Items[0].DeviceID);
             console.log(data.Items[0].data);
            console.log("inside the else block");

            // console.log(data.Items[0].data);
            // finalDataObj = data.Items[0].data
            // console.log(finalDataObj.DeviceID);

            // var finaldataReturn = {
            //     DeviceID: finalDataObj.DeviceID,
            //     Battery: finalDataObj.Battery,
            //     AccelerationX: finalDataObj.AccelerationX,
            //     AccelerationY: finalDataObj.AccelerationY,
            //     AccelerationZ: finalDataObj.AccelerationZ,
            //     Temperature: finalDataObj.Temperature,
            //     Humidity: finalDataObj.Humidity,
            //     CNTData: finalDataObj.CNT

            // };



        }
    });







