const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../config");
const ExpressError = require("../expressError");

function authenticateJTW(req, res, next) {
  try {
    const payload = jwt.verify(req.body._token, SECRET_KEY);
    req.user = payload;
    console.log("You have a valid Token!");
    return next();
  } catch (error) {
    // Dont worry about this error that jwt throw, is just failing the authenticate
    return next();
  }
}

function ensureLoggedIn(req, res, next) {
  if (!req.user) {
    return next(new ExpressError(`Unaouthorized`, 401));
  } else {
    return next();
  }
}

function ensureAdmin(req, res, next) {
  if (!req.user || req.user.type !== "admin") {
    return next(new ExpressError(`Must be an admin to go here`, 401));
  } else {
    return next();
  }
}

module.exports = { authenticateJTW, ensureLoggedIn, ensureAdmin };
