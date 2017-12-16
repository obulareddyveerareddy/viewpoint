import React from 'react';
import './HomePage.scss';

class HomePage extends React.Component{
  
  constructor(props){
    super(props);
  }
  
  componentWillMount(){
    this.props.getLoggedInUser();
    this.props.getTenGoogleCalendarEventsByUser();
  }

  render(){
    var {userProfile} = this.props;
    console.log('-------------------------- userProfile --------------------------');
    console.log(userProfile);
    return(
      <div className="row ml-2">
        <h1>Here comes workspace</h1>
      </div>
    );
  }

}

export default HomePage;
