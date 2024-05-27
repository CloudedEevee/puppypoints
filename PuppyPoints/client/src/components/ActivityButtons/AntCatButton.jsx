import React, { useEffect, useState } from 'react'
import axios from 'axios'

const AntCatBtn = (props) => {
    const { points, setPoints  } = props;

    const antCat = (e) => {
        console.log(points);
        let antCatResult = Math.round((Math.random()*40) - 20);
        console.log(antCatResult);
        setPoints(points + antCatResult);
    };

    return (
        <button onClick={antCat}>Antagonize a Cat</button>
    )

}


export default AntCatBtn;