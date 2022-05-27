import ElectionsMap from "./ElectionsMap";
import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import React from "react";
import BarChart from "./BarChart";

const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};


const ElectionsMaps = () => {
    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };

    const data = [
        {year: '2017', color: 'rgba(11, 117, 134, 1)', fillColor: 'rgba(11, 117, 134, 0.61)', mouseon: ''},
        {year: '2019', color: 'rgba(104, 142, 57, 1)', fillColor: 'rgba(104, 142, 57, 0.61)', mouseon: ''},
        {year: '2020', color: 'rgba(193, 58, 79, 1)', fillColor: 'rgba(193, 58, 79, 0.61)', mouseon: ''},
        {year: '2021', color: 'rgba(75, 192, 192, 1)', fillColor: 'rgba(75, 192, 192, 0.61)', mouseon: ''}
    ]
    return (
        <Carousel afterChange={onChange}>
            <div>
                <ElectionsMap year = {data[0].year}
                              color = {data[0].color}
                              fillColor = {data[0].fillColor}
                              mouseon = {data[0].mouseon}>
                </ElectionsMap>
                <BarChart></BarChart>
            </div>
            <div>
                <ElectionsMap year = {data[1].year}
                              color = {data[1].color}
                              fillColor = {data[1].fillColor}
                              mouseon = {data[1].mouseon}
                >
                    <BarChart></BarChart>
                </ElectionsMap>
            </div>
            <div>
                <ElectionsMap year = {data[2].year}
                              color = {data[2].color}
                              fillColor = {data[2].fillColor}
                              mouseon = {data[2].mouseon}>
                </ElectionsMap>
                <BarChart></BarChart>
            </div>
            <div>
                <ElectionsMap year = {data[3].year}
                              color = {data[3].color}
                              fillColor = {data[3].fillColor}
                              mouseon = {data[3].mouseon}
                >
                </ElectionsMap>
                <BarChart></BarChart>
            </div>
        </Carousel>
    );
};
export default ElectionsMaps;


