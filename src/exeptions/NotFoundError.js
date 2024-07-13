const ClientError = require('./ClientError')

class NotFoundError extends ClientError {
  constructor(message) {
    super(message, 404);
    this.name = "NotFoundError";
  }
}

module.exports = NotFoundError;

// import ClientError from "./ClientError.js";

// class NotFoundError extends ClientError {
//   constructor(message) {
//     super(message, 404);
//     this.name = "NotFoundError";
//   }
// }

// export default NotFoundError;
