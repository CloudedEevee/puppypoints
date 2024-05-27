import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ResetCounterBtn = (props) => {
    const { points, setPoints  } = props;

    const resetCount = (e) => {
        console.log(points);
        setPoints(0);
    };

    return (
        <button onClick={resetCount}>Reset</button>
    )

}


export default ResetCounterBtn;