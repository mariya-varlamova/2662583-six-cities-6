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
  const markerLayerRef = useRef<leaflet.LayerGroup | null>(null);
  const currentCityRef = useRef<string>('');

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

        markerLayerRef.current = leaflet.layerGroup().addTo(mapInstanceRef.current);
        currentCityRef.current = city.name;
      }
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
        markerLayerRef.current = null;
      }
    };
  }, [offers]);

  useEffect(() => {
    const map = mapInstanceRef.current;
    if (map && offers.length > 0) {
      const city = offers[0]?.city;
      if (city && currentCityRef.current !== city.name) {
        map.setView(
          [city.location.latitude, city.location.longitude],
          city.location.zoom
        );
        currentCityRef.current = city.name;
      }
    }
  }, [offers]);

  useEffect(() => {
    const map = mapInstanceRef.current;
    const markerLayer = markerLayerRef.current;
    if (map && markerLayer) {
      markerLayer.clearLayers();

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
    }
  }, [offers, activeOfferId]);

  return <div ref={mapRef} style={{ height: '100%', width: '100%' }}></div>;
}

export default Map;
