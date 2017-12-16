
import GoogleRestService from './../google-api-service/GoogleRestService';

module.exports = function(app, db){
  
  app.use('/api/google/calendar/events', function(req, res){
    new GoogleRestService(db).createSpeadSheet().then(function(response){
        console.log('Total calendarEvents --- '+response);
        res.send(response);
    });
  });

};
