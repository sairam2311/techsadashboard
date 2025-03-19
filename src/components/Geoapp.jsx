import React, { useEffect, useRef, useState } from "react";
import "ol/ol.css";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import LayerGroup from "ol/layer/Group";
import OSM from "ol/source/OSM";
import XYZ from "ol/source/XYZ";
import TileArcGISRest from "ol/source/TileArcGISRest";
import Overlay from "ol/Overlay";
import { FaMap, FaLayerGroup, FaAdjust } from "react-icons/fa";
import { fromLonLat } from "ol/proj";

function Geoapp() {
  const mapRef = useRef(null);
  const popupRef = useRef(null);
  const [map, setMap] = useState(null);
  const [layers, setLayers] = useState({});
  const [selectedBasemap, setSelectedBasemap] = useState("osm");

  useEffect(() => {
    if (!mapRef.current) return;

    // Basemap Layers
    const osmLayer = new TileLayer({ source: new OSM(), visible: true, title: "OpenStreetMap" });
    const satelliteLayer = new TileLayer({
      source: new XYZ({ url: "https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}" }),
      visible: false,
      title: "Satellite",
    });

    // Administrative Layers
    const adminLayers = {
      districtBoundaries: new TileLayer({
        source: new TileArcGISRest({ url: "https://sampleserver6.arcgisonline.com/arcgis/rest/services/Census/MapServer/2" }),
        visible: false,
        title: "District Boundaries",
        opacity: 1,
      }),
      cityBoundaries: new TileLayer({
        source: new TileArcGISRest({ url: "https://sampleserver6.arcgisonline.com/arcgis/rest/services/Census/MapServer/1" }),
        visible: false,
        title: "City Boundaries",
        opacity: 1,
      }),
    };

    // Infrastructure Layers
    const infraLayers = {
      roads: new TileLayer({
        source: new TileArcGISRest({ url: "https://sampleserver6.arcgisonline.com/arcgis/rest/services/USA/MapServer/1" }),
        visible: false,
        title: "Roads",
        opacity: 1,
      }),
      railwayLines: new TileLayer({
        source: new TileArcGISRest({ url: "https://sampleserver6.arcgisonline.com/arcgis/rest/services/USA/MapServer/3" }),
        visible: false,
        title: "Railway Lines",
        opacity: 1,
      }),
    };

    // Layer Groups
    const basemapGroup = new LayerGroup({ layers: [osmLayer, satelliteLayer] });
    const adminGroup = new LayerGroup({ layers: Object.values(adminLayers) });
    const infraGroup = new LayerGroup({ layers: Object.values(infraLayers) });

    // Initialize Map
    const olMap = new Map({
      target: mapRef.current,
      layers: [basemapGroup, adminGroup, infraGroup],
      view: new View({ center: fromLonLat([78.4867, 17.3850]), zoom: 6 }),
    });

    setMap(olMap);
    setLayers({ basemapGroup, adminGroup, infraGroup, ...adminLayers, ...infraLayers, osm: osmLayer, satellite: satelliteLayer });

    return () => olMap.setTarget(null);
  }, []);

  // Function to switch basemap
  const switchBasemap = (layerName) => {
    if (map && layers) {
      layers.basemapGroup.getLayers().forEach((layer) => {
        layer.setVisible(layer.get("title").toLowerCase() === layerName);
      });
      setSelectedBasemap(layerName);
    }
  };

  // Toggle layer visibility
  const toggleLayer = (layerName) => {
    if (map && layers[layerName]) {
      layers[layerName].setVisible(!layers[layerName].getVisible());
    }
  };

  // Adjust layer opacity
  const setLayerOpacity = (layerName, opacity) => {
    if (map && layers[layerName]) {
      layers[layerName].setOpacity(opacity);
    }
  };

  return (
    <div className="position-relative">
      {/* Map Container */}
      <div ref={mapRef} className="rounded shadow-sm border" style={{ width: "100%", height: "450px" }}></div>

      {/* Layer Switcher UI */}
      <div
        className="position-absolute shadow-lg rounded glassmorphism"
        style={{ top: "15px", right: "15px", zIndex: 1000, width: "280px", padding: "12px", backdropFilter: "blur(10px)", backgroundColor: "rgba(255, 255, 255, 0.2)" }}
      >
        <h6 className="text-white fw-bold text-center mb-2">Layer Switcher</h6>

        {/* Basemap Selector */}
        <div className="mb-3">
          <label className="form-label text-white fw-bold d-flex align-items-center">
            <FaMap className="me-2" /> Basemap:
          </label>
          <select className="form-select form-select-sm bg-dark text-white" value={selectedBasemap} onChange={(e) => switchBasemap(e.target.value)}>
            <option value="osm">OpenStreetMap</option>
            <option value="satellite">Satellite</option>
          </select>
        </div>

        {/* Administrative Layers */}
        <h6 className="text-white">Administrative Layers</h6>
        {["districtBoundaries", "cityBoundaries"].map((layerKey) => (
          <div key={layerKey} className="mb-2">
            <input type="checkbox" onChange={() => toggleLayer(layerKey)} /> {layers[layerKey]?.get("title")}
            <input type="range" min="0" max="1" step="0.1" defaultValue="1" className="form-range" onChange={(e) => setLayerOpacity(layerKey, parseFloat(e.target.value))} />
          </div>
        ))}

        {/* Infrastructure Layers */}
        <h6 className="text-white">Infrastructure Layers</h6>
        {["roads", "railwayLines"].map((layerKey) => (
          <div key={layerKey} className="mb-2">
            <input type="checkbox" onChange={() => toggleLayer(layerKey)} /> {layers[layerKey]?.get("title")}
            <input type="range" min="0" max="1" step="0.1" defaultValue="1" className="form-range" onChange={(e) => setLayerOpacity(layerKey, parseFloat(e.target.value))} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Geoapp;
