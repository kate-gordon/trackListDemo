const express = require('express'),
 router = express.Router(), 
 TrackModel = require('../models/tracksModel'); 

router.get('/', async function(req, res, next) {
    const trackData = await TrackModel.getAll(); 
    // console.log("track data", trackData); 
    
    res.status(200).json(trackData);
  
});

router.post("/add", async (req, res) => {
  const { song_title, artist_name, writer } = req.body; 

  const trackInstance = new TrackModel(song_title); 
  const track = trackInstance.addTrack(); 

  /*

    Have a request to add the Artist to the DB, RETURN THE ARTIST ID
    Have a request to add the Writer to the DB, RETURN THE WRITER ID

    Once BOTH are retuned, add the Song to the DB, with the ID of the Artist and Writer

    db.one instead of db.result will return the ID you need to get the song title 

  */


  if(track.rowCount !== 1) {
    res.sendStatus(500); 
  } else {
    res.redirect("/albums"); 
  }
})

module.exports = router;