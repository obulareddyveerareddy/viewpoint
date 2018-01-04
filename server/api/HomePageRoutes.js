
import {googleRestService}      from './../google-api-service/GoogleRestService';
import {spreadsheetService}     from './../google-api-service/SpreadsheetService';
import {personStore}            from './../store/PersonStore';

module.exports = function(app, db, instance){
  
  app.use('/api/google/calendar/events', function(req, res){
    let refreshOccurrence = 0;
    googleRestService.getAllCalendarEventsByUser(db, instance).then(function(response){
        res.send(response);
    }, function(err){
        if(err && refreshOccurrence === 0){
            refreshOccurrence++;
            res.redirect('/api/auth/google');
        }
    });
  });
  
  app.use('/api/google/spreadsheet/get/fleet', function(req, res){
    let user = req.user;
    if(user){
      let spreadSheetIdByLoginUser = personStore.getSpreadSheetIdByEmail(user);
      console.log('~~~~~~~~~~~~~~~>> /api/google/spreadsheet/get/fleet <<~~~~~~~~~~~~~~~');
      console.log(spreadSheetIdByLoginUser);
      if(!spreadSheetIdByLoginUser){
        spreadsheetService.createSpeadSheet().then((response) => {
          console.log('~~~~~~~~~~~~~~~>> spreadsheetService.createSpeadSheet() <<~~~~~~~~~~~~~~~');
          console.log(response);
          personStore.setKeyPairById(user.id, response.spreadsheetId);
        }, (error) => {
          console.log(error);
        });
      }else{
        spreadsheetService.getData(spreadSheetIdByLoginUser,'Sheet1!A2:C').then((response) => {
          console.log('~~~~~~~~~~~~~~~>> spreadsheetService.getData() <<~~~~~~~~~~~~~~~');
          console.log(response);
          if(response){
            res.send(response);
          }
        }, (error) => {
          console.log(error);
        });
      }
    }
    res.send({});
  });

};
