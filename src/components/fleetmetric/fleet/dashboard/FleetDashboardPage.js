import React    from 'react';
import {Link}   from 'react-router-dom';
import _        from 'lodash';
import './FleetDashboardPage.scss';

class FleetDashboardPage extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
            userProfile: this.props.userProfile,
            fleet:this.props.fleet
        }
    }
    
    render(){
        let {userProfile, fleet} = this.props;
        console.log('~~~~~~~~~~~~~~~~~~~~ FleetDashboardPage <===> render() ~~~~~~~~~~~~~~~~~~~~');
        console.log(userProfile);
        console.log(fleet);
        
        let fleetData = [];
        _.mapKeys(fleet, (value, key) =>{
            console.log(value);
            fleetData.push(value);
        });
        console.log(fleetData);
        return(
            <section className="content-header d-flex flex-column">
                <div className="d-flex justify-content-between">
                    <div><h1>Fleet <small>Manage Fleet assets</small></h1></div>
                    <ol className="breadcrumb">
                        <li><Link to="/fleetmetric/"><i className="fa fa-dashboard" /> Dashboard</Link></li>
                        <li>Fleet</li>
                    </ol>
                </div>
                <div className="d-flex justify-content-end">
                    <Link to="/fleetmetric/fleet/add" className="btn btn-primary">Add Fleet</Link>
                </div>
                <div className="card card-body">
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Owner Name</th>
                            <th>Manufacturer</th>
                            <th>Modal</th>
                            <th>Reg.Number</th>
                            <th>Reg.Date</th>
                            <th>Fuel Capacity</th>
                            <th>Odometer</th>
                            <th>Seat Capacity</th>
                            <th>Service.Date</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            (fleetData.length === 0)?
                            <tr>
                                <td colSpan="12" className="text-center">
                                    <small>No data found, Add new fleet</small>
                                </td>
                            </tr>
                            :
                            fleetData.map(function (item, index) {
                            return <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{item.ownerName}</td>
                                    <td>{item.fleetManufacturer}</td>
                                    <td>{item.fleetModal}</td>
                                    <td>{item.regNumber}</td>
                                    <td>{item.registeredDate}</td>
                                    <td>{item.fuelType}</td>
                                    <td>{item.odometerReading}</td>
                                    <td>{item.seatCapacity}</td>
                                    <td>{item.lastServiceDate}</td>
                                    <td></td>
                                </tr>;
                            })
                        }
                    </tbody>
                </table>
                </div>
            </section>    
        );
    }
}

export default FleetDashboardPage;