import React                        from 'react';
import BreadcrumbSection            from './../common/BreadcrumbSection';
import DropdownComponent            from './../components/DropdownComponent';
import {Link}                       from 'react-router-dom';
import DailyPassengerServiceForm    from './../components/DailyPassengerServiceForm';
import RentalAgrementServiceForm    from './../components/RentalAgrementServiceForm';
import './AddFleetPage.scss';

class AddFleetPage extends React.Component{
  
    constructor(props){
        super(props);
        
        this.state={
            fleetServiceType:undefined
        }
        
        this.fleetServiceTypes = [
            {value:1001, option:"Daily passenger service (point to point)"},
            {value:1002, option:"Rental agrement service"},
            {value:1003, option:"Tour traveller service"}
            ];
        this.breadcrums = [{name:'Dashboard', link:'/fleetmetric/'}, {name:'Add New Fleet'}];
        
        
        this.onDropdownValueChange      = this.onDropdownValueChange.bind(this);
        this.renderByFleetServiceType   = this.renderByFleetServiceType.bind(this);
    }
    
    onDropdownValueChange(dropdownValue){
        console.log('~~~~~~~~~~~~~~~ >> onDropdownValueChange(.) << ~~~~~~~~~~~~~~~');
        console.log(dropdownValue);
        this.setState({fleetServiceType:dropdownValue});
        console.log('------------ Error occured');
    }
    
    renderByFleetServiceType(param) {
        if(param){
            switch(param.value) {
                case 1001:
                return <DailyPassengerServiceForm />;
                case 1002:
                return <RentalAgrementServiceForm />;
            }
        }
        
        return <div></div>;
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
                            <div className="d-flex flex-column mb-3">
                                <label htmlFor="fleetCategory">Select Fleet Category</label>
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
                            <div>
                              <button className="btn btn-warning" type="button" data-toggle="collapse" data-target="#fuelDetails" aria-expanded="false" aria-controls="fuelDetails">
                                Add Fuel Details
                              </button>
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
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
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
                            <div>
                                <button className="btn btn-success" type="button" data-toggle="collapse" data-target="#fleetServiceDetails" aria-expanded="false" aria-controls="fleetServiceDetails">
                                    Add Service Details
                                </button>
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
                    </div>
                    <div className="row mt-2" id="addnewfleet">
                        <div className="col-md-12 col-sm-12">
                            <div className="card">
                                <div className="card-header bg-secondary">
                                    <label>Configure Fleet Service</label>
                                </div>
                                <div className="card-body">
                                    <DropdownComponent 
                                        dropdownLabel="Select fleet service type" 
                                        dropdownOptions={this.fleetServiceTypes} 
                                        defaultDisplay="Select fleet service" 
                                        dropdownLabelHelpText="Please select one of the suitable services for fleet"
                                        onDropdownValueChange={this.onDropdownValueChange} />
                                    
                                    {this.renderByFleetServiceType(this.state.fleetServiceType)}
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
