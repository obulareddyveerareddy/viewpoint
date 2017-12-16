import React from 'react';

const Nav = ({toggleSideBar}) => {
    return (
        <nav className="navbar fixed-top navbar-dark bg-dark">
          <div className="navbar-header d-flex">
            <div className="top-left-part p-2">
              <a className="logo text-white" href="index.html"><i className="fa fa-bus fa-2x" aria-hidden="true"> FleetMetric</i></a>
            </div>
            <ul className="nav navbar-top-links navbar-left p-2">
                <li>
                    <div className="sidebar-toggle">
                        <a className="logo text-white c-pointer" onClick={toggleSideBar}><i className="fa fa-bars fa-2x" aria-hidden="true"></i></a>
                    </div>
                </li>
            </ul>
            <ul className="nav navbar-top-links navbar-right pull-right active ml-auto p-2">
                <li className="dropdown">
                    <a className="dropdown-toggle profile-pic" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Veera
                        <span className="caret"></span>
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                        <li><button className="dropdown-item" type="button">Action</button></li>
                        <li><button className="dropdown-item" type="button">Another action</button></li>
                        <li><button className="dropdown-item" type="button">Something else here</button></li>
                    </ul>
                </li>
            </ul>
          </div>
        </nav>
    );
}

export default Nav;