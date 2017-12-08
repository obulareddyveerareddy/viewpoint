import React from 'react';
import { NavLink } from 'react-router-dom'

const LoginForm = () => {
  return(
    <div className="card bg-dark text-white">
      <div className="card-body">
        <div className="d-flex flex-column">
          <div className="m-2">
            <label>Email</label>
            <input type="email" id="email" className="form-control" />
          </div>
          <div className="m-2">
            <label>Password</label>
            <input type="password" id="password" className="form-control" />
          </div>
          <div className="m-2">
            <div className="d-flex justify-content-between flex-wrap">
              <div className="btn-group mt-2">
                <span className="input-group-addon" id="basic-addon1"><i className="fa fa-google text-danger"  /></span>
                <a href='/api/auth/google' className="btn btn-primary">Google Sign-In</a>
              </div>
              <div className="btn-group mt-2">
                <button className="btn btn-default">Cancel</button>
                <button className="btn btn-primary">Sign-In</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
class LoginPage extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    let {auth} = this.props;
    return(
      <div className="full-height">
          <div className="d-flex align-items-center" style={{height:'100%'}}>
            <div className="col-offset-2 col-8" style={{marginLeft: 'auto', marginRight: 'auto'}}>
              <LoginForm />
            </div>
          </div>
      </div>
    );
  }
}

export default LoginPage;
