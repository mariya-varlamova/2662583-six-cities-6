import { useEffect, useRef } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Offer } from '../../mocks/offers';
import { URL_MARKER_DEFAULT, URL_MARKER_ACTIVE } from '../../const';

type MapProps = {
  offers: Offer[];
  activeOfferId?: string | null;
}

function Map({ offers, activeOfferId }: MapProps): JSX.Element {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<leaflet.Map | null>(null);

  useEffect(() => {
    if (mapRef.current && !mapInstanceRef.current && offers.length > 0) {
      const city = offers[0]?.city;

      if (city) {
        mapInstanceRef.current = leaflet.map(mapRef.current).setView(
          [city.location.latitude, city.location.longitude],
          city.location.zoom
        );

        leaflet
          .tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          })
          .addTo(mapInstanceRef.current);
      }
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [offers]);

  useEffect(() => {
    if (mapInstanceRef.current && offers.length > 0) {
      const city = offers[0]?.city;

      if (city) {
        mapInstanceRef.current.setView(
          [city.location.latitude, city.location.longitude],
          city.location.zoom
        );
      }
    }
  }, [offers]);

  useEffect(() => {
    if (mapInstanceRef.current && offers.length > 0) {
      const markerLayer = leaflet.layerGroup().addTo(mapInstanceRef.current);

      offers.forEach((offer) => {
        const isActive = offer.id === activeOfferId;
        const icon = leaflet.icon({
          iconUrl: isActive ? URL_MARKER_ACTIVE : URL_MARKER_DEFAULT,
          iconSize: [27, 39],
          iconAnchor: [13, 39]
        });

        leaflet
          .marker([offer.location.latitude, offer.location.longitude], { icon })
          .addTo(markerLayer);
      });

      return () => {
        markerLayer.clearLayers();
      };
    }
  }, [offers, activeOfferId]);

  return <div ref={mapRef} style={{ height: '100%', width: '100%' }}></div>;
}

export default Map;
