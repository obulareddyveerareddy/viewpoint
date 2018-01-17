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
                                <select className="custom-select col-md-6 col-sm-12" id="fleetCategory"  aria-describedby="fleetCategoryHelp"
                                onChange={(event) => this.setState({category:event.target.value})}>
                                  <option value="commertial">Commertial</option>
                                  <option value="personal">Personal</option>
                                </select>
                                <small id="fleetCategoryHelp" className="form-text text-muted">Please select appropriate category.</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="ownerName">Owner Name</label>
                                <input type="text" className="form-control" id="ownerName" aria-describedby="ownerNameHelp" placeholder="Enter Owner Name" 
                                onChange={(event) => this.setState({ownerName:event.target.value})} />
                                <small id="ownerNameHelp" className="form-text text-muted">Please enter fleet registered owner name</small>
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
                        </div>
                    </div>
                </div>
            </div>
          </div>
        );
    }

}

export default AddFleetPage;
