const express = require("express");
const router = express.Router();

// router.post("/:nodeid/:timestamp", (req, res) => {
//   const devicenmae = req.body.params.nodeid;
//   const timeseries = req.body.params.timestamp;

//   res.send(
//     `request received device name is ${devicenmae} and time is ${timeseries}`
//   );
// });

router.get("/:nodeid/:timestamp", (req, res) => {
  var data = {
    nodeDevice: {
      nodeid: req.params.nodeid,
      timestamp: req.params.timestamp
    }
  };

  res.json(data);
});

router.get("/node", (req, res) => {
  res.json("called node");
});

module.exports = router;
