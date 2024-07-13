const { nanoid } = require("nanoid");
const InvariantError = require("../../exeptions/InvariantError.js");

class AlbumsService {
  constructor() {
    this._albums = [];
  }

  addAlbum({ name, year }) {
    const id = `album-${nanoid(16)}`;

    const newAlbum = {
      id,
      name,
      year,
    };

    this._albums.push(newAlbum);

    const isSuccess =
      this._albums.filter((album) => album.id === id).length > 0;

    if (!isSuccess) {
      throw new InvariantError("Album gagal ditambahkan");
    }

    return id;
  }

  getAlbumById(id) {
    const song = this._albums.filter((album) => album.id === id)[0];

    if (!song) {
      throw new NotFoundError("album tidak ditemukan");
    }

    return song;
  }

  editAlbumById(id, { name, year }) {
    const index = this._albums.findIndex((album) => album.id === id);

    if (index === -1) {
      throw new NotFoundError("Gagal memperbarui album. Id tidak ditemukan");
    }

    this._albums[index] = {
      ...this._albums[index],
      name,
      year,
    };
  }

  deleteAlbumById(id) {
    const index = this._albums.findIndex((album) => album.id === id);

    if (index === -1) {
      throw new NotFoundError("Album gagal dihapus. Id tidak ditemukan");
    }

    return this._albums.splice(index, 1);
  }
}

module.exports = AlbumsService;

// import InvariantError from "../../exeptions/InvariantError.js";
// import NotFoundError from "../../exeptions/NotFoundError.js";
// import SongsService from "./SongsService.js";
// import { nanoid } from "nanoid";

// class AlbumsService {
//   constructor() {
//     this._albums = [];
//     this._songService = new SongsService();
//   }

//   addAlbum({ name, year }) {
//     const id = `album-${nanoid(16)}`;

//     const newAlbum = {
//       id,
//       name,
//       year,
//     };

//     this._albums.push(newAlbum);

//     const isSuccess =
//       this._albums.filter((album) => album.id === id).length > 0;

//     if (!isSuccess) {
//       throw new InvariantError("Album gagal ditambahkan");
//     }

//     return id;
//   }

//   getAlbumById(id) {
//     const song = this._albums.filter((album) => album.id === id)[0];

//     if (!song) {
//       throw new NotFoundError("album tidak ditemukan");
//     }

//     return song;
//   }

//   editAlbumById(id, { name, year }) {
//     const index = this._albums.findIndex((album) => album.id === id);

//     if (index === -1) {
//       throw new NotFoundError("Gagal memperbarui album. Id tidak ditemukan");
//     }

//     this._albums[index] = {
//       ...this._albums[index],
//       name,
//       year,
//     };
//   }

//   deleteAlbumById(id) {
//     const index = this._albums.findIndex((album) => album.id === id);

//     if (index === -1) {
//       throw new NotFoundError("Album gagal dihapus. Id tidak ditemukan");
//     }

//     return this._albums.splice(index, 1);
//   }
// }

// export default AlbumsService;
