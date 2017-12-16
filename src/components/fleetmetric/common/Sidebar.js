import React from 'react';

const Sidebar = ({toggleSideBar}) => {
    return (
        <div className="navbar-default sidebar" id="sidemenubar">
          <div className="sidebar-head mt-2">
            <span className="hidden-xs">
                <i className="fa fa-bus fa-2x" aria-hidden="true"> FleetMetric</i>
            </span>
          </div>
        </div>  
    );
}

export default Sidebar;