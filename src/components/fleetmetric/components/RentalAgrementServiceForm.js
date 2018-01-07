import React from 'react';
import TextboxPlaceAutoComplete from './TextboxPlaceAutoComplete';
import GoogleMapsApiRenderer    from './../common/GoogleMapsApiRenderer';

class RentalAgrementServiceForm extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
            startingPlace:'',
            destinationPlace:'',
            newwaypoint:'',
            newWaypointJPrice:'',
            waypoints:[],
            initEvent:false
        }
        this.setFleetStartingPlace      = this.setFleetStartingPlace.bind(this);
        this.setFleetDestinationPlace   = this.setFleetDestinationPlace.bind(this);
        this.setNewWayPoint             = this.setNewWayPoint.bind(this);
        
        this.addWayPoint                = this.addWayPoint.bind(this);
        this.removeWaypoint             = this.removeWaypoint.bind(this);
    }
    
    setFleetStartingPlace(param){
        this.setState({startingPlace:param});
    }
    
    setFleetDestinationPlace(param){
        this.setState({destinationPlace:param});
    }
    
    setNewWayPoint(param){
        this.setState({newwaypoint:param});
    }
    
    addWayPoint(){
        let tempWaypoints = this.state.waypoints;
        tempWaypoints.push({location: this.state.newwaypoint, stopover: true});
        
        this.setState({waypoints:tempWaypoints, initEvent:!this.state.initEvent});
    }
    
    removeWaypoint(event, param){
        let tempWaypoints = this.state.waypoints;
        let tempIndex;
        this.state.waypoints.map((item, index) => {
            if(item.location === param.location){
                tempIndex = index;
            }
        })
        tempWaypoints.splice(tempIndex, 1);
        this.setState({waypoints:tempWaypoints, initEvent:!this.state.initEvent});
        setTimeout(()=>{
           this.setState({initEvent:!this.state.initEvent}); 
        }, 1000)
    }
    
    render(){
        return(
            <div className="card">
                <div className="card-header">
                    <div>Form:Rental Agrement Service</div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <div className="form-group">
                                <label htmlFor="totalKmPerDay">Total Number of KM/Day</label>
                                <input type="number" className="form-control" id="totalKmPerDay" aria-describedby="totalKmPerDayHelp" placeholder="Enter Total KM Per Day" />
                                <small id="totalKmPerDayHelp" className="form-text text-muted">Please enter total number of KM per day as per agrement.</small>
                            </div>
                            <div class="input-group">
                              <select class="custom-select" id="inputGroupSelect04">
                                <option value="1">Fixed montly rent</option>
                                <option value="2">Rate per KM</option>
                              </select>
                              <input type="number" className="form-control" id="ratePerKM" aria-describedby="ratePerKMHelp" placeholder="Enter Expected Millage" />
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <TextboxPlaceAutoComplete labelText="Fleet Starting Point"  selectedPlace={this.setFleetStartingPlace} />
                            <TextboxPlaceAutoComplete labelText="Fleet Destination Point"  selectedPlace={this.setFleetDestinationPlace} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <div className="card">
                                <div className="card-header">Add Waypoint</div>
                                <div className="card-body">
                                    <TextboxPlaceAutoComplete labelText="Select Waypoint" selectedPlace={this.setNewWayPoint} />
                                    <div className="d-flex justify-content-end">
                                        <button className="btn btn-primary btn-sm" onClick={this.addWayPoint}><i className="fa fa-plus" /> Add Waypoint</button>
                                    </div>
                                </div>
                            </div>
                            <table className="table table-sm table-bordered table-hover mt-2">
                                <thead className="thead-dark">
                                    <tr>
                                        <td></td>
                                        <td>Place</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        (this.state.waypoints.length === 0) ?  
                                            (
                                                <tr>
                                                    <td colSpan="3">
                                                        <small className="form-text text-muted">Configure route points & journey price.</small>
                                                    </td>
                                                </tr>
                                            ) : (
                                                    this.state.waypoints.map((item, index) => {
                                                        return <tr key={index}>
                                                                <td><button className="btn btn-link" onClick={(event)=>this.removeWaypoint(event,item)}><i className="fa fa-times" /></button></td>
                                                                <td>{item.location}</td>
                                                            </tr>
                                                    })
                                                )
                                    }
                                </tbody>
                            </table>
                        </div>
                        <div className="col-md-6 col-sm-12">
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
                    </div>
                </div>
            </div>
        );
    }
}

export default RentalAgrementServiceForm;