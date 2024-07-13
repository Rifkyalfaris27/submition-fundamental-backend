const InvariantError = require("../../exeptions/InvariantError");
const AlbumPayloadSchema = require("./schema");

const AlbumValidator = {
  validateAlbumPayload: (payload) => {
    const validationResult = AlbumPayloadSchema.validate(payload);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
};

module.exports = AlbumValidator;

// import InvariantError from "../../exeptions/InvariantError.js";
// import AlbumPayloadSchema from "./schema.js";

// const AlbumValidator = {
//   validateAlbumPayload: (payload) => {
//     const validationResult = AlbumPayloadSchema.validate(payload);
//     if (validationResult.error) {
//       throw new InvariantError(validationResult.error.message);
//     }
//   },
// };

// export default AlbumValidator;
