import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Map = ({ value, setValue }) => {
  const refMap = useRef(null);
  const [viewMap, setViewMap] = useState([
    10.897718231493357, 106.77148958873619,
  ]);
  let theMarker, theCircle;
  const customIcon = L.icon({
    iconUrl: 'https://img.icons8.com/color/48/marker--v1.png',
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [0, -30],
  });

  useEffect(() => {
    navigator.geolocation.watchPosition(success);
    function success(pos) {
      const lat = pos.coords.latitude;
      console.log('🚀 ~ file: Map.js:20 ~ success ~ pos.coords:', pos.coords);
      const lng = pos.coords.longitude;

      setViewMap([lat, lng]);
    }
  }, []);

  useEffect(() => {
    var container = L.DomUtil.get(refMap.current);
    if (container != null) {
      container._leaflet_id = null;
    }

    if (!map) {
      var map = L.map(refMap.current).setView(viewMap, 14);
      var googleStreets = L.tileLayer(
        'http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',
        {
          maxZoom: 20,
          subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
        }
      );
      googleStreets.addTo(map);
    } else {
      map?.off();
      map?.remove();
    }

    var googleStreets = L.tileLayer(
      'http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',
      {
        maxZoom: 20,
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
      }
    );
    googleStreets.addTo(map);
    console.log('🚀 ~ file: Map.js:56 ~ success ~ map:', map);

    map.setView(viewMap, 14);

    theMarker = L.marker(viewMap, { icon: customIcon }).addTo(map);
    theCircle = L.circle(viewMap, {
      radius: 50,
    }).addTo(map);

    map.on('click', function (e) {
      if (theMarker != undefined) {
        map.removeLayer(theMarker);
      }

      if (theCircle != undefined) {
        map.removeLayer(theCircle);
      }
      theMarker = L.marker(e.latlng, {
        icon: customIcon,
      }).addTo(map);
      theMarker.bindPopup('Hello, this is a marker!').openPopup();

      theCircle = L.circle(e.latlng, { radius: 50 }).addTo(map);
      setValue((prev) => ({
        ...prev,
        lat: e.latlng.lat,
        lng: e.latlng.lng,
      }));
    });
  }, []);

  return (
    <div>
      <div ref={refMap} id="map"></div>
    </div>
  );
};

export default Map;
