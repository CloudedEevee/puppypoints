import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ParkBtn = (props) => {
    const { points, setPoints  } = props;

    const park = (e) => {
        console.log(points);
        let parkResult = Math.round((Math.random()*9) + 5);
        console.log(parkResult);
        setPoints(points + parkResult);
    };

    return (
        <button onClick={park}>Go to the Park</button>
    )

}


export default ParkBtn;