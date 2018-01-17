
import google                   from 'googleapis';
import {googleOAuth2Instance}   from './../google-api-service/GoogleOAuth2Instance';
import {personStore}            from './../store/PersonStore';

module.exports = function(app, instance){
  
  app.use('/api/fleetmetric/active/user', function(req, res){
    var authUrl = googleOAuth2Instance.getOAuth2ClientInstance(instance).generateAuthUrl({
      access_type: 'offline',
      scope: ['https://www.googleapis.com/auth/userinfo.profile',
              'https://www.googleapis.com/auth/userinfo.email',
              'https://www.googleapis.com/auth/drive',
              'https://www.googleapis.com/auth/drive.file',
              'https://www.googleapis.com/auth/spreadsheets',
              'https://www.googleapis.com/auth/calendar']
    });
    res.redirect(authUrl);
  });
  
  app.use('/api/auth/google/calendar/callback', function(req, res){
    
    var code = req.query.code;
    googleOAuth2Instance.getOAuth2ClientInstance(instance).getToken(code, function(err, tokens){
      if(!err){
        var user = req.user;
        personStore.setUser(user);
        personStore.setTokenById(user.id, tokens);
        googleOAuth2Instance.getOAuth2ClientInstance(instance).credentials = tokens;
        googleOAuth2Instance.setOAuth2ClientCredentials(tokens);
      }
    });
    res.redirect('/#/fleetmetric/');
  });
  
  app.use('/api/auth/fleetmetric/user', function(req, res){
    console.log('~~~~~~~~~~~~~~~ >>> /api/auth/fleetmetric/user <<< ~~~~~~~~~~~~~~~');
    console.log(req.user);
    res.send(req.user);
  });

};
