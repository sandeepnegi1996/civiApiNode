const dynamoose = require('dynamoose');
var AWS = require("aws-sdk");
var attr = require("dynamodb-data-types").AttributeValue;
AWS.config.update({ region: "us-east-2" });
const NodeModel = dynamoose.model('NodeModel', {
    DeviceID: String,
    BAttery: String,
    AccelerationX: Number,
    AccelerationY: Number,
    AccelerationZ: Number,
    Temperature: Number,
    Humidity: Number,
    CNT: Number

});


// "DeviceID": "Civinode1",
//     "Battery": "97%",
//         "AccelerationX": -9,
//             "AccelerationY": 34,
//                 "AccelerationZ": 4,
//                     "Temperature": 56,
//                         "Humidity": 100,
//                             "CNT": 2