
import google           from 'googleapis';
import googleAuth       from 'google-auth-library';
import credentials      from './client_secret.json';
import LowdbDaoService  from './LowdbDaoService';

class GoogleOAuth2Instance{
    
    constructor(){
        console.log('$$ ~~~~~~~~~~~~~~~~~ >>> GoogleOAuth2Instance <<< ~~~~~~~~~~~~~~~~~ $$');
        this.oauth2Client = null;
    }
    
    getOAuth2ClientInstance(db, instance){
        var clientSecret    = credentials[instance].web.client_secret;
        var clientId        = credentials[instance].web.client_id;
        var redirectUrl     = credentials[instance].web.redirect_uris[0];
        var auth            = new googleAuth();
        this.oauth2Client   = new auth.OAuth2(clientId, clientSecret, redirectUrl);
        return this.oauth2Client;
    }
    
    setOAuth2ClientCredentials(tokens){
        this.oauth2Client.credentials = tokens;
        this.oauth2Client.expiry_date = true;
    }
    
    getOAuth2Client(){
        return this.oauth2Client;
    }
    
}


export let googleOAuth2Instance = new GoogleOAuth2Instance();
