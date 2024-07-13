const NotFoundError = require("../../exeptions/NotFoundError");
const InvariantError = require("../../exeptions/InvariantError");
const { nanoid } = require("nanoid");

class SongsService {
  constructor() {
    this._songs = [];
  }

  addSong({ title, year, genre, performer, duration, albumId }) {
    const id = `song-${nanoid(16)}`;

    const newSong = {
      id,
      title,
      year,
      genre,
      performer,
      duration,
      albumId,
    };

    this._songs.push(newSong);

    const isSuccess = this._songs.filter((song) => song.id === id).length > 0;

    if (!isSuccess) {
      throw new InvariantError("Lagu gagal ditambahkan");
    }

    return id;
  }

  getSongs() {
    const mapSongs = (song) =>
      song.map((song) => ({
        id: song.id,
        title: song.title,
        performer: song.performer,
      }));
    return mapSongs(this._songs);
  }

  getSongById(id) {
    const song = this._songs.filter((song) => song.id === id)[0];

    if (!song) {
      throw new NotFoundError("song tidak ditemukan");
    }

    return song;
  }

  editSongById(id, { title, year, genre, performer, duration, albumId }) {
    const index = this._songs.findIndex((song) => song.id === id);

    if (index === -1) {
      throw new NotFoundError("Gagal memperbarui song. Id tidak ditemukan");
    }

    this._songs[index] = {
      ...this._songs[index],
      title,
      year,
      genre,
      performer,
      duration,
      albumId,
    };
  }

  deleteSongById(id) {
    const index = this._songs.findIndex((song) => song.id === id);

    if (index === -1) {
      throw new NotFoundError("song gagal dihapus. Id tidak ditemukan");
    }

    return this._songs.splice(index, 1);
  }
}

module.exports = SongsService;

// import NotFoundError from "../../exeptions/NotFoundError.js";
// import InvariantError from "../../exeptions/InvariantError.js";
// import { nanoid } from "nanoid";

// class SongsService {
//   constructor() {
//     this._songs = [];
//   }

//   addSong({ title, year, genre, performer, duration, albumId }) {
//     const id = `song-${nanoid(16)}`;

//     const newSong = {
//       id,
//       title,
//       year,
//       genre,
//       performer,
//       duration,
//       albumId,
//     };

//     this._songs.push(newSong);

//     const isSuccess = this._songs.filter((song) => song.id === id).length > 0;

//     if (!isSuccess) {
//       throw new InvariantError("Lagu gagal ditambahkan");
//     }

//     return id;
//   }

//   getSongs() {
//     const mapSongs = (song) =>
//       song.map((song) => ({
//         id: song.id,
//         title: song.title,
//         performer: song.performer,
//       }));
//     return mapSongs(this._songs);
//   }

//   getSongById(id) {
//     const song = this._songs.filter((song) => song.id === id)[0];

//     if (!song) {
//       throw new NotFoundError("song tidak ditemukan");
//     }

//     return song;
//   }

//   editSongById(id, { title, year, genre, performer, duration, albumId }) {
//     const index = this._songs.findIndex((song) => song.id === id);

//     if (index === -1) {
//       throw new NotFoundError("Gagal memperbarui song. Id tidak ditemukan");
//     }

//     this._songs[index] = {
//       ...this._songs[index],
//       title,
//       year,
//       genre,
//       performer,
//       duration,
//       albumId,
//     };
//   }

//   deleteSongById(id) {
//     const index = this._songs.findIndex((song) => song.id === id);

//     if (index === -1) {
//       throw new NotFoundError("song gagal dihapus. Id tidak ditemukan");
//     }

//     return this._songs.splice(index, 1);
//   }
// }

// export default SongsService;
