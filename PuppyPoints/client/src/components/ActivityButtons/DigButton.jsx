import React, { useEffect, useState } from 'react'
import axios from 'axios'

const DigBtn = (props) => {
    const { points, setPoints  } = props;

    const dig = (e) => {
        console.log(points);
        let digResult = Math.round((Math.random()*3) + 1);
        console.log(digResult);
        setPoints(points + digResult);
    };

    return (
        <button onClick={dig}>Dig for Bones</button>
    )

}


export default DigBtn;