import React    from 'react';
import {Link}   from 'react-router-dom';

const BoxWidget = ({h1Text, subLineText, faIconClass, colorClasses, linkUrl}) => {
    return(
        <div className={"card "+colorClasses}>
            <div className="card-body">
                <div className="row">
                    <div className="col-xs-6 pl-3">
                        <h1>{h1Text}</h1>
                        <p>{subLineText}</p>
                    </div>
                    <div className="col-xs-6 icon">
                        <i className={faIconClass} />
                    </div>
                </div>
            </div>
            <div className="card-footer">
                <div className="text-center">
                    <Link to={linkUrl} className="footer-link">More info <i className="fa fa-arrow-circle-right"></i></Link>
                </div>
            </div>
        </div>
    )
}

export default BoxWidget;