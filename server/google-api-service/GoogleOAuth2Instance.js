
import google           from 'googleapis';
import googleAuth       from 'google-auth-library';
import credentials      from './../google-api-service/client_secret.json';

class GoogleOAuth2Instance{
    
    constructor(db){
        this.db = db;
        this.oauth2Client = null;
    }
    
    getOAuthClientInstance(){
        var clientSecret    = credentials.web.client_secret;
        var clientId        = credentials.web.client_id;
        var redirectUrl     = credentials.web.redirect_uris[0];
        var auth            = new googleAuth();
        return new auth.OAuth2(clientId, clientSecret, redirectUrl);
    }
    
    getOAuth2Client(){
        var clientSecret    = credentials.web.client_secret;
        var clientId        = credentials.web.client_id;
        var redirectUrl     = credentials.web.redirect_uris[0];
        var auth            = new googleAuth();
        this.oauth2Client    = new auth.OAuth2(clientId, clientSecret, redirectUrl);
        this.oauth2Client.credentials = this.db.getState().authTokenDetails;
        
        return this.oauth2Client;
    }
    
}

export default GoogleOAuth2Instance;
