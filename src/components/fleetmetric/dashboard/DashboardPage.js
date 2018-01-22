import React        from 'react';
import _            from 'lodash';
import BoxWidget    from './../../common/BoxWidget'
import './DashboardStyles.scss';

class DashboardPage extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            userProfile: this.props.userProfile
        };
    }
    
    
    render(){
        let {userProfile, fleet} = this.props;
        console.log('---------------->> DashboardPage <==> render() <<----------------');
        console.log(userProfile);
        console.log(fleet);
        return(
            <section className="content">
                <div className="row">
                    <div className="col-lg-4 col-xs-6">
                       <BoxWidget h1Text={(fleet) ? _.keys(fleet).length:0} subLineText="Fleet Assets" faIconClass="fa fa-bus" colorClasses="bg-aqua text-white" linkUrl="/fleetmetric/fleet/dashboard" /> 
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