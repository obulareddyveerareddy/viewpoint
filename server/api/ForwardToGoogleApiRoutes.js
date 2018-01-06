import https      from 'https';
module.exports = function(app, instance){
  
  app.use('/maps/api/place/autocomplete/json', function(req, res, next){
    console.log('~~~~~~~~~~~~~~~ >>> /maps/api/place/autocomplete/json <<< ~~~~~~~~~~~~~~~');
    let path = 'https://maps.googleapis.com/maps/api/place/autocomplete/json?input='+req.query.input+'&key=AIzaSyBS9GwpkonjgNVvqz6CHE_quQw8KybMwvE';
    console.log(path);
    https.get(path, (resp) => {
      let data = '';
      resp.on('data', (chunk) => {
        data += chunk;
      });
      resp.on('end', () => {
        res.send(data);
      });
    }).on("error", (err) => {
      res.send(err);
    });
    
  });

};
