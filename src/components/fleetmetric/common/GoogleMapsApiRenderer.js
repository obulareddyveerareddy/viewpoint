import React from 'react';
import { compose, withProps, lifecycle } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer,
} from "react-google-maps";

const GoogleMapsApiRenderer = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBS9GwpkonjgNVvqz6CHE_quQw8KybMwvE&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap,
  lifecycle({
    componentWillReceiveProps() {
      console.log('~~~~~~~~~~~~~~~~~~~ >>> GoogleMapsApiRenderer#componentWillReceiveProps <<< ~~~~~~~~~~~~~~~~~~~');
      console.log(this.props.waypoints);
      const DirectionsService = new google.maps.DirectionsService();
      DirectionsService.route({
          origin: this.props.origin,
          waypoints:this.props.waypoints,
          destination: this.props.destination,
          travelMode: 'DRIVING',
        }, (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          this.setState({
            directions: result,
          });
        } else {
          console.error(`error fetching directions ${result}`);
        }
      });
    }
  })
)(props =>{
    return(
        <GoogleMap
            defaultZoom={7}
            defaultCenter={new google.maps.LatLng(41.8507300, -87.6512600)}>
            {props.directions && <DirectionsRenderer directions={props.directions} />}
        </GoogleMap>
        )
    }
);

export default GoogleMapsApiRenderer;