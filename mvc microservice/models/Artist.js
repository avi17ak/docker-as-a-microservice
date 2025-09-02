const db = require("../db/connect")

class Artist {
  constructor({artist_id, name, genre}) {
    this.id = artist_id
    this.name = name
    this.genre = genre
  }

  static async getAll() {
    try {
      const { rows } = await db.query("SELECT * FROM artists;")
      if (!rows.length) {
        throw new Error("No artists found")
      }
      return rows.map((artist) => new Artist(artist))
    } catch (error) {
      throw new Error("Error fetching artists")
    }
  }

  static async getOne(name) {
    try {
      const { rows } = await db.query("SELECT * FROM artists WHERE name = $1;", [name])
      if (!rows.length) {
        throw new Error("No artist found")
      }
      return new Artist(rows[0])
    } catch (error) {
      throw new Error("Error fetching artist")
    }
  }

  static async create(data) {
    const { name, genre } = data
    const { rows } = await db.query('INSERT INTO artists(name, genre) VALUES ($1, $2) RETURNING *', [name, genre])
    const artistName = rows[0].name
    const newArtist = await Artist.getOne(artistName)
    return newArtist
  }

  async update(data) {
    try {

      const { name, genre } = data
      const { rows } = await db.query('UPDATE artists SET (name, genre) = ($1, $2) WHERE name = $3 RETURNING *;', [name, genre, this.name])
      if (rows.length !== 1) {
        throw new Error ("Not able to update artist")
      }
      return new Artist(rows[0])
      } catch (error) {
        throw new Error("Error updating artist")
      }
  }

  async destroy() {
    const { rows } = await db.query('DELETE FROM artists WHERE name = $1 RETURNING *;', [this.name])
    if (rows.length !== 1){
      throw new Error("Not able to delete artist")
    }
    return new Artist(rows[0])
  }
}

module.exports = Artist