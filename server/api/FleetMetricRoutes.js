
import GoogleRestService from './../google-api-service/GoogleRestService';

module.exports = function(app, db){
  
  app.use('/api/fleetmetric/active/user', function(req, res){
    console.log(req.user);
    db.set('user', req.user).write();
    
    var calendar_auth_url = new GoogleRestService(db).getOAuthClientInstance().generateAuthUrl({
      access_type: 'offline',
      scope: ['https://www.googleapis.com/auth/userinfo.profile',
              'https://www.googleapis.com/auth/userinfo.email',
              'https://www.googleapis.com/auth/drive',
              'https://www.googleapis.com/auth/drive.file',
              'https://www.googleapis.com/auth/spreadsheets',
              'https://www.googleapis.com/auth/calendar']
    });
    res.redirect(calendar_auth_url);
  });
  
  app.use('/api/auth/google/calendar/callback', function(req, res){
    
    var code = req.query.code;
    console.log(code);
    new GoogleRestService(db).getOAuthClientInstance().getToken(code, function(err, tokens){
      if(!err){
        console.log('~~~~~~~~~~~~~>>> /api/auth/google/calendar/callback');
        console.log(tokens);
        console.log(tokens.access_token);
        db.set('authTokenDetails', tokens).write();
        console.log(db.get('authTokenDetails'));
      }
    });
    res.redirect('/#/fleetmetric/');
  });
  
  app.use('/api/auth/fleetmetric/user', function(req, res){
  
    let user = db.get('user');
    res.send(user);
  });

};
