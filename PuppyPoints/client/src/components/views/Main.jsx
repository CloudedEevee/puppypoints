import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CounterButton from '../CounterButton';
import ResetCounterBtn from '../ResetCounterBtn';

const Main = (props) => {
    const [points, setPoints] = useState(0);

    return (
        <div>
            <h2>Collect Points: { points }</h2>

            <div>
                <CounterButton 
                    points={points}
                    setPoints={setPoints}/>
                <ResetCounterBtn
                    points={points}
                    setPoints={setPoints}/>
            </div>
        </div>
    )

}


export default Main;