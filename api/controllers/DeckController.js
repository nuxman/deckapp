/**
 * DeckController
 *
 * @description :: Server-side logic for managing decks
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  procura: function (req,res) {
    const https = require('https');

    var carta_id = req.param('cartaid');

    var options = {
      hostname: 'api.deckbrew.com',
      port: 443,
      path: '/mtg/cards/'+carta_id,
      method: 'GET'
    };
   var request = https.request(options, function (resp) {
     var dados = "";
     resp.on('data', function (chunk) {
       dados += chunk;
     });
     resp.on('end', function (err) {
       res.locals.requestData = JSON.parse(dados);
       res.view('deck/show');

     })
   });
    request.end();
  }

};

