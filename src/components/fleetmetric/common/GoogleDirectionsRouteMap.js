import React from 'react';
import TextboxPlaceAutoComplete from './../components/TextboxPlaceAutoComplete';
import GoogleMapsApiRenderer    from './GoogleMapsApiRenderer';

class GoogleDirectionsRouteMap extends React.Component{
    
    constructor(props){
        super(props);
        
        this.state={
            startingPlace:'',
            destinationPlace:'',
            waypoints:[],
            newwaypoint:'',
            initEvent:false,
        }
        this.setFleetStartingPlace      = this.setFleetStartingPlace.bind(this);
        this.setFleetDestinationPlace   = this.setFleetDestinationPlace.bind(this);
        this.addNewWayPoint = this.addNewWayPoint.bind(this);
        this.removeWaypoint = this.removeWaypoint.bind(this);
    }
    
    setFleetStartingPlace(param){
        this.setState({startingPlace:param});
    }
    
    setFleetDestinationPlace(param){
        this.setState({destinationPlace:param});
        
    }
    
    addNewWayPoint(event){
        this.state.waypoints.push({location: this.state.newwaypoint, stopover: true});
        this.setState({newwaypoint:'', initEvent:!this.state.initEvent});
        event.preventDefault();
    }
    
    removeWaypoint(event, param){
        let allWaypoints = this.state.waypoints;
        let tempIndex;
        this.state.waypoints.map((item, index) => {
            if(item.location === param.location){
                tempIndex = index;
            }
        })
        allWaypoints.splice(tempIndex, 1);
        this.setState({waypoints:allWaypoints, initEvent:!this.state.initEvent});
        event.preventDefault();
    }
    
    render(){
        return(
            <div>
                <div className="dropdown-divider"></div>
                <TextboxPlaceAutoComplete labelText="Fleet Starting Point" labelHelpText="Select Fleet Starting Point." selectedPlace={this.setFleetStartingPlace} />
                <TextboxPlaceAutoComplete labelText="Fleet Destination Point" labelHelpText="Select Fleet Destination Point." selectedPlace={this.setFleetDestinationPlace} />
                <div className="d-flex flex-column">
                    <div className="btn-group btn-group-sm">
                        <input  type="text" 
                                className="form-control" id="waypoint" 
                                aria-describedby="waypointHelp"
                                value={this.state.newwaypoint}
                                onChange={(event)=>this.setState({newwaypoint:event.target.value})}
                                placeholder="Enter waypoint" />
                        <button className="btn btn-warning" type="button" onClick={(event)=>this.addNewWayPoint(event)}>
                        Add WayPoint
                        </button>
                    </div>
                    <div className="waypoints">
                        {(this.state.waypoints.length === 0) ? <small className="text-center p-2">Add middle waypoints between origin & destination.</small>:''}
                        {
                            this.state.waypoints.map((item,index) => {
                                return <span className="row p-1">
                                        <span className="col-sm-6"><span className="pl-2">{index+1}.</span> {item.location}</span>
                                        <span className="col-sm-6 pull-right"><a href="#" onClick={(event)=>this.removeWaypoint(event,item)}><i className="fa fa-times" /></a></span>
                                    </span>
                            })
                        }
                    </div>
                    <small id="waypointHelp" className="form-text text-muted">Add few waypoints for perfect route.</small>
                </div>
                <div>
                    {
                        (this.state.startingPlace.trim().length > 0 && this.state.destinationPlace.trim().length > 0)?
                            <GoogleMapsApiRenderer
                              origin = {this.state.startingPlace}
                              destination = {this.state.destinationPlace}
                              waypoints={this.state.waypoints}
                              initEvent={this.state.initEvent}
                            />
                        :<span></span>
                    }
                </div> 
            </div>               
        );
    }
}

export default GoogleDirectionsRouteMap;