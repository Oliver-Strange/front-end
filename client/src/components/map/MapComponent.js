import React from "react";
import { withGoogleMap, withScriptjs } from "react-google-maps";
import Map from "./Map";

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function eventMap() {
  return (
    <div className="MapContainer">
      <WrappedMap
        googleMapURL={
          "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCtTDf-cRIv4LFjrPKPUttpcLXb45tHhRw 	"
        }
        loadingElement={<div style={{ height: "100%" }} />}
        containerElement={<div style={{ height: "100%" }} />}
        mapElement={<div style={{ height: "100%" }} />}
      />
    </div>
  );
}
