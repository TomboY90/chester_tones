import React, { useEffect, useRef, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import buildingIcon from '@assets/images/icons/icn_building.png';

const LocationMap = ({ className }) => {
  const mapRef = useRef();
  const [map, setMap] = useState(null);
  const mapOptions = {
    center: { lat: 38.115917, lng: 128.632025 },
    zoom: 18,
  };

  useEffect(() => {
    //최초 실행시 구글 맵 라이브러리 로더
    const loader = new Loader({
      apiKey: 'AIzaSyBDE6LjdRkzzzaB5__Nxqolzi_iemIPtlU',
      version: 'weekly',
    });

    loader.load().then(async () => {
      const { Map } = await window.google.maps.importLibrary('maps');

      const mapInstance = new Map(mapRef.current, mapOptions);
      setMap(mapInstance);
    });
  }, []);

  useEffect(() => {
    if (map === null) {
      return;
    }
    new window.google.maps.Marker({
      position: mapOptions.center,
      icon: buildingIcon,
      map,
    });
  }, [map]);

  return (
    <article className={className}>
      <div ref={mapRef} style={{ width: '100%', height: '100%' }}></div>
    </article>
  );
};

export default LocationMap;
