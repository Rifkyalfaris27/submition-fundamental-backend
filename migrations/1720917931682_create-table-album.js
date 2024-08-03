exports.up = (pgm) => {
    pgm.createTable("album", {
      id: {
        type: "VARCHAR(30)",
        primaryKey: true,
      },
      name: {
        type: "TEXT",
        notNull: true,
      },
      year: {
        type: "INT",
        notNull: true,
      },
    });
  };
  
  exports.down = (pgm) => {
    pgm.dropTable("album");
  };
  