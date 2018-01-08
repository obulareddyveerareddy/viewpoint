import React    from 'react';
import {Link}   from 'react-router-dom';
import './../FleetRouter.scss';

class FleetDashboardPage extends React.Component{
    
    constructor(props){
        super(props);    
    }
    
    render(){
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
                            <th>Complaints</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan="12" className="text-center">
                                <small>No data found, Add new fleet</small>
                            </td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </section>    
        );
    }
}

export default FleetDashboardPage;