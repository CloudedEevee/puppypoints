import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CounterButton from '../CounterButton/CounterButton';
import TopBar from './TopBar';
import FooterBar from './FooterBar';

const Main = (props) => {
    const [points, setPoints] = useState(0);

    return (
        <div>
            <TopBar 
                points={points}
                setPoints={setPoints}/>
                
            <div>
                <CounterButton 
                    points={points}
                    setPoints={setPoints}/>
                
            </div>
            <FooterBar
                points={points}
                setPoints={setPoints}/>
        </div>
    )

}


export default Main;