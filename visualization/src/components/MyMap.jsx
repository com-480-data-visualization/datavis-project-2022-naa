import React, { Component } from "react";
import { Map, GeoJSON } from "react-leaflet";
import mapData from "./../data/us.json";
import "leaflet/dist/leaflet.css";
// import "./MyMap.css";


class MyMap extends Component {
  state = {};

  colors = ["green", "blue", "yellow", "orange", "grey"];

  componentDidMount() {
    console.log(mapData);
  }

  countryStyle = {
    fillColor: "grey",
    fillOpacity: 1,
    color: "black",
    weight: 2,
  };

  printMesssageToConsole = (event) => {
    console.log("Clicked");
  };

  // changeCountryColor = (event) => {
  //   event.target.setStyle({
  //     color: "green",
  //     fillColor: this.state.color,
  //     fillOpacity: 1,
  //   });
  // };

  onEachCountry = (country, layer) => {
    const countryName = country.properties.ADMIN;
    console.log(countryName);
    layer.bindPopup(countryName);

    layer.options.fillOpacity = Math.random(); //0-1 (0.1, 0.2, 0.3)
    // const colorIndex = Math.floor(Math.random() * this.colors.length);
  };

  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>My Map</h1>
        <Map style={{ height: "100vh" }} zoom={3} center={[50, -100]}>
          <GeoJSON
            style={this.countryStyle}
            data={mapData.features}
            onEachFeature={this.onEachCountry}
          />
        </Map>
        <input
          type="color"
          value={this.state.color}
          onChange={this.colorChange}
        />
      </div>
    );
  }
}

export default MyMap;
