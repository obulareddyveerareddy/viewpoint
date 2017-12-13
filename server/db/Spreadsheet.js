import GoogleSpreadsheet  from 'google-spreadsheet';
import async              from 'async';

import fs                 from 'fs';
import readline           from 'readline';
import google             from 'googleapis';
import googleAuth         from 'google-auth-library';

var credentials = require('./client_secret.json');
class Spreadsheet {

  constructor(){
    console.log('~~~~~~~~~~~~~~~~~~~~ >>> Spreadsheet <<< ~~~~~~~~~~~~~~~~~~~~');
  }

  readSpreadSheetById(){
    var clientSecret = credentials.web.client_secret;
    var clientId = credentials.web.client_id;
    var redirectUrl = credentials.web.redirect_uris[0];
    var auth = new googleAuth();
    var oauth2Client = new auth.OAuth2(clientId, clientSecret, redirectUrl);
    console.log('------------- Check token is stored or not -------------------');
    console.log(oauth2Client);

    var calendar_auth_url = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: 'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/calendar'
    });
    console.log('~~~~~~~~~~~~~~~ authUrl '+calendar_auth_url);
    
  }

}

module.exports = new Spreadsheet();
