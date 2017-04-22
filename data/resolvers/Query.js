const mysql = require('mysql2/promise');

export const Query = {
  characters: async () => {
    let connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'rpg'
    });

    let [rows, fields] = await connection.query('SELECT * FROM characters');

    connection.end();

    return rows;
  },
  test() {
    return 'test';
  }
};
