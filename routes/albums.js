const express = require('express'),
 router = express.Router(), 
 tracksModel = require('../models/tracksModel'); 

router.get('/', async function(req, res, next) {
    const trackData = await tracksModel.getAll(); 
    console.log("track data", trackData); 

  res.render('template', { 
    locals: {
      title:"",
      data: trackData 
    },
    partials: {
      partial: "partial-albums"
    }
  });
});

module.exports = router;