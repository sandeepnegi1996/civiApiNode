const express = require("express");
const router = express.Router();
var AWS = require("aws-sdk");
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
        console.log("inside query");
        if (err) {
            console.log("Error", err);
        } else {
            //   console.log(data);
            // console.log(data.Items[0].DeviceID);
            // console.log(data.Items[0].data);
            console.log("inside the else block");
            console.log(data.Items[0].data);
            finalDataObj = data.Items[0].data
            console.log(finalDataObj.DeviceID);

            var finaldataReturn = {

                TableName: data.dbTableName,
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

    //res.send("unable to request the database")
});

router.get("/test", (req, res) => {
    res.json("request checking dynamo db");
});


module.exports = router;






