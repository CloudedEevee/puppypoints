import React, { useEffect, useState } from 'react'
import axios from 'axios'

const CounterButton = (props) => {
    const { points, setPoints  } = props;

    const plusOne = (e) => {
        // console.log(points);
        setPoints(points + 1);
    };

    return (
        <button onClick={plusOne}>Click</button>
    )

}


export default CounterButton;