import React from 'react';
import {Link} from 'react-router-dom';

const Sidebar = ({toggleSideBar, userProfile}) => {
    return (
        <div id="sidebar-wrapper">
            <ul className="sidebar-nav mt-5 pt-3">
                <li className="bg-light pt-4 mb-4 pb-2">
                    <div className="d-flex justify-content-center">
                        {userProfile.photos ? <img src={userProfile.photos[0].value} className="rounded-circle" /> : 'not'}
                    </div>
                    <h5 className="pt-2 sidebar-user-display-name">{userProfile.displayName ? userProfile.displayName : ''}</h5>
                </li>
                <li>
                    <Link to="/fleetmetric/">Dashboard</Link>
                </li>
                <li>
                    <Link to="/fleetmetric/fleet/dashboard">Fleet</Link>
                </li>
                <li>
                    <Link to="/fleetmetric/employees/dashboard">Employees</Link>
                </li>
                <li>
                    <Link to="/fleetmetric/services/dashboard">Services</Link>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
            </ul>
        </div>  
    );
}

export default Sidebar;