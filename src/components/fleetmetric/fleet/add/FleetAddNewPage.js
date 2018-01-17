import React            from 'react';
import {Link}           from 'react-router-dom';
import FleetAddNewForm  from './FleetAddNewForm';
import './../FleetRouter.scss';

class FleetAddNewPage extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            newFleet:{
                "ownerName": "veerareddy",
                "fleetManufacturer": "Maruthi",
                "fleetModal": "Vitara Breeza",
                "purchaseDate": "2017-09-12",
                "registeredDate": "2016-09-12",
                "regNumber": "KA 03 MZ 2691",
                "coatedMileage": "23",
                "fuelCapacity": "45",
                "odometerReading": "27600",
                "seatCapacity": "5",
                "lastServiceDate": "2017-12-25",
                "serviceIntervel": "10000",
                "serviceIntervelType": "KM",
                "fuelType":"Diesel"
            }
        }
        
        this.onChangeListener = this.onChangeListener.bind(this);
    }
    
    componentWillReceiveProps(nextProps){
        console.log('~~~~~~~~~~~~~~~~~~ >>> componentWillReceiveProps(.) <<< ~~~~~~~~~~~~~~~~~~');
        console.log(nextProps);
        if(!this.state.userProfile){
            this.setState({userProfile:nextProps.userProfile})
        }
    }
    
    onChangeListener(event, key){
        let newFleet = this.state.newFleet;
        newFleet[key]= event.target.value;
        this.setState({newFleet:newFleet});
        event.preventDefault();
    }
    
    saveNewFleet(event){
        console.log('~~~~~~~~~~~~~~~~~ >>> saveNewFleet(.) <<< ~~~~~~~~~~~~~~~~~');
        console.log(JSON.stringify(this.state.newFleet));
        event.preventDefault();
        console.log(this.state.userProfile);
        this.props.saveNewFleet(this.state.newFleet, this.state.userProfile);
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
                    <button className="btn btn-primary" onClick={this.saveNewFleet.bind(this)}>Save</button>
                    </div>
                </div>
                <div className="card card-body">
                    <FleetAddNewForm onChangeListener={this.onChangeListener} dataSource={this.state.newFleet} />
                </div>
            </section>    
        );
    }
}

export default FleetAddNewPage;