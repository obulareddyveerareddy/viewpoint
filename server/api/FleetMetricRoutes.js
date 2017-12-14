
import gCalendarAuthUrl from "./GCalendarAuthUrl";

module.exports = function(app){

  app.use('/api/fleetmetric/active/user', function(req, res){
    var calendar_auth_url = gCalendarAuthUrl.authClient.generateAuthUrl({
      access_type: 'offline',
      scope: 'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/calendar'
    });
    res.redirect(calendar_auth_url);
  });
  
  app.use('/api/auth/google/calendar/callback', function(req, res){
    
    var code = req.query.code;
    console.log(code);
    gCalendarAuthUrl.authClient.getToken(code, function(err, tokens){
      if(!err){
        console.log(tokens);
      }
    });
    res.redirect('/#/fleetmetric/');
  });

};
