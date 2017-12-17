
import google                   from 'googleapis';
import LowdbDaoService          from './../google-api-service/LowdbDaoService';
import {googleOAuth2Instance}   from './../google-api-service/GoogleOAuth2Instance'

module.exports = function(app, db, instance){
  
  app.use('/api/fleetmetric/active/user', function(req, res){
    db.set('user', req.user).write();
    
    var calendar_auth_url = googleOAuth2Instance.getOAuth2ClientInstance(db, instance).generateAuthUrl({
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
    googleOAuth2Instance.getOAuth2ClientInstance(db, instance).getToken(code, function(err, tokens){
      if(!err){
        let userUniqueId = new LowdbDaoService(db).getLoggedInUserUniqueId();
        db.get('authTokenDetails').push({id:userUniqueId, token:tokens}).write();
        googleOAuth2Instance.getOAuth2ClientInstance(db, instance).credentials = tokens;
        googleOAuth2Instance.setOAuth2ClientCredentials(tokens);
      }
    });
    res.redirect('/#/fleetmetric/');
  });
  
  app.use('/api/auth/fleetmetric/user', function(req, res){
  
    let user = db.get('user');
    res.send(user);
  });

};
