import React from "react"; 
import DigBtn from "../ActivityButtons/DigButton";
import ParkBtn from "../ActivityButtons/ParkButton";
import AntCatBtn from "../ActivityButtons/AntCatButton";

//Create cooldown
const FooterBar = (props) => {
    const {points, setPoints} = props;
    return (
        <div>
            <DigBtn
                points={points}
                setPoints={setPoints}/>
            <ParkBtn
                points={points}
                setPoints={setPoints}/>
            <AntCatBtn
                points={points}
                setPoints={setPoints}/>
        </div>
    )
}


export default FooterBar;
