
import google           from 'googleapis';
import googleAuth       from 'google-auth-library';
import credentials      from './client_secret.json';

class GoogleOAuth2Instance{
    
    constructor(db, instance){
        this.db = db;
        this.instance = instance;
        this.oauth2Client = null;
    }
    
    getOAuthClientInstance(){
        var clientSecret    = credentials[this.instance].web.client_secret;
        var clientId        = credentials[this.instance].web.client_id;
        var redirectUrl     = credentials[this.instance].web.redirect_uris[0];
        var auth            = new googleAuth();
        return new auth.OAuth2(clientId, clientSecret, redirectUrl);
    }
    
    getOAuth2Client(){
        var clientSecret    = credentials[this.instance].web.client_secret;
        var clientId        = credentials[this.instance].web.client_id;
        var redirectUrl     = credentials[this.instance].web.redirect_uris[0];
        var auth            = new googleAuth();
        this.oauth2Client    = new auth.OAuth2(clientId, clientSecret, redirectUrl);
        this.oauth2Client.credentials = this.db.getState().authTokenDetails;
        
        return this.oauth2Client;
    }
    
}

export default GoogleOAuth2Instance;
