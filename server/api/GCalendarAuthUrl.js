import GoogleSpreadsheet  from 'google-spreadsheet';
import async              from 'async';

import fs                 from 'fs';
import readline           from 'readline';
import google             from 'googleapis';
import googleAuth         from 'google-auth-library';

var credentials = require('./../db/client_secret.json');

var clientSecret = credentials.web.client_secret;
var clientId = credentials.web.client_id;
var redirectUrl = credentials.web.redirect_uris[0];
var auth = new googleAuth();

module.exports.authClient = new auth.OAuth2(clientId, clientSecret, redirectUrl);
