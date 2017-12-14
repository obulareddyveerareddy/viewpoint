import React from 'react';
import './HomePage.scss';

class HomePage extends React.Component{
  
  constructor(props){
    super(props);
  }

  render(){
    var {googleOAuth} = this.props;
    console.log('-------------------------- GoogleOAuth --------------------------');
    console.log(googleOAuth);
    return(
      <div>
        <h1>Here comes workspace</h1>
      </div>
    );
  }

}

export default HomePage;
