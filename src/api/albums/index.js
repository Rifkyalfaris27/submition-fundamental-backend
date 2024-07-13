const routes = require("./routes");
const AlbumsHandler = require("./handler");

module.exports = {
  name: "album",
  version: "1.0.0",
  register: async (server, { service, validator }) => {
    const albumsHandler = new AlbumsHandler(service, validator);
    server.route(routes(albumsHandler));
  },
};

// import routes from "./routes.js";
// import AlbumsHandler from "./handler.js";

// export const albumsPlugin = {
//   name: "album",
//   version: "1.0.0",
//   register: async (server, { service, validator }) => {
//     const albumsHandler = new AlbumsHandler(service, validator);
//     server.route(routes(albumsHandler))
//   },
// };
