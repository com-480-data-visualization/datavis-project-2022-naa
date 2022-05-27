import React, { Component } from "react";
import { MapContainer, GeoJSON, Popup } from "react-leaflet";
import { Layout }  from 'antd';
import * as ReactDOMServer from 'react-dom/server';
import mapData from "./../data/state_data.json";
import "leaflet/dist/leaflet.css";
import "./ElectionsMap.css"
import BarChart from "./BarChart";
const { Header } = Layout;


class ElectionsMap extends Component {

    onEachCountry = (country, layer) => {
        const fillColor = this.props.fillColor;
        const mouseon = this.props.mouseon;
        // const countryName = country.properties.ADMIN;
        const handleClick = (e) => {
            alert('clicked')
        }
        var icon_url = "";
        // layer.bindPopup(ReactDOMServer.renderToString('<img src=' + icon_url + 'height="150px" width="150px"/>'));
        // const popupContent = ReactDOMServer.renderToString(
        //     <BarChart></BarChart>
        // );
        // layer.bindPopup(popupContent);
        layer.on('mouseover', function () {
            this.setStyle({
                'fillColor': mouseon
            });
        }
        );
        layer.on('mouseout', function () {
            this.setStyle({
                'fillColor': fillColor
            });
        });
    };
    render() {
        const color = this.props.color;
        const fillColor = this.props.fillColor;
        const year = this.props.year;
        return (
            <div id='map'>
                <Layout>
                <Header className="site-layout-background"
                    style={{
                        textAlign: 'center',
                        fontSize:'35px',
                        padding: 0,
                    }}>
                    {year}
                </Header>
                <MapContainer style={{height: '60vh'}}
                     dragging={false}
                     doubleClickZoom={false}
                     scrollWheelZoom={false}
                     attributionControl={false}
                     zoom={4}
                     zoomControl={false}
                     center={[37, -100]}>
                    <GeoJSON
                        style={{
                            color: color,
                            weight: 0.9,
                            fillColor: fillColor,
                            fillOpacity: 1
                        }}

                        data={mapData.features}
                        onEachFeature={this.onEachCountry}
                    />
                </MapContainer>
                </Layout>
            </div>
        );
    }
}

export default ElectionsMap;
