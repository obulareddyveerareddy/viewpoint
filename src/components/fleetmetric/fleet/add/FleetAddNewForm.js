import React from 'react';

const fleetAddNewForm = ({onChangeListener, dataSource}) => {
    
    return(
        <form>
            <div className="row">
                <div className="col-lg-6 col-xs-12">
                    <div className="form-group">
                        <label htmlFor="ownerName">Owner Name</label>
                        <input type="text" className="form-control" id="ownerName" aria-describedby="ownerNameHelp" placeholder="Enter Owner Name" 
                        onChange={(event) => onChangeListener(event, 'ownerName')} value={dataSource.ownerName} />
                        <small id="ownerNameHelp" className="form-text text-muted">Enter valied Reg. Owner Name.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="fleetManufacturer">Fleet Manufacturer</label>
                        <input type="text" className="form-control" id="fleetManufacturer" aria-describedby="fleetManufacturerHelp" 
                        placeholder="Enter Fleet Manufacturer" 
                        onChange={(event) => onChangeListener(event, 'fleetManufacturer')} value={dataSource.fleetManufacturer}  />
                        <small id="fleetManufacturerHelp" className="form-text text-muted">Enter Fleet Manufacturer.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="fleetModal">Fleet Modal</label>
                        <input type="text" className="form-control" id="fleetModal" aria-describedby="fleetModalHelp" placeholder="Enter Fleet modal"
                        onChange={(event) => onChangeListener(event, 'fleetModal')} value={dataSource.fleetModal}  />
                        <small id="fleetModalHelp" className="form-text text-muted">Enter fleet  modal.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="purchaseDate">Purchase Date</label>
                        <input type="Date" className="form-control" id="purchaseDate" aria-describedby="purchaseDateHelp" placeholder="Enter Purchase Date"
                        onChange={(event) => onChangeListener(event, 'purchaseDate')} value={dataSource.purchaseDate}   />
                        <small id="purchaseDateHelp" className="form-text text-muted">Enter purchase date.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="registeredDate">Registered Date</label>
                        <input type="Date" className="form-control" id="registeredDate" aria-describedby="registeredDateHelp" placeholder="Enter Registered Date"
                        onChange={(event) => onChangeListener(event, 'registeredDate')} value={dataSource.registeredDate}    />
                        <small id="registeredDateHelp" className="form-text text-muted">Enter Registered date.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="regNumber">Reg.Number</label>
                        <input type="text" className="form-control" id="regNumber" aria-describedby="regNumberHelp" placeholder="Enter Reg.Number"
                        onChange={(event) => onChangeListener(event, 'regNumber')} value={dataSource.regNumber}     />
                        <small id="regNumberHelp" className="form-text text-muted">Enter valied Govt. Reg.Number.</small>
                    </div>
                </div>
                <div className="col-lg-6 col-xs-12">
                    <div className="form-group">
                        <label htmlFor="coatedMileage">Company coated mileage</label>
                        <input type="number" className="form-control" id="coatedMileage" aria-describedby="coatedMileageHelp" placeholder="Enter mileage"
                        onChange={(event) => onChangeListener(event, 'coatedMileage')} value={dataSource.coatedMileage}     />
                        <small id="coatedMileageHelp" className="form-text text-muted">Company coated mileage.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="fuelCapacity">Fuel capacity</label>
                        <div className="input-group">
                            <select className="custom-select" onChange={(event) => onChangeListener(event, 'fuelType')} value={dataSource.fuelType}>
                                <option value="Diesel">Diesel</option>
                                <option value="Petrol">Petrol</option>
                            </select>
                            <input type="number" className="form-control" id="fuelCapacity" aria-describedby="fuelCapacityHelp" placeholder="Enter Fuel capacity"
                            onChange={(event) => onChangeListener(event, 'fuelCapacity')} value={dataSource.fuelCapacity} />
                        </div>
                        <small id="fuelCapacityHelp" className="form-text text-muted">Enter fuel capacity.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="odometerReading">Odometer Reading</label>
                        <input type="number" className="form-control" id="odometerReading" aria-describedby="odometerReadingHelp" placeholder="Enter odometer reading"
                        onChange={(event) => onChangeListener(event, 'odometerReading')} value={dataSource.odometerReading} />
                        <small id="odometerReadingHelp" className="form-text text-muted">Enter vechile odometer reading.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="seatCapacity">Seat Capacity</label>
                        <input type="number" className="form-control" id="seatCapacity" aria-describedby="seatCapacityHelp" placeholder="Enter Seat capacity" 
                        onChange={(event) => onChangeListener(event, 'seatCapacity')} value={dataSource.seatCapacity} />
                        <small id="seatCapacityHelp" className="form-text text-muted">Enter seating capacity.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastServiceDate">Last Service Date</label>
                        <input type="Date" className="form-control" id="lastServiceDate" aria-describedby="lastServiceDateHelp" placeholder="Enter Last Service Date" 
                        onChange={(event) => onChangeListener(event, 'lastServiceDate')} value={dataSource.lastServiceDate}  />
                        <small id="lastServiceDateHelp" className="form-text text-muted">Enter last service date.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="serviceIntervel">Service Intervel</label>
                        <div className="input-group">
                            <input type="number" className="form-control" id="serviceIntervel" aria-describedby="serviceIntervelHelp" placeholder="Enter Service Intervel" 
                            onChange={(event) => onChangeListener(event, 'serviceIntervel')} value={dataSource.serviceIntervel}   />
                            <select className="custom-select" onChange={(event) => onChangeListener(event, 'serviceIntervelType')} value={dataSource.serviceIntervelType}>
                                <option value="Days">Days</option>
                                <option value="KM">KM</option>
                            </select>
                        </div>
                        <small id="serviceIntervelHelp" className="form-text text-muted">Enter vechile suggested service intervel by KM in Days.</small>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default fleetAddNewForm;