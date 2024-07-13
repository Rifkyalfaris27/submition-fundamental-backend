import albums from "./albums.js";
import { nanoid } from "nanoid";
import songs from "./songs.js";

const addAlbumHandler = (request, h) => {
  const { name, year } = request.payload;

  const id = `album-${nanoid(16)}`;

  const newAlbum = {
    id,
    name,
    year,
  };

  albums.push(newAlbum);

  const isSuccess = albums.filter((album) => album.id === id).length > 0;

  if (isSuccess) {
    const response = h.response({
      status: "success",
      data: {
        albumId: id,
      },
    });
    response.code(201);
    return response;
  }

  const response = h.response({
    status: "fail",
    message: "Album gagal ditambahkan",
  });
  response.code(500);
  return response;
};

const getAlbumByIdHandler = (request, h) => {
  const { id } = request.params;

  //   const album = albums.filter((album) => album.id === id)[0].concat(songs);

  const album = albums.find((album) => album.id === id);

  if (album) {
    const albumSongs = songs.filter((song) => song.albumId === id);

    album.songs = albumSongs.length ? albumSongs : []
    const response = h.response({
      status: "success",
      data: {
        album: album,
      },
    });
    response.code(200);
    return response;
  }

  const response = h.response({
    status: "fail",
    message: "Album tidak ditemukan",
  });
  response.code(404);
  return response;
};

const editAlbumByIdHandler = (request, h) => {
  const { id } = request.params;

  const { name, year } = request.payload;

  const index = albums.findIndex((album) => album.id === id);

  if (index !== -1) {
    albums[index] = {
      ...albums[index],
      name,
      year,
    };

    const response = h.response({
      status: "success",
      message: "Album berhasil diperbarui",
    });
    response.code(200);
    return response;
  }

  const response = h.response({
    status: "fail",
    message: "Album gagal perbarui. Id tidak ditemukan"
  })

  response.code(404)
  return response
};

const deleteAlbumByIdHandler = (request, h) => {
  const { id } = request.params;

  const index = albums.findIndex((album) => album.id === id);

  if (index !== -1) {
    albums.splice(index, 1);
    const response = h.response({
      status: "success",
      message: "Album berhasil dihapus",
    });
    response.code(200);
    return response;
  }

  const response = h.response({
    status: "fail",
    message: "Gagal menghapus album. Id tidak ditemukan",
  });
  response.code(404);
  return response;
};




// song handler
const addSongHandler = (request, h) => {
  const { title, year, genre, performer, duration, albumId = null} = request.payload;

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

  songs.push(newSong);

  const isSuccess = songs.filter((song) => song.id === id).length > 0;

  if (isSuccess) {
    const response = h.response({
      status: "success",
      data: {
        songId: id,
      },
    });
    response.code(201);
    return response;
  }

  const response = h.response({
    status: "fail",
    message: "Lagu gagal ditambahkan",
  });
  response.code(400);
  return response;
};

const getAllSongsHandler = () => {
  const mapSongs = (song) =>
    song.map((song) => ({
      id: song.id,
      title: song.title,
      performer: song.performer,
    }));

  // const response = h.response();
  return {
    status: "success",
    data: {
      songs: mapSongs(songs),
    },
  };
};

const getSongByIdHandler = (request, h) => {
  const { id } = request.params;

  const songFilter = songs.filter((song) => song.id === id)[0];

  if (songFilter !== undefined) {
    const response = h.response({
      status: "success",
      data: {
        song: songFilter,
      },
    });
    response.code(200);
    return response;
  }

  const response = h.response({
    status: "fail",
    message: "Album tidak ditemukan",
  });
  response.code(404);
  return response;
};

const editSongByIdHandler = (request, h) => {
  const { id } = request.params;

  const { title, year, genre, performer, duration, albumId } = request.payload;

  const index = songs.findIndex((album) => album.id === id);

  if (index !== -1) {
    songs[index] = {
      ...songs[index],
      title,
      year,
      genre,
      performer,
      duration,
      albumId,
    };

    const response = h.response({
      status: "success",
      message: "Album berhasil diperbarui",
    });
    response.code(200);
    return response;
  }

  const response = h.response({
    status: "fail",
    message: "Lagu gagal diperbarui. Id tidak ditemukan"
  })
  response.code(404)
  return response
};

const deleteSongByIdHandler = (request, h) => {
  const { id } = request.params;

  const index = songs.findIndex((song) => song.id === id);

  if (index !== -1) {
    songs.splice(index, 1);
    const response = h.response({
      status: "success",
      message: "Lagu berhasil dihapus",
    });
    response.code(200);
    return response;
  }

  const response = h.response({
    status: "fail",
    message: "Gagal menghapus lagu. Id tidak ditemukan",
  });
  response.code(404);
  return response;
};

export {
  addAlbumHandler,
  editAlbumByIdHandler,
  getAlbumByIdHandler,
  deleteAlbumByIdHandler,

  // song handler
  addSongHandler,
  getAllSongsHandler,
  getSongByIdHandler,
  editSongByIdHandler,
  deleteSongByIdHandler,
};
