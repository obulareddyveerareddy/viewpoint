import low          from 'lowdb';
import FileSync     from 'lowdb/adapters/FileSync';
import _            from 'lodash';

class PersonStore{
    
    constructor(storeName){
        console.log('~~~~~~~~~~~~~ >>> PersonStore <<< ~~~~~~~~~~~~~');
        const adapter = new FileSync('./server/filestore/person.json');
        this.personDb = low(adapter)
        this.personDb.defaults({ persons: []}).write()

    }
    
    getStoreValueByKey(key){
        console.log('~~~~~~~~~~~~~ >>> PersonStore > getStoreValueByKey(.)');
        console.log(key);
        console.log(this.personDb.getState());
    }
    
    setUser(user){
        console.log('~~~~~~~~~~~~~ >>> PersonStore > setUser(.)');
        let currentUser = this.getPersonById(user.id);
        if(!currentUser){
            console.log('currentUser does not exist create new entity');
            user.token = {};
            this.personDb.get('persons').push(user).write();
        }else{
            console.log('currentUser already exist');
        }
        
    }
    
    getPersonById(key){
        let currentUser;
        _.forEach(this.personDb.getState().persons, (item, index)=>{
            console.log(item.id+' === '+key);
            if(item.id === key){
                currentUser = _.cloneDeep(item);
            }
        });
        
        return currentUser;
    }
    
    setTokenById(key, value){
        console.log('~~~~~~~~~~~~~ >>> PersonStore > getStoreValueByKey(.)');
        console.log(key);
        console.log('~~~~~~~~~~~~~ >>> For Each section started');
        this.personDb.get('persons')
            .find({ id: key })
            .assign({ token: value})
            .write()
        console.log('~~~~~~~~~~~~~ >>> ---- End ---- <<< ~~~~~~~~~~~~~');
    }
    
    setKeyPairById(key, value){
        console.log('~~~~~~~~~~~~~ >>> PersonStore > getStoreValueByKey(.)');
        console.log(key);
        console.log('~~~~~~~~~~~~~ >>> For Each section started');
        this.personDb.get('persons')
            .find({ id: key })
            .assign({ fleetMetricId: value})
            .write()
        console.log('~~~~~~~~~~~~~ >>> ---- End ---- <<< ~~~~~~~~~~~~~');
    }
    
    getSpreadSheetIdByEmail(user){
        console.log('~~~~~~~~~~~~~ >>> PersonStore > getSpreadSheetIdByEmail(.)');
        console.log(user);
        let spreadSheetId;
        _.forEach(this.personDb.getState().persons, (item, index)=>{
            console.log(item.id+' <> '+item.email+' === '+user.email);
            if(item.email === user.email){
                spreadSheetId = item.fleetMetricId;
            }
        });
        console.log('-------- spreadSheetId '+spreadSheetId);
        return spreadSheetId;
    }
}

export let personStore = new PersonStore('person');;