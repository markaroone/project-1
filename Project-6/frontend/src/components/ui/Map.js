import React from 'react';
import styles from './Map.module.css';

import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';

const MyPolyline = ({ coordinates }) => {
  const map = useMap();

  const polyline = L.polyline(coordinates, {
    // color: '#3bc9db',
    color: '#5C7CFA',
    stroke: true,
    weight: 5,
  }).addTo(map);

  map.fitBounds(polyline.getBounds(), { maxZoom: 18 });
};

const Map = ({ coords }) => {
  const coordsLocal = {
    polyline: coords,
    start: coords[0],
    end: coords[coords.length - 1],
  };

  const altTile = L.tileLayer(
    'https://{s}.tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey={apikey}',
    {
      attribution:
        '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      apikey: '<your apikey>',
      maxZoom: 22,
    }
  );

  const Stadia_AlidadeSmoothDark = L.tileLayer(
    'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png',
    {
      maxZoom: 20,
      attribution:
        '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
    }
  );

  const Stadia_AlidadeSmooth = L.tileLayer(
    'https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png',
    {
      maxZoom: 20,
      attribution:
        '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
    }
  );

  return (
    <div className={styles.container}>
      <MapContainer center={coordsLocal.start} zoom={14} scrollWheelZoom={true}>
        {/* <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        /> */}

        {/* <TileLayer
          attribution='&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey={apikey}'
          maxZoom={22}
          apikey='8533dba861054ad4aaa48c3e2ae806ac'
        /> */}

        <TileLayer
          attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
          url='https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'
          maxZoom={20}
        />

        <MyPolyline coordinates={coordsLocal.polyline} />
        {/* Start Position */}
        <Marker position={coordsLocal.start}>
          <Popup>
            START
            <br />
            latitude: {coordsLocal.start[0]}
            <br />
            longitude: {coordsLocal.start[1]}
          </Popup>
        </Marker>

        {/* End Position */}
        <Marker position={coordsLocal.end}>
          <Popup>
            STOP
            <br />
            latitude: {coordsLocal.end[0]}
            <br />
            longitude: {coordsLocal.end[1]}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
