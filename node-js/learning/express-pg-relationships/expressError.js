class ExpressError extends Error {
  
  constructor(msg, status) {
    // ##############################################
    // super to run the constructior from Error Class
    super();
    this.message = msg;
    this.status = status;
    console.error(this.stack);
  }
}

module.exports = ExpressError