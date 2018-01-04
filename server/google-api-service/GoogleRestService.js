
import google                   from 'googleapis';
import {googleOAuth2Instance}   from './GoogleOAuth2Instance'

class GoogleRestService{
    
    constructor(){
        console.log('$$ ~~~~~~~~~~~~~~~~~ >>> GoogleRestService <<< ~~~~~~~~~~~~~~~~~ $$');
    }
    
    getAllCalendarEventsByUser(instance){
        return new Promise(function (resolve, reject) {
            var calendar = google.calendar('v3');
            calendar.events.list({
                auth: googleOAuth2Instance.getOAuth2Client(),
                calendarId: 'primary',
                timeMin: (new Date()).toISOString(),
                maxResults: 10,
                singleEvents: true,
                orderBy: 'startTime'
            }, function(err, response) {
                if (err) {
                  reject(err);
                }
                resolve(response.items);
            });
        })
    }
    
    
    
}

export let googleRestService = new GoogleRestService();
