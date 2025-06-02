import React, { useEffect, useRef } from 'react';

const GoogleMap = ({ address }) => {
  const mapRef = useRef(null);
  const googleMapRef = useRef(null);

  useEffect(() => {
    // Function to load Google Maps API script
    const loadGoogleMapsScript = () => {
      if (!window.google) {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&libraries=places`;
        script.async = true;
        script.defer = true;
        script.onload = initializeMap;
        document.head.appendChild(script);
      } else {
        initializeMap();
      }
    };

    // Function to initialize the map
    const initializeMap = () => {
      if (!mapRef.current) return;

      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ address }, (results, status) => {
        if (status === 'OK' && results[0]) {
          const { lat, lng } = results[0].geometry.location;
          
          const mapOptions = {
            center: { lat: lat(), lng: lng() },
            zoom: 14,
            mapTypeControl: true,
            streetViewControl: true,
            fullscreenControl: true,
            zoomControl: true,
            styles: [
              {
                featureType: 'poi',
                elementType: 'labels',
                stylers: [{ visibility: 'off' }]
              }
            ]
          };

          googleMapRef.current = new window.google.maps.Map(mapRef.current, mapOptions);

          new window.google.maps.Marker({
            position: { lat: lat(), lng: lng() },
            map: googleMapRef.current,
            title: 'Luxury Vacation Home',
            animation: window.google.maps.Animation.DROP
          });
        }
      });
    };

    loadGoogleMapsScript();

    return () => {
      // Cleanup if needed
    };
  }, [address]);

  return (
    <div 
      ref={mapRef} 
      className="w-full h-[400px]"
      style={{ border: '1px solid #e2e8f0' }}
    />
  );
};

export default GoogleMap;
