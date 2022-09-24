const ExpressError = require("./expressError");

// ########################################################
// This is middleware Function that run after req and before res
function logger(req, res, next) {
  console.log(`Receiveda ${req.method} request to ${req.path}`);
  return next();
}

module.exports = { logger };
