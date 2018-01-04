import React from 'react';
import './cards.scss';
import { NavLink } from 'react-router-dom'

const LookAtNumbers = () => {
  return(
    <div className="row d-flex flex-column">
      <h3 className="lookAtTheNumbersHeader">Look At The Numbers</h3>
      <div className="row lookAtNumbers">
        <div className="col-md-4 d-flex flex-column flex-wrap p-3">
          <h5 className="d-flex justify-content-center">Labourcost</h5>
          <div className="d-flex">
            <span className="mr-2"><i className="fa fa-male fa-3x" aria-hidden="true"></i></span>
            <span>$ 38,000/yr</span>
          </div>
          <div>More effecient scheduling and reporting may reduce labor costs by more then $38,000 per year (based on 10 employees working at $20 per hour).</div>
        </div>
        <div className="col-md-4 d-flex flex-column flex-wrap p-3">
          <h5 className="d-flex justify-content-center">Equipment</h5>
          <div className="d-flex">
            <span className="mr-2"><i className="fa fa-bus fa-3x" aria-hidden="true"></i></span>
            <span> 25% less downtime</span>
          </div>
          <div>Predictive maintenance will typically result in at least a 25% reduction in vechicle downtime.</div>
        </div>
        <div className="col-md-4 d-flex flex-column flex-wrap p-3">
          <h5 className="d-flex justify-content-center">Maintenance</h5>
          <div className="d-flex">
            <span className="mr-2"><i className="fa fa-wrench fa-3x" aria-hidden="true"></i></span>
            <span>30% Reduction</span>
          </div>
          <div>Poor maintenance practices can reduce the life expectancy of equipment of parts by up to 30%.</div>
        </div>
      </div>
    </div>
  );
}

const FleetMetricCard = () => {
  return(
    <div className="card">
      <div className="card-header">
        <div className="d-flex justify-content-between flex-wrap">
          <h2>FleetMetric</h2>
          <div>
          <a href="#" target="_blank" className="btn btn-primary rounded-circle m-2"><i className="fa fa-github" /></a>
          <a href='/api/auth/google'  className="btn btn-primary rounded-circle m-2"><i className="fa fa-sign-in" /></a>
          </div>
        </div>
        <h5 className="d-flex justify-content-center">Save your Fleet, Time & Money.</h5>
        <h6 className="d-flex justify-content-center">Start using OpenSource, 100% free Fleet Management Software solution : FleetMetric</h6>
      </div>
      <div className="card-body" style={{backgroundColor:'rgba(0, 123, 255, 0.25)'}}>
        <div className="d-flex flex-column">
          <LookAtNumbers />
          <div className="row d-flex flex-column">
            <div className="d-flex justify-content-center intangibleBenfitsHeader"><h3 className="p-2">Intangible Benefits</h3></div>
            <div className="row">
              <div className="col-md-4 d-flex flex-column  flex-wrap">
                <div><button className="btn btn-primary m-2 rounded-circle"><i className="fa fa-cog" aria-hidden="true"></i></button>PARTS & INVENTORY TRACKING</div>
                <div><button className="btn btn-primary m-2 rounded-circle"><i className="fa fa-file-text" aria-hidden="true"></i></button>WORK ORDER MANAGEMENT</div>
              </div>
              <div className="col-md-4 d-flex flex-column  flex-wrap">
                <div><button className="btn btn-primary m-2 rounded-circle"><i className="fa fa-thermometer-full" aria-hidden="true"></i></button>FUEL & TIER MANAGEMENT</div>
                <div><button className="btn btn-primary m-2 rounded-circle"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></button>WARRANTY TRACKING</div>
              </div>
              <div className="col-md-4 d-flex flex-column  flex-wrap">
                <div><button className="btn btn-primary m-2 rounded-circle"><i className="fa fa-cart-arrow-down" aria-hidden="true"></i></button>PURCHASE ORDERS & BILLING</div>
                <div><button className="btn btn-primary m-2 rounded-circle"><i className="fa fa-car" aria-hidden="true"></i></button>MOTOR POOL RESERVATIONS</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card-footer">
        <div className="d-flex justify-content-center">
          <a href='/api/auth/google' className="btn btn-primary m-2 rounded-circle"><i className="fa fa-sign-in" aria-hidden="true"></i></a>
          <a href="#" className="mt-3">OpenSouce solution, Get Start now !!!</a>
        </div>
      </div>
    </div>
  );
}

export default FleetMetricCard;
