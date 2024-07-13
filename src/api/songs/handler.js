class SongsHandler {
  constructor(service, validator) {
    this._service = service;
    this._validator = validator;
  }

  async postSongHandler(request, h) {
    this._validator.validateSongPayload(request.payload);
    const { title, year, genre, performer, duration, albumId } =
      request.payload;

    const songId = await this._service.addSong({
      title,
      year,
      genre,
      performer,
      duration,
      albumId,
    });

    const response = h.response({
      status: "success",
      message: "Album berhasil ditambahkan",
      data: {
        songId,
      },
    });
    response.code(201);
    return response;
  }

  async getSongsHandler() {
    const songs = await this._service.getSongs();
    return {
      status: "success",
      data: {
        songs,
      },
    };
  }

  async getSongByIdHandler(request, h) {
    const { id } = request.params;

    const song = await this._service.getSongById(id);

    return {
      status: "success",
      data: {
        song,
      },
    };
  }

  async putSongByIdHandler(request, h) {
    this._validator.validateSongPayload(request.payload);
    const { id } = request.params;

    await this._service.editSongById(id, request.payload);

    return {
      status: "success",
      message: "Lagu berhasil diperbarui",
    };
  }

  async deleteSongByIdHandler(request, h) {
    const { id } = request.params;

    await this._service.deleteSongById(id);

    return {
      status: "success",
      message: "Lagu berhasil dihapus",
    };
  }
}

module.exports = SongsHandler;

// import ClientError from "../../exeptions/ClientError.js";

// class SongsHandler {
//   constructor(service, validator) {
//     this._service = service;
//     this._validator = validator;
//   }

//   postSongHandler(request, h) {
//     this._validator.validateSongPayload(request.payload);
//     const { title, year, genre, performer, duration, albumId } =
//       request.payload;

//     const songId = this._service.addSong({
//       title,
//       year,
//       genre,
//       performer,
//       duration,
//       albumId,
//     });

//     const response = h.response({
//       status: "success",
//       message: "Album berhasil ditambahkan",
//       data: {
//         songId,
//       },
//     });
//     response.code(201);
//     return response;
//   }

//   getSongsHandler() {
//     const songs = this._service.getSongs();
//     return {
//       status: "success",
//       data: {
//         songs,
//       },
//     };
//   }

//   getSongByIdHandler(request, h) {
//     const { id } = request.params;

//     const song = this._service.getSongById(id);

//     return {
//       status: "success",
//       data: {
//         song,
//       },
//     };
//   }

//   putSongByIdHandler(request, h) {
//     this._validator.validateSongPayload(request.payload);
//     const { id } = request.params;

//     this._service.editSongById(id, request.payload);

//     return {
//       status: "success",
//       message: "Lagu berhasil diperbarui",
//     };
//   }

//   deleteSongByIdHandler(request, h) {
//     const { id } = request.params;

//     this._service.deleteSongById(id);

//     return {
//       status: "success",
//       message: "Lagu berhasil dihapus",
//     };
//   }
// }

// export default SongsHandler;
