import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Ship, Train, Truck } from "lucide-react";
import { useTranslation } from 'react-i18next';
import './Logistics.css';

export const Logistics: React.FC = () => {
  const { t } = useTranslation();
  const [geoData, setGeoData] = useState<any>(null);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson")
      .then(res => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then(data => {
        setGeoData(data);
      })
      .catch(err => console.error("Map loading error:", err));
  }, []);

  // ✅ Get delivery methods from translations
  const deliveryMethods = [
    { 
      title: t('logistics.deliveryMethods.maritime.title'), 
      icon: <Ship size={24} />, 
      desc: t('logistics.deliveryMethods.maritime.desc') 
    },
    { 
      title: t('logistics.deliveryMethods.rail.title'), 
      icon: <Train size={24} />, 
      desc: t('logistics.deliveryMethods.rail.desc') 
    },
    { 
      title: t('logistics.deliveryMethods.road.title'), 
      icon: <Truck size={24} />, 
      desc: t('logistics.deliveryMethods.road.desc') 
    },
  ];

  // ✅ Get regions from translations
  const logisticsRegions = [
    { 
      id: "europe",
      name: t('logistics.regions.europe.name'), 
      color: "#005f3a", 
      countries: t('logistics.regions.europe.countries', { returnObjects: true }) as string[]
    },
    { 
      id: "caucasus",
      name: t('logistics.regions.caucasus.name'), 
      color: "#f4d03f", 
      countries: t('logistics.regions.caucasus.countries', { returnObjects: true }) as string[]
    },
    { 
      id: "asia",
      name: t('logistics.regions.asia.name'), 
      color: "#3385ff", 
      countries: t('logistics.regions.asia.countries', { returnObjects: true }) as string[]
    }
  ];

  const styleFeature = (feature: any) => {
    const countryName = feature.properties.name || feature.properties.NAME || "";
    const cleanName = countryName.trim();
    const region = logisticsRegions.find(r => r.countries.includes(cleanName));

    if (region) {
      return {
        fillColor: region.color,
        weight: 1,
        opacity: 1,
        color: 'white',
        dashArray: '',
        fillOpacity: 0.7
      };
    } else {
      return {
        fillColor: "#e5e7eb", 
        weight: 0.5,
        opacity: 1,
        color: '#ffffff',
        fillOpacity: 0.3
      };
    }
  };

  const onEachFeature = (feature: any, layer: any) => {
    const name = feature.properties.name || feature.properties.NAME;
    const isTargetRegion = logisticsRegions.some(r => r.countries.includes(name));
    
    if (isTargetRegion) {
      layer.bindTooltip(name, { permanent: false, direction: "center" });
      layer.on({
        mouseover: (e: any) => {
          e.target.setStyle({ fillOpacity: 0.9, weight: 2 });
        },
        mouseout: (e: any) => {
          e.target.setStyle({ fillOpacity: 0.7, weight: 1 });
        }
      });
    }
  };

  return (
    <section id="logistics" className="logistics-section">
      <div className="logistics-container">
        
        <div className="logistics-header">
          <h2 className="section-title">{t('logistics.title')}</h2>
          <p className="section-subtitle">{t('logistics.subtitle')}</p>
        </div>

        <div className="methods-grid">
          {deliveryMethods.map((method, idx) => (
            <div key={idx} className="method-card">
              <div className="method-icon">{method.icon}</div>
              <div>
                <h4 className="method-title">{method.title}</h4>
                <p className="method-desc">{method.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Regions Legend Section */}
        <div className="regions-legend-grid">
          {logisticsRegions.map((region) => (
            <div key={region.id} className="region-legend-card">
              <div className="region-header">
                <div 
                  className="region-color-dot" 
                  style={{ backgroundColor: region.color }} 
                />
                <h3 className="region-name">{region.name}</h3>
              </div>
              <div className="region-countries">
                {region.countries.join(", ")}
              </div>
            </div>
          ))}
        </div>

        <div className="leaflet-map-wrapper">
          <MapContainer 
            center={[44, 35]} 
            zoom={4} 
            scrollWheelZoom={false} 
            style={{ height: "500px", width: "100%", borderRadius: "1.5rem", zIndex: 1 }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
              url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            />

            {geoData ? (
              <GeoJSON 
                data={geoData} 
                style={styleFeature} 
                onEachFeature={onEachFeature}
              />
            ) : (
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1000 }}>
                {t('logistics.mapLoading')}
              </div>
            )}
          </MapContainer>
        </div>

      </div>
    </section>
  );
};