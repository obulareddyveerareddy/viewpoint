
import GoogleRestService from './../google-api-service/GoogleRestService';

module.exports = function(app, db, instance){
  
  app.use('/api/google/calendar/events', function(req, res){
    new GoogleRestService(db, instance).createSpeadSheet().then(function(response){
        console.log('Total calendarEvents --- '+response);
        res.send(response);
    });
  });

};
