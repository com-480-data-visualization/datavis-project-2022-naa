import "./icon.css"
import * as React from 'react';


function Icon(props) {
    var icons_url = 'https://ichef.bbci.co.uk/news/640/cpsprodpb/9F30/production/_92225704_hi004938216.jpg'
    const fraction_demo = 0//props.fraction_demo;
    const fraction_rep = 0//props.fraction_rep;
    const state_name = props.name;
    return <div style={{
            padding: 0,
            textAlign: 'center',
    }}>
            <h1 className="name">{state_name}</h1>
            <div>
            <img src={icons_url} height={"75px"} alt='Democratic'/>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div style={{textAlign: 'center'}}>{fraction_demo}</div>
                    <div style={{textAlign: 'center'}}>{fraction_rep}</div>
                </div>
            </div>
    </div>
};

export default Icon;
