import React from 'react';
import PropTypes from 'prop-types';
import {
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';

const InnerMap = withGoogleMap(props =>
  <GoogleMap
    defaultZoom={12}
    defaultCenter={props.position}
    center={props.position}
  >
  <Marker
     {...props.marker}
   />
  </GoogleMap>
);

const Map = ({ lat, lng }) => (
  <InnerMap
  containerElement={<div style={{ height: `400px` }} />}
  mapElement={<div style={{ height: `100%` }} />}
  position={{ lat, lng }}
  marker={{position:{ lat, lng }}}
  />
);
Map.propTypes = {
  lat:PropTypes.number,
  lng:PropTypes.number,
};
Map.defaultProps = {
  lat: 35.6811673,
  lng: 139.7670516,
}
export default Map;
