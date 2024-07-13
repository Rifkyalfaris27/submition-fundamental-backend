import { addAlbumHandler, addSongHandler, deleteAlbumByIdHandler, deleteSongByIdHandler, editAlbumByIdHandler, editSongByIdHandler, getAlbumByIdHandler, getAllSongsHandler, getSongByIdHandler } from "./handler.js";


const routes = [
// album routes
  {
    method: "POST",
    path: "/albums",
    handler: addAlbumHandler,
  },
  {
    method: "GET",
    path: "/albums/{id}",
    handler: getAlbumByIdHandler,
  },
  {
    method: "PUT",
    path: "/albums/{id}",
    handler: editAlbumByIdHandler,
  },
  {
    method: "DELETE",
    path: "/albums/{id}",
    handler: deleteAlbumByIdHandler,
  },


// song routes
  {
    method: "POST",
    path: "/songs",
    handler: addSongHandler,
  },
  {
    method: "GET",
    path: "/songs",
    handler: getAllSongsHandler,
  },
  {
    method: "GET",
    path: "/songs/{id}",
    handler: getSongByIdHandler,
  },
  {
    method: "PUT",
    path: "/songs/{id}",
    handler: editSongByIdHandler,
  },
  {
    method: "DELETE",
    path: "/songs/{id}",
    handler: deleteSongByIdHandler,
  },
];

export default routes
