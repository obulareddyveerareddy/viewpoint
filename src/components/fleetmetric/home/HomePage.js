import React from 'react';

class HomePage extends React.Component{
  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.getFleetMetricActiveUser();
  }

  render(){
    return(
      <div>This is FleetMetric Home Page</div>
    );
  }

}

export default HomePage;
