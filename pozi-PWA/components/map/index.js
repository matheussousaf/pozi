import React, { useEffect, useState } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

// import { LeafletMouseEvent } from 'leaflet';
import axios from 'axios';

import { Container } from './styles';

const pin1 = L.icon({
  iconUrl: '/static/images/pin1.png',
  iconSize: [35,35],
  iconAnchor: [32, 64],
  popupAnchor: [-14, -70],
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null
});

const pin2 = L.icon({
  iconUrl: '/static/images/pin2.png',
  iconSize: [35,35],
  iconAnchor: [32, 64],
  popupAnchor: [-14, -70],
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null
});

const MyPopupMarker = ({ content, position, icon }) => (
  <Marker position={position} icon={icon}>
    <Popup>{content}</Popup>
  </Marker>
)

const MyMarkersList = ({ markers, currentPosition }) => {
  const [ latitude, longitude ] = currentPosition;

  const items = markers.map(({ key, ...props }) => (
    <MyPopupMarker key={key} icon={pin2} {...props} />
  ))

  const finalMarkers = [
    <MyPopupMarker key={1} icon={pin1} position={[latitude, longitude]} content="Eu" />,
    ...items
  ]

  return <>{finalMarkers}</>
}

const MapComponent = ({ category }) => {
  const [initialPosition, setInicialPosition] = useState([-23.2385055, -45.8844243]);
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;
      setInicialPosition([latitude, longitude]);
    });
  }, []);

  useEffect(() => {
    const [ latitude, longitude ] = initialPosition;
    if (latitude && longitude) {
      axios.get(`http://mobile-aceite.tcu.gov.br/mapa-da-saude//rest/estabelecimentos/latitude/${latitude}/longitude/${longitude}/raio/30?categoria=${category || 'HOSPITAL'}`).then(response => {
        const markersInitials = response.data.map(item => ({
          key: item.codCnes, position: [item.lat, item.long], content: item.descricaoCompleta
        }));

        setMarkers(markersInitials);
        console.log(markersInitials)  
      });
    }
}, [initialPosition, category]);

  const handleMapClick = () => {

  }

  return (
    <Container>
      <Map center={initialPosition} zoom={15} onclick={handleMapClick}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {
          !!markers.length &&
          <MyMarkersList currentPosition={initialPosition} markers={markers} />
        }
      </Map>
    </Container>
  );
}

export default MapComponent;