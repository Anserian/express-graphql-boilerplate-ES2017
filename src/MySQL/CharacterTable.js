const mysql = require('mysql2/promise');

export default class CharacterTable {
  constructor() {

  }

  connect = async() => {
    this.connection = await mysql.createConnection({
      host: 'localhost'

    });
  }
}
