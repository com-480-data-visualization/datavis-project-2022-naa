import { Carousel } from 'antd';
import "antd/dist/antd.min.css"
import React from "react";
import election_results from "./../data/yearly_party_results.json"
import MapResults from './MapResults'

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
        {year: '2000', color: 'rgba(11, 117, 134, 1)', fillColor: 'rgba(11, 117, 134, 0.61)', mouseon: ''},
        {year: '2004', color: 'rgba(104, 142, 57, 1)', fillColor: 'rgba(104, 142, 57, 0.61)', mouseon: ''},
        {year: '2008', color: 'rgba(193, 58, 79, 1)', fillColor: 'rgba(193, 58, 79, 0.61)', mouseon: ''},
        {year: '2012', color: 'rgba(75, 192, 192, 1)', fillColor: 'rgba(75, 192, 192, 0.61)', mouseon: ''},
        {year: '2016', color: 'rgba(164, 142, 24, 1)', fillColor: 'rgba(164, 142, 24, 0.61)', mouseon: ''},
        {year: '2020', color: 'rgba(106, 164, 24, 1)', fillColor: 'rgba(106, 164, 24, 0.61)', mouseon: ''},

    ]

    return (
        <Carousel afterChange={onChange}>
            <MapResults data={data[0]}
                        fractions={election_results["2000"].fractions}
                        color = {data[0].color}
            ></MapResults>
            <MapResults data={data[1]} fractions={election_results["2004"].fractions}
                        color = {data[1].color}></MapResults>
            <MapResults data={data[2]} fractions={election_results["2008"].fractions}
                        color = {data[2].color}></MapResults>
            <MapResults data={data[3]} fractions={election_results["2012"].fractions}
                        color = {data[3].color}></MapResults>
            <MapResults data={data[4]} fractions={election_results["2016"].fractions}
                        color = {data[4].color}></MapResults>
            <MapResults data={data[5]} fractions={election_results["2020"].fractions}
                        color = {data[5].color}></MapResults>
        </Carousel>
    );
};
export default ElectionsMaps;


