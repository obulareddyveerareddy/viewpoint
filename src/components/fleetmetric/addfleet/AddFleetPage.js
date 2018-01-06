import React                    from 'react';
import BreadcrumbSection        from './../common/BreadcrumbSection';
import TextboxPlaceAutoComplete from './../common/TextboxPlaceAutoComplete';
import {Link}                   from 'react-router-dom';
import './AddFleetPage.scss';

class AddFleetPage extends React.Component{
  
    constructor(props){
        super(props);
        
        this.state={
            startingPlace:'',
            destinationPlace:''
        }
        
        this.breadcrums = [{name:'Dashboard', link:'/fleetmetric/'}, {name:'Add New Fleet'}];
        this.setFleetStartingPlace = this.setFleetStartingPlace.bind(this);
        this.setFleetDestinationPlace = this.setFleetDestinationPlace.bind(this);
    }
    
    setFleetStartingPlace(param){
        console.log('~~~~~~~~~~~~~~~ >>> setFleetStartingPlace <<< ~~~~~~~~~~~~~~~');
        console.log(param);
        this.setState({startingPlace:param});
    }
    
    setFleetDestinationPlace(param){
        console.log('~~~~~~~~~~~~~~~ >>> setFleetDestinationPlace <<< ~~~~~~~~~~~~~~~');
        console.log(param);
        this.setState({destinationPlace:param});
        
    }
  
    render(){
        return(
          <div className="d-flex flex-column">
            <BreadcrumbSection dataSource={this.breadcrums} />
            <div className="card">
                <div className="card-header">
                    <label>Add New Fleet</label>
                    <div className="btn-group pull-right">
                        <Link to="/fleetmetric/" className="btn btn-warning">Cancel</Link>
                        <button type="button" className="btn btn-primary">Save</button>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row" id="addnewfleet">
                        <div className="col-md-6 col-sm-12">
                            <div className="form-group">
                                <select className="custom-select col-md-6 col-sm-12" id="fleetCategory"  aria-describedby="fleetCategoryHelp">
                                  <option value="1">Commertial</option>
                                  <option value="2">Personal</option>
                                </select>
                                <small id="fleetCategoryHelp" className="form-text text-muted">Please select appropriate category.</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="ownerName">Owner Name</label>
                                <input type="text" className="form-control" id="ownerName" aria-describedby="ownerNameHelp" placeholder="Enter Owner Name" />
                                <small id="ownerNameHelp" className="form-text text-muted">Please enter fleet registered owner name</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="regNo">Register Number</label>
                                <input type="text" className="form-control" id="regNo" aria-describedby="regNoHelp" placeholder="Enter Register Number" />
                                <small id="regNoHelp" className="form-text text-muted">Please enter fleet unique register number</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="odometer">Odometer</label>
                                <input type="number" className="form-control" id="odometer" aria-describedby="odometerHelp" placeholder="Enter Odometer km" />
                                <small id="odometerHelp" className="form-text text-muted">Please enter fleet seat capacity excluding driver & conductor seats.</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="seatCapacity">Seating Capacity</label>
                                <input type="number" className="form-control" id="seatCapacity" aria-describedby="seatCapacityHelp" placeholder="Enter Seating Capacity" />
                                <small id="seatCapacityHelp" className="form-text text-muted">Please enter fleet seat capacity excluding driver & conductor seats.</small>
                            </div>
                            <div className="mb-2">
                                <div className="btn-group btn-group-sm">
                                  <button className="btn btn-warning" type="button" data-toggle="collapse" data-target="#fuelDetails" aria-expanded="false" aria-controls="fuelDetails">
                                    Add Fuel Details
                                  </button>
                                  <button className="btn btn-success" type="button" data-toggle="collapse" data-target="#fleetServiceDetails" aria-expanded="false" aria-controls="fleetServiceDetails">
                                    Add Service Details
                                  </button>
                                </div>
                                <div className="collapse" id="fuelDetails">
                                  <div className="card card-body">
                                    <h5 className="card-title">Fuel Details</h5>
                                    <div className="form-group">
                                        <select className="custom-select col-md-6 col-sm-12" id="fuelCategory"  aria-describedby="fuelCategoryHelp">
                                          <option value="1">Diesel</option>
                                          <option value="2">Petrol</option>
                                        </select>
                                        <small id="fuelCategoryHelp" className="form-text text-muted">Please select fuel type.</small>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="capacity">Capacity in liters</label>
                                        <input type="number" className="form-control" id="capacity" aria-describedby="capacityHelp" placeholder="Enter Capacity" />
                                        <small id="capacityHelp" className="form-text text-muted">Please enter fleet fuel capacity</small>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="expMillage">Clim / Expected millage in km per liter</label>
                                        <input type="number" className="form-control" id="expMillage" aria-describedby="expMillageHelp" placeholder="Enter Millage" />
                                        <small id="expMillageHelp" className="form-text text-muted">Add fleet manufacturer clim or your expected millage.</small>
                                    </div>
                                  </div>
                                </div>
                                <div className="collapse" id="fleetServiceDetails">
                                  <div className="card card-body">
                                    <h5 className="card-title">Service Details</h5>
                                    <div className="form-group">
                                      <label htmlFor="lastServiceDate">Last service date</label>
                                      <input type="date" className="form-control" id="lastServiceDate" value="2011-08-19" aria-describedby="lastServiceDateHelp" />
                                      <small id="lastServiceDateHelp" className="form-text text-muted">Add last service date.</small>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="serviceCycle">Service cycle in KM</label>
                                        <input type="number" className="form-control" id="serviceCycle" aria-describedby="serviceCycleHelp" placeholder="Enter Service cycle in KM" />
                                        <small id="serviceCycleHelp" className="form-text text-muted">Add service cycle in KM.</small>
                                    </div>
                                  </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className="card">
                                <div className="card-header bg-secondary">
                                    <label>Configure Fleet Service</label>
                                </div>
                                <div className="card-body">
                                    <div className="d-flex flex-column">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="1001" id="defaultCheck1" />
                                            <label className="form-check-label" htmlFor="defaultCheck1">Passenger service (point to point)</label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="1002" id="defaultCheck1" />
                                            <label className="form-check-label" htmlFor="defaultCheck1">Rental agrement service</label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="1003" id="defaultCheck1" />
                                            <label className="form-check-label" htmlFor="defaultCheck1">Reservation passenger service</label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="1004" id="defaultCheck1" />
                                            <label className="form-check-label" htmlFor="defaultCheck1">Tour traveller service</label>
                                        </div>
                                        <small id="serviceTypeHelp" className="form-text text-muted">Please select suitable services for fleet</small>
                                    </div>
                                    <div className="dropdown-divider"></div>
                                    <TextboxPlaceAutoComplete labelText="Fleet Starting Point" labelHelpText="Select Fleet Starting Point." selectedPlace={this.setFleetStartingPlace} />
                                    <TextboxPlaceAutoComplete labelText="Fleet Destination Point" labelHelpText="Select Fleet Destination Point." selectedPlace={this.setFleetDestinationPlace} />
                                    <div className="dropdown-divider"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        );
    }

}

export default AddFleetPage;
