import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100vw',
  height: '400vh',
  margin: 'auto'
};
//paste location's lat and lng 
const center = {
  lat: 23.015859167527502, 
  lng: 91.39760990674641
};

function MyComponent() {
  return (
    //NEEDED API KEY GO TO GOOGLE Search: google map api key
    <LoadScript
      googleMapsApiKey="YOUR_API_KEY"
    >
        <h2>Our Location</h2>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={18}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <Marker position={center}/>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(MyComponent)