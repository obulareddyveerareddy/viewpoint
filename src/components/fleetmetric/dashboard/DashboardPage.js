import React from 'react';
import BoxWidget from './../ui-elements/BoxWidget'
import './DashboardStyles.scss';

class DashboardPage extends React.Component{
    
    constructor(props){
        super(props);    
    }
    
    render(){
        return(
            <section className="content">
                <div className="row">
                    <div className="col-lg-4 col-xs-6">
                       <BoxWidget h1Text="20" subLineText="Fleet Assets" faIconClass="fa fa-bus" colorClasses="bg-aqua text-white" linkUrl="/fleetmetric/fleet/dashboard" /> 
                    </div>
                    <div className="col-lg-4 col-xs-6">
                       <BoxWidget h1Text="40" subLineText="Employees" faIconClass="fa fa-users" colorClasses="bg-green text-white" linkUrl="/fleetmetric/fleet/dashboard" /> 
                    </div>
                    <div className="col-lg-4 col-xs-6">
                       <BoxWidget h1Text="3" subLineText="Provided Services" faIconClass="fa fa-snowflake-o" colorClasses="bg-yellow text-white" linkUrl="/fleetmetric/fleet/dashboard" /> 
                    </div>
                </div>
            </section>    
        );
    }
}

export default DashboardPage;