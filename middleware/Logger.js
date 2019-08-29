const moment = require("moment");

const logger = (req, res, next) => {
  console.log(
    `this is the protocol of the request ${
      req.protocol
    } and date formatter moment ${moment().format()} `
  );
  next();
};

module.exports = logger;
