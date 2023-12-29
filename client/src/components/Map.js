/* eslint-disable */
import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { apiMap } from '../service';

const Map = ({ isEdit, value, setValue, isDetail }) => {
  const refMap = useRef(null);
  const [viewMap, setViewMap] = useState(
    isEdit ? [value?.lat, value?.lng] : [10.897718231493357, 106.77148958873619]
  );
  let theMarker, theCircle;

  let finalAddress = `${value?.ward}, ${value?.district}, ${value?.province}, Việt Nam`;

  const customIcon = L.icon({
    iconUrl: 'https://img.icons8.com/color/48/marker--v1.png',
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [0, -30],
  });

  // useEffect(() => {
  //   const success = (pos) => {
  //     const lat = pos.coords.latitude;
  //     const lng = pos.coords.longitude;
  //     setViewMap([lat, lng]);
  //   };

  //   const error = (err) => {
  //     console.warn(`ERROR(${err.code}): ${err.message}`);
  //     setViewMap([10.897718231493357, 106.77148958873619]);
  //   };

  //   navigator.geolocation.getCurrentPosition(success, error);
  // }, []);

  useEffect(() => {
    var container = L.DomUtil.get(refMap.current);
    if (container != null) {
      container._leaflet_id = null;
    }

    let map;
    if (!map) {
      map = L.map(refMap.current).setView(viewMap, 14);
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


    map.setView(viewMap, 14);
    console.log('🚀 ~ file: Map.js:97 ~ useEffect ~ viewMap:', viewMap);

    theMarker = L.marker(viewMap, { icon: customIcon }).addTo(map);
    theCircle = L.circle(viewMap, {
      radius: 50,
    }).addTo(map);

    if (
      value?.province !== '' &&
      value?.district !== '' &&
      value?.ward !== '' &&
      !isDetail
    ) {
      const fetchCoordinates = async () => {
        console.log(
          '🚀 ~ file: Map.js:29 ~ useEffect ~ finalAddres:',
          finalAddress
        );
        try {
          const response = await apiMap(finalAddress);
          const { lat, lng } = response.data.results[0].geometry;
          map.setView([lat, lng], 14);
          setViewMap([lat, lng]);
        } catch (error) {
          console.error('Error fetching coordinates:', error);
        }
      };
      fetchCoordinates();
    }
    if (!isDetail) {
      setValue((prev) => ({
        ...prev,
        lat: viewMap[0],
        lng: viewMap[1],
      }));
    }

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
  }, [value?.province, value?.dictrict, value?.ward]);

  return (
    <div>
      <div ref={refMap} className='z-10' id="map"></div>
    </div>
  );
};

export default Map;
/* eslint-enable */