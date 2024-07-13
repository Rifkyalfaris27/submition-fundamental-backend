const routes = require("./routes");
const SongsHandler = require("./handler");

module.exports = {
  name: "songs",
  version: "1.0.0",
  register: async (server, { service, validator }) => {
    const songsHandler = new SongsHandler(service, validator);
    server.route(routes(songsHandler));
  },
};

// import routes from "./routes.js";
// import SongsHandler from "./handler.js";

// export const songsPlugin = {
//   name: "songs",
//   version: "1.0.0",
//   register: async (server, { service, validator }) => {
//     const songsHandler = new SongsHandler(service, validator);
//     server.route(routes(songsHandler))
//   },
// };
