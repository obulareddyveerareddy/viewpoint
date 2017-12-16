
import google           from 'googleapis';
import googleAuth       from 'google-auth-library';
import credentials      from './../google-api-service/client_secret.json';
import GoogleOAuth2Instance from './GoogleOAuth2Instance'

class GoogleRestService extends GoogleOAuth2Instance{
    
    constructor(db){
        super(db);
        this.db = db;
        this.oauth2Client = null;
    }
    
    getAllCalendarEventsByUser(){
        let self = this;
        return new Promise(function (resolve, reject) {
            var calendar = google.calendar('v3');
            calendar.events.list({
                auth: self.getOAuth2Client(),
                calendarId: 'primary',
                timeMin: (new Date()).toISOString(),
                maxResults: 10,
                singleEvents: true,
                orderBy: 'startTime'
            }, function(err, response) {
                if (err) {
                  console.log('The API returned an error: ' + err);
                  reject(err);
                }
                console.log('Total response.items --- '+response.items);
                resolve(response.items);
            });
        })
    }
    
    createSpeadSheet(){
        let self    = this;
        return new Promise(function (resolve, reject) {
            var sheets = google.sheets('v4');
            sheets.spreadsheets.create({
                auth: self.getOAuth2Client(),
                resource: {
                    properties:{
                        title: "FleetMetric"
                    }
                }
            }, (err, response) => {
                if (err) {
                  console.log('The API returned an error: ' + err);
                  reject(err);
                } else {
                    console.log(response);
                    resolve(response);
                }
            });
        })
    }
    
}

export default GoogleRestService;
