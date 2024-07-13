const InvariantError = require("../../exeptions/InvariantError");
const { SongPayloadSchema } = require("./schema");

const SongValidator = {
  validateSongPayload: (payload) => {
    const validationResult = SongPayloadSchema.validate(payload);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
};

module.exports = SongValidator;

// import InvariantError from "../../exeptions/InvariantError.js";
// import SongPayloadSchema from "./schema.js";

// const SongValidator = {
//   validateSongPayload: (payload) => {
//     const validationResult = SongPayloadSchema.validate(payload);
//     if (validationResult.error) {
//       throw new InvariantError(validationResult.error.message);
//     }
//   },
// };

// export default SongValidator;
