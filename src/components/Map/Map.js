import React, { useState } from 'react';
import { GoogleMap, InfoWindow, LoadScript, Marker } from '@react-google-maps/api';
import fakedata from "../../fakedata/Places/Places"

const MapContainer = (props) => {
    const [ selected, setSelected ] = useState({});

    const places = fakedata;
    console.log(places)
  
    const onSelect = item => {
      setSelected(item);
    }
    const mapStyles = {        
        height: "100vh",
        width: "100%"};
      
      const defaultCenter = {
        lat: 21.430112, lng: 92.008736
      };
    //   const locations = [
    //     {
    //       name: "Location 1",
    //       location: { 
    //         lat: 41.3954,
    //         lng: 2.162 
    //       },
    //     },
    //     {
    //       name: "Location 2",
    //       location: { 
    //         lat: 41.3917,
    //         lng: 2.1649
    //       },
    //     },
    //     {
    //       name: "Location 3",
    //       location: { 
    //         lat: 41.3773,
    //         lng: 2.1585
    //       },
    //     },
    //     {
    //       name: "Location 4",
    //       location: { 
    //         lat: 41.3797,
    //         lng: 2.1682
    //       },
    //     },
    //     {
    //       name: "Location 5",
    //       location: { 
    //         lat: 41.4055,
    //         lng: 2.1915
    //       },
    //     }
    //   ];

      
  return (
    <div>
        <LoadScript
            googleMapsApiKey='AIzaSyAUzLhmfBJ1L-DmUq05gC7u2npGrvDQ6Rs'>
            <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}>
              
         {
            places.map(item => {
              return (
                <Marker key={item.name} 
                position={item.location}
                onClick={() => onSelect(item)}
              />
              )
            })
         }
         {
            selected.location && 
            (
              <InfoWindow
              position={selected.location}
              clickable={true}
              onCloseClick={() => setSelected({})}
            >
              <p>{selected.name}</p>
            </InfoWindow>
            )
         }
     </GoogleMap>
        </LoadScript>
    </div>
  );
};

export default MapContainer;

// export default GoogleApiWrapper({
//     apiKey: (`AIzaSyAUzLhmfBJ1L-DmUq05gC7u2npGrvDQ6Rs`)
//   })(MapContainer)
