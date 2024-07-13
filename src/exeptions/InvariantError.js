const ClientError = require("./ClientError");

class InvariantError extends ClientError {
  constructor(message) {
    super(message);
    this.name = "InvariantError";
  }
}

module.exports = InvariantError;

// import ClientError from "./ClientError.js";

// class InvariantError extends ClientError {
//   constructor(message) {
//     super(message);
//     this.name = "InvariantError";
//   }
// }

// export default InvariantError;
