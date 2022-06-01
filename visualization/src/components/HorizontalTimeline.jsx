import React from "react";
// import "./styles.css";
import { Chrono } from "react-chrono";
import presidents from './../data/presidents.json'

export default function HorizontalTimeline() {
    const items = presidents.features

    return (
        <div id={'presidents'}>
            <div style={{ width: "850px", height: "500px" }}>
                <Chrono fontSizes={{
                    cardSubtitle: '0.85rem',
                    cardText: '0.8rem',
                    cardTitle: '1rem'
                }}
                        items={items} mode="HORIZONTAL"
                        theme={{
                    primary: 'rgba(11, 117, 134, 1)',
                    secondary: 'rgba(11, 117, 134, 0.61)',
                    // cardBgColor: 'rgb(255, 255, 255, 0.5)',
                    cardForeColor: 'rgb(255, 255, 255, 0.5)',
                    titleColor: 'black',
                }}/>
            </div>
        </div>
    );
}
