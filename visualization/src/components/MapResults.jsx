import ElectionsMap from "./ElectionsMap";
import ApexChart from "./BarChart";
// import React from "react";

function MapResults (props) {
    const data = props.data
    const fractions = props.fractions
    const color = props.color
    console.log(data)
    return (
        <div>
    <ElectionsMap year={data.year}
                  color={data.color}
                  fillColor={data.fillColor}
                  mouseon={data.mouseon}>
    </ElectionsMap>
    <ApexChart fractions={fractions}
               color={color}>
    </ApexChart>
        </div>
);
}

export default MapResults;