import React from "react"; 
import ResetCounterBtn from '../ResetCounterBtn/ResetCounterBtn';


const TopBar = (props) => {
    const {points, setPoints} = props;
    return (
        <div>
            <h2>Collected Points: { points } 
                <ResetCounterBtn
                    points={points}
                    setPoints={setPoints}/>
            </h2>
        </div>
    )
}


export default TopBar;
