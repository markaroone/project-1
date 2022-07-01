import React from 'react';
import { getCoordinates } from '../../functions';
import styles from './ActivityMap.module.css';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';

const MyPolyline = ({ coordinates }) => {
  const map = useMap();

  const polyline = L.polyline(coordinates, {
    color: '#5C7CFA',
    stroke: true,
    weight: 5,
  }).addTo(map);

  map.fitBounds(polyline.getBounds(), { maxZoom: 18 });
};

const ActivityMap = ({ data }) => {
  const activityCoords = getCoordinates(data);

  const coordsLocal = {
    polyline: activityCoords,
    start: activityCoords[0],
    end: activityCoords[activityCoords.length - 1],
  };

  return (
    <div className={styles.container}>
      <MapContainer center={coordsLocal.start} zoom={14} scrollWheelZoom={true}>
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

export default ActivityMap;
