import React, { useEffect, useState } from 'react'
import boneButton from "../../assets/dogBonePaw.png";
import './counterButton.css';
import axios from 'axios'

const CounterButton = (props) => {
    const { points, setPoints  } = props;

    const plusOne = (e) => {
        // console.log(points);
        setPoints(points + 1);
    };

    return (
        <div>
            <img src={boneButton} alt="dog bone with paw" onClick={plusOne} />
        </div>
    )

}

export default CounterButton;