const db = require('./conn'); 

class trackList {
    constructor(title) {
        this.title = title;  
    }
// Method that talks to the database 

    static async getAll() {
        try {
            const response = await db.any(`SELECT s.*, a.*, artist.* FROM song AS s INNER JOIN album AS a ON s.album_id = a.id INNER JOIN artist ON a.artist_id = artist.id`); 
            console.log('response', response); 
            return response; 
        } catch(error) {
            return error.message; 
        }
    }
}

module.exports = trackList; 