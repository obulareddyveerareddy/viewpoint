import React from 'react';

const Nav = ({toggleSideBar}) => {
    return (
        <nav className="navbar fixed-top navbar-dark bg-dark">
          <div className="navbar-header d-flex justify-content-between">
            <div className="top-left-part">
              <a className="logo text-white" href="index.html"><i className="fa fa-bus fa-2x" aria-hidden="true"> FleetMetric</i></a>
              <a className="logo text-white c-pointer ml-3" onClick={toggleSideBar}><i className="fa fa-bars fa-2x" aria-hidden="true"></i></a>
            </div>
            <div className="d-flex justify-content-end">
                <button type="button" className="btn btn-default btn-circle btn-lg"><i className="fa fa-sign-out" aria-hidden="true"></i></button>
            </div>
          </div>
        </nav>
    );
}

export default Nav;