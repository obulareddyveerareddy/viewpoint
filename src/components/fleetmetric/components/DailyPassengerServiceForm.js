import React from 'react';
import TextboxPlaceAutoComplete from './TextboxPlaceAutoComplete';
import GoogleMapsApiRenderer    from './../common/GoogleMapsApiRenderer';

class DailyPassengerServiceForm extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
            startingPlace:'',
            destinationPlace:'',
            newwaypoint:'',
            newWaypointJPrice:'',
            waypoints:[],
            allPricepoints:[],
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
        let tempPricepoints = this.state.allPricepoints;
        tempPricepoints.push({waypoint:{location: this.state.newwaypoint, stopover: true}, price:this.state.newWaypointJPrice});
        
        let tempWaypoints = this.state.waypoints;
        tempWaypoints.push({location: this.state.newwaypoint, stopover: true});
        
        this.setState({ allPricepoints:tempPricepoints, waypoints:tempWaypoints, initEvent:!this.state.initEvent});
    }
    
    removeWaypoint(event, param){
        let tempPricepoints = this.state.allPricepoints;
        let tempIndex;
        let tempWaypoints = [];
        this.state.allPricepoints.map((item, index) => {
            if(item.waypoint.location === param.location){
                tempIndex = index;
            }else{
                tempWaypoints.push(item.waypoint);
            }
        })
        tempPricepoints.splice(tempIndex, 1);
        tempWaypoints.splice(tempIndex, 1);
        console.log('tempPricepoints '+tempPricepoints.length+' <---> No. Waypoints '+tempWaypoints.length);
        this.setState({allPricepoints:tempPricepoints, waypoints:tempWaypoints, initEvent:!this.state.initEvent});
        setTimeout(()=>{
           this.setState({initEvent:!this.state.initEvent}); 
        }, 1000)
    }
    
    render(){
        return(
            <div className="card">
                <div className="card-header">
                    <div>Form:Daily Passenger Service</div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <div className="form-group">
                                <label htmlFor="seatCapacity">Seating Capacity</label>
                                <input type="number" className="form-control" id="seatCapacity" aria-describedby="seatCapacityHelp" placeholder="Enter Seating Capacity" />
                                <small id="seatCapacityHelp" className="form-text text-muted">Please enter fleet seat capacity excluding driver & conductor seats.</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="expMillage">Expected Millage</label>
                                <input type="number" className="form-control" id="expMillage" aria-describedby="expMillageHelp" placeholder="Enter Expected Millage" />
                                <small id="expMillageHelp" className="form-text text-muted">Please enter expected millage.</small>
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
                                <div className="card-header">Add Waypoint & journey price</div>
                                <div className="card-body">
                                <TextboxPlaceAutoComplete labelText="Select Waypoint" selectedPlace={this.setNewWayPoint} />
                                <div className="form-group">
                                    <label htmlFor="journeyPriceId">Journey Price</label>
                                    <input type="number" className="form-control" value={this.state.newWaypointJPrice} onChange={(event) => this.setState({newWaypointJPrice:event.target.value})} id="journeyPriceId" aria-describedby="journeyPriceIdHelp" placeholder="Enter Journey Price" />
                                    <small id="journeyPriceIdHelp" className="form-text text-muted">Enter journey price from origin.</small>
                                </div>
                                <div className="d-flex justify-content-end">
                                    <div className="btn-group">
                                        <button className="btn btn-default btn-sm">Reset</button>
                                        <button className="btn btn-primary btn-sm" onClick={this.addWayPoint}><i className="fa fa-plus" /> Add Waypoint</button>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <table className="table table-sm table-bordered table-hover mt-2">
                                <thead className="thead-dark">
                                    <tr>
                                        <td></td>
                                        <td>Place</td>
                                        <td>Charge</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        (this.state.allPricepoints.length === 0) ?  
                                            (
                                                <tr>
                                                    <td colSpan="3">
                                                        <small className="form-text text-muted">Configure route points & journey price.</small>
                                                    </td>
                                                </tr>
                                            ) : (
                                                    this.state.allPricepoints.map((item, index) => {
                                                        return <tr key={index}>
                                                                <td><button className="btn btn-link" onClick={(event)=>this.removeWaypoint(event,item)}><i className="fa fa-times" /></button></td>
                                                                <td>{item.waypoint.location}</td>
                                                                <td>{item.price}</td>
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

export default DailyPassengerServiceForm;