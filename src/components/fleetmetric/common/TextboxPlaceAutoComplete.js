import React from 'react';
import fetch from 'cross-fetch';
import './textboxPlaceAutoComplete.scss';

class TextboxPlaceAutoComplete extends React.Component{
    
    constructor(props){
        super(props);
        
        this.state = {
            place:'',
            predictions:[],
            showPredictions:true
        }
        
        this.onPlaceSelect      = this.onPlaceSelect.bind(this);
        this.selectSuggestion   = this.selectSuggestion.bind(this);
        this.hidePredictions    = this.hidePredictions.bind(this);
        this.setPlacePredictions= this.setPlacePredictions.bind(this);
        this.isMapsApiReqInProgress = false;
    }
    
    setPlacePredictions(queryString){
        let self = this;
        this.isMapsApiReqInProgress = true;
        
        fetch('/maps/api/place/autocomplete/json?input='+queryString).then(function(response) {
            console.log('---------------- Place Autocomplete :) ----------------');
            return response.json();
        })
        .then(function(responseAsJson) {
            console.log(JSON.stringify(responseAsJson));
            self.isMapsApiReqInProgress = false;
            self.setState({predictions:responseAsJson.predictions, showPredictions:true});
            self.props.selectedPlace(self.state.place);
        })
        .catch(function(err) {
            if(err){
              console.log('---------------- Place Autocomplete Error :( ----------------');  
            }
        });
    }
    
    onPlaceSelect(event){
        console.log('~~~~~~~~~~~~~~ >>> onPlaceSelect ');
        this.setState({place:event.target.value});
        if(event.target.value.length > 3){
            if(!this.isMapsApiReqInProgress){
                let queryString = event.target.value;
                this.setPlacePredictions(queryString);
            }
        }
    }
    
    selectSuggestion(event, item){
        console.log('~~~~~~~~~~~~~~~~~ selectSuggestion ~~~~~~~~~~~~~~~~~');
        this.setState({place:item, showPredictions:false});
        this.props.selectedPlace(item);
        event.preventDefault();
    }
    
    hidePredictions(event){
        console.log('~~~~~~~~~~~~~~~~~ FocusOut Event ~~~~~~~~~~~~~~~~~');
        console.log(event);
        if(!this.state.showPredictions){
            this.setPlacePredictions(this.state.place);
        }
        this.setState({showPredictions:!this.state.showPredictions});
        //event.preventDefault();
    }
    
    render(){
        
        return(
            <div className="form-group">
                <label htmlFor="fleetStartingPoint">{this.props.labelText}</label>
                <div className="dropdown">
                  <input className="form-control dropdown-toggle" 
                         type="text" 
                         id="dropdownMenu2" 
                         data-toggle="dropdown" 
                         aria-haspopup="true" 
                         aria-expanded="false" 
                         placeholder="Enter Fleet Starting Point"
                         value={this.state.place}
                         onChange={(event)=>this.onPlaceSelect(event)}
                         //onBlur={(event)=>this.hidePredictions(event)}
                         />
                  { 
                    (this.state.showPredictions) ?
                      <ul className="autocomplete">
                      {
                        this.state.predictions.map((item, index) => {
                            return <li key={index}  onClick={(event) => this.selectSuggestion(event, item.description)}>{item.description}</li>;
                        })
                          
                      }
                      </ul>: <span></span>
                  }
                </div>
                <small id="fleetStartingPointHelp" className="form-text text-muted">{this.props.labelHelpText}</small>
            </div>
        );
    }
    
}

export default TextboxPlaceAutoComplete;