import React from 'react';
import './HomePage.scss';

class HomePage extends React.Component{
  
  constructor(props){
    super(props);
  }
  
  componentWillMount(){
    this.props.getLoggedInUser();
    this.props.getAllFleetDetails();
  }

  render(){
    var {homeDataSource} = this.props;
    console.log('-------------------------- homeDataSource --------------------------');
    console.log(homeDataSource);
    return(
      <div className="row">
        <div className="col-sm-12">
          <div className="d-flex flex-row-reverse m-2">
            <button type="button" className="btn btn-primary">Add</button>
          </div>
          <div className="d-flex flex-row">
            <table className="table table-bordered">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Reg.No</th>
                  <th scope="col">Name</th>
                  <th scope="col">Type</th>
                  <th scope="col">Status</th>
                  <th scope="col">More Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="6" scope="row">
                    <div className="p-3 mb-2 bg-danger text-white">No Fleet Data Found !</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }

}

export default HomePage;
