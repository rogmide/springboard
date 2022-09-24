const ExpressError = require("./expressError");

// ########################################################
// This is middleware Function that run after req and before res
function logger(req, res, next) {
  console.log(`Receiveda ${req.method} request to ${req.path}`);
  return next();
}

function checkPassword(req, res, next) {
  try {
    if (req.query.password === "abc") {
      return next();
    } else {
      throw new ExpressError("Missing Password", 402);
    }
  } catch (error) {
    return next(error);
  }
}

module.exports = { logger, checkPassword };
