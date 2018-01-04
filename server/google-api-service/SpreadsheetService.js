
import google                   from 'googleapis';
import {googleOAuth2Instance}   from './GoogleOAuth2Instance'
import {personStore}            from './../store/PersonStore';

class SpreadsheetService{
    
    constructor(){
        console.log('$$ ~~~~~~~~~~~~~~~~~ >>> SpreadsheetService <<< ~~~~~~~~~~~~~~~~~ $$');
    }
    
    createSpeadSheet(){
        return new Promise(function (resolve, reject) {
            var sheets = google.sheets('v4');
            sheets.spreadsheets.create({
                auth: googleOAuth2Instance.getOAuth2Client(),
                resource: {
                    properties:{
                        title: "FleetMetric"
                    }
                }
            }, (err, response) => {
                if (err) {
                  reject(err);
                } else {
                    resolve(response);
                }
            });
        })
    }
    
    getData(spreadsheetId, rangeQuery) {
      return new Promise(function (resolve, reject) {
        var sheets = google.sheets('v4');
        sheets.spreadsheets.values.get({
          auth: googleOAuth2Instance.getOAuth2Client(),
          spreadsheetId: spreadsheetId,
          range: rangeQuery,
        }, (err, response) => {
          if (err) {
            console.log('The API returned an error: ' + err);
            reject(err);
          } 
          var rows = response.values;
          resolve(rows);
        });
      })
    }
    
}

export let spreadsheetService = new SpreadsheetService();