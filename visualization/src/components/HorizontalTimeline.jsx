import React from "react";
// import "./styles.css";
import { Chrono } from "react-chrono";
import presidents from './../data/presidents.json'

export default function HorizontalTimeline() {
    const items = presidents.features

    return (
        <div id={'presidents'}>
            <div style={{ textAlign: 'center',
                width: "850px",
                height: "500px" }}>
                <Chrono
                    style={{textAlign: 'center'}}
                    fontSizes={{
                    cardSubtitle: '0.85rem',
                    cardText: '10px',
                    cardTitle: '39px'
                }}
                        items={items} mode="HORIZONTAL"
                        theme={{
                    primary: 'rgba(11, 117, 134, 1)',
                    secondary: 'rgba(11, 117, 134, 0.61)',
                    cardForeColor: 'rgb(255, 255, 255, 0.5)',
                    titleColor: 'black',
                }}/>
            </div>
        </div>
    );
}
