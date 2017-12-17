import _ from 'lodash';

class GoogleProfileService{
    
    constructor(db){
        this.db = db;
    }
    
    getLoggedInUserProfile(){
        return this.db.getState().user;
    }
    
    getLoggedInUserUniqueId(){
        return this.db.getState().user.id;
    }
    
    getOAuth2TokenByLoggedUser(){
        console.log('~~~~~~~~~~~~~~ >>> getOAuth2TokenByLoggedUser <<< ~~~~~~~~~~~~~~');
        let loggedUserUniqueId = this.getLoggedInUserUniqueId();
        let token;
        
        _.forEach(this.db.getState().authTokenDetails, function(value){
            if(value.id === loggedUserUniqueId){
                token = value.token.access_token;
            }
        });
        console.log(token);
        return token;
    }
}

export default GoogleProfileService;