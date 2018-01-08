import React    from 'react';
import {Link}   from 'react-router-dom';
import './../FleetRouter.scss';

class FleetAddNewPage extends React.Component{
    
    constructor(props){
        super(props);    
    }
    
    render(){
        return(
            <section className="content-header d-flex flex-column">
                <div className="d-flex justify-content-between">
                    <div><h1>Fleet <small>Add new Fleet Asset</small></h1></div>
                    <ol className="breadcrumb">
                        <li><Link to="/fleetmetric/"><i className="fa fa-dashboard" /> Dashboard</Link></li>
                        <li><Link to="/fleetmetric/fleet/dashboard"><i className="fa fa-bus" /> Fleet</Link></li>
                        <li>Add</li>
                    </ol>
                </div>
                <div className="d-flex justify-content-end">
                    <div className="btn-group">
                    <button className="btn btn-default">Cancel</button>
                    <button className="btn btn-primary">Save</button>
                    </div>
                </div>
                <div className="card card-body">
                    <form>
                        <div className="row">
                            <div className="col-lg-6 col-xs-12">
                                <div class="form-group">
                                    <label for="ownerName">Owner Name</label>
                                    <input type="text" class="form-control" id="ownerName" aria-describedby="ownerNameHelp" placeholder="Enter Owner Name" />
                                    <small id="ownerNameHelp" class="form-text text-muted">Enter valied Reg. Owner Name.</small>
                                </div>
                                <div class="form-group">
                                    <label for="fleetManufacturer">Fleet Manufacturer</label>
                                    <input type="text" class="form-control" id="fleetManufacturer" aria-describedby="fleetManufacturerHelp" placeholder="Enter Fleet Manufacturer" />
                                    <small id="fleetManufacturerHelp" class="form-text text-muted">Enter Fleet Manufacturer.</small>
                                </div>
                                <div class="form-group">
                                    <label for="fleetModal">Fleet Modal</label>
                                    <input type="text" class="form-control" id="fleetModal" aria-describedby="fleetModalHelp" placeholder="Enter Fleet modal" />
                                    <small id="fleetModalHelp" class="form-text text-muted">Enter fleet  modal.</small>
                                </div>
                                <div class="form-group">
                                    <label for="purchaseDate">Purchase Date</label>
                                    <input type="Date" class="form-control" id="purchaseDate" aria-describedby="purchaseDateHelp" placeholder="Enter Purchase Date" />
                                    <small id="purchaseDateHelp" class="form-text text-muted">Enter purchase date.</small>
                                </div>
                                <div class="form-group">
                                    <label for="registeredDate">Registered Date</label>
                                    <input type="Date" class="form-control" id="registeredDate" aria-describedby="registeredDateHelp" placeholder="Enter Registered Date" />
                                    <small id="registeredDateHelp" class="form-text text-muted">Enter Registered date.</small>
                                </div>
                                <div class="form-group">
                                    <label for="regNumber">Reg.Number</label>
                                    <input type="text" class="form-control" id="regNumber" aria-describedby="regNumberHelp" placeholder="Enter Reg.Number" />
                                    <small id="regNumberHelp" class="form-text text-muted">Enter valied Govt. Reg.Number.</small>
                                </div>
                            </div>
                            <div className="col-lg-6 col-xs-12">
                                <div class="form-group">
                                    <label for="coatedMileage">Company coated mileage</label>
                                    <input type="number" class="form-control" id="coatedMileage" aria-describedby="coatedMileageHelp" placeholder="Enter capacity" />
                                    <small id="coatedMileageHelp" class="form-text text-muted">Company coated mileage.</small>
                                </div>
                                <div class="form-group">
                                    <label for="fuel">Fuel capacity</label>
                                    <div className="input-group">
                                        <select class="custom-select">
                                            <option value="1">Diesel</option>
                                            <option value="2">Petrol</option>
                                        </select>
                                        <input type="number" class="form-control" id="fuel" aria-describedby="fuelHelp" placeholder="Enter Owner Name" />
                                    </div>
                                    <small id="fuelHelp" class="form-text text-muted">Enter fuel capacity.</small>
                                </div>
                                <div class="form-group">
                                    <label for="odometerReading">Odometer Reading</label>
                                    <input type="number" class="form-control" id="odometerReading" aria-describedby="odometerReadingHelp" placeholder="Enter odometer reading" />
                                    <small id="odometerReadingHelp" class="form-text text-muted">Enter vechile odometer reading.</small>
                                </div>
                                <div class="form-group">
                                    <label for="capacity">Seat Capacity</label>
                                    <input type="number" class="form-control" id="capacity" aria-describedby="capacityHelp" placeholder="Enter Seat capacity" />
                                    <small id="capacityHelp" class="form-text text-muted">Enter seating capacity.</small>
                                </div>
                                <div class="form-group">
                                    <label for="lastServiceDate">Last Service Date</label>
                                    <input type="Date" class="form-control" id="lastServiceDate" aria-describedby="lastServiceDateHelp" placeholder="Enter Last Service Date" />
                                    <small id="lastServiceDateHelp" class="form-text text-muted">Enter last service date.</small>
                                </div>
                                <div class="form-group">
                                    <label for="serviceIntervel">Service Intervel</label>
                                    <input type="number" class="form-control" id="serviceIntervel" aria-describedby="serviceIntervelHelp" placeholder="Enter Service Intervel" />
                                    <small id="serviceIntervelHelp" class="form-text text-muted">Enter vechile suggested service intervel by KM in Days.</small>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>    
        );
    }
}

export default FleetAddNewPage;