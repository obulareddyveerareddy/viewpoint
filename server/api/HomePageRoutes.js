
import LowdbDaoService          from './../google-api-service/LowdbDaoService';
import {googleRestService}      from './../google-api-service/GoogleRestService';
import {googleOAuth2Instance}   from './../google-api-service/GoogleOAuth2Instance'

module.exports = function(app, db, instance){
  
  app.use('/api/google/calendar/events', function(req, res){
    let refreshOccurrence = 0;
    googleRestService.getAllCalendarEventsByUser(db, instance).then(function(response){
        console.log('Total calendarEvents --- '+response);
        res.send(response);
    }, function(err){
        if(err && refreshOccurrence === 0){
            refreshOccurrence++;
            res.redirect('/api/auth/google');
        }
    });
  });
  
  app.use('/api/google/spreadsheet/events', function(req, res){
    let refreshOccurrence = 0;
    googleRestService.createSpeadSheet(db, instance).then(function(response){
        console.log('Total calendarEvents --- '+response);
        res.send(response);
    }, function(err){
        if(err && refreshOccurrence === 0){
            refreshOccurrence++;
            res.redirect('/api/auth/google');
        }
    });
  });

};
