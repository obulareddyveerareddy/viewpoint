import React from 'react';

class HomePage extends React.Component{
  constructor(props){
    super(props);
  }


  render(){
    var {googleOAuth} = this.props;
    console.log('-------------------------- GoogleOAuth --------------------------');
    console.log(googleOAuth);
    return(
      <div className="container-fluid">
        <div className="row">
          <div className="col-offset-3">
            <h1>Welcome to FleetMetric Homepage</h1>
          </div>
        </div>
      </div>
    );
  }

}

export default HomePage;
