const db = require("../config/db");

class Favorite {
  constructor(city, temperature, text) {
    this.city = city;
    this.temperature = temperature;
    this.text = text;
  }
  save() {
    let sql = `
      INSERT INTO favorites (
        city,
        temperature,
        text
      )
      VALUES(
        '${this.city}',
        '${this.temperature}',
        '${this.text}'
      )
        `;
    return db.execute(sql);
  }

  static findAll() {
    let sql = "SELECT * FROM favorites";
    return db.execute(sql);
  }

  static findByCity(city) {
    let sql = `SELECT * FROM favorites WHERE city = '${city}'`;
    return db.execute(sql);
  }

  static deleteCity(city) {
    let sql = `DELETE FROM favorites WHERE city = '${city}'`;
    return db.execute(sql);
  }
}

module.exports = Favorite;
