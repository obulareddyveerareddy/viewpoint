import React from 'react';

const Sidebar = ({toggleSideBar, userProfile}) => {
    console.log('~~~~~~~~~~~~~~~~~~~~~~>>> Sidebar <<<~~~~~~~~~~~~~~~~~~~~~~');
    console.log(userProfile);
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
                    <a href="#">Dashboard</a>
                </li>
                <li>
                    <a href="#">Shortcuts</a>
                </li>
                <li>
                    <a href="#">Overview</a>
                </li>
                <li>
                    <a href="#">Events</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Services</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>
        </div>  
    );
}

export default Sidebar;