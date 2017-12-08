import React  from 'react';
import './SideNav.scss';

const SideNav = () =>{
  return(
    <div className="sidenav">
    <div className="d-flex flex-column full-height flex-wrap" style={{height:'100%'}}>
      <div className="d-flex justify-content-center mt-4">
        <img src="https://i.pinimg.com/originals/d6/fc/95/d6fc95e83d7a21bfbadb9a960a9c285a.jpg" className="img-thumbnail" height="181px" width="150px" />
      </div>
      <div>
        <div className="ml-2 mt-2 d-block">Veera Bhargava Reddy.</div>
      </div>
      <div className="mt-2 d-flex flex-column menu">
        <div className="active">Home</div>
        <div>My Github</div>
        <div>Resume</div>
        <div>Contact</div>
      </div>
      <div className="mt-auto p-2 card-footer text-muted">
        <div className="d-flex flex-row justify-content-around flex-wrap">
          <a href="#" target="_blank" className="btn btn-default rounded-circle"><i className="fa fa-facebook" /></a>
          <a href="#" target="_blank" className="btn btn-default rounded-circle"><i className="fa fa-github" /></a>
          <a href="#" target="_blank" className="btn btn-default rounded-circle"><i className="fa fa-linkedin" /></a>
          <a href="#" target="_blank" className="btn btn-default rounded-circle"><i className="fa fa-twitter" /></a>
        </div>
      </div>
    </div>
    </div>
  );
}

export default SideNav;
