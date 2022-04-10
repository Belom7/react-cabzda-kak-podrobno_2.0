import React, {useState} from "react";
import {SelfControlledStar} from "./Star/SelfControlledStar";

export const SelfControlledRating = () => {

    const [value, setValue] = useState(0)

    const valueStart = (value:number) => {setValue(value)}

    return (
        <div>
            <SelfControlledStar selected={value > 0} callBack={()=>valueStart(1)}/>
            <SelfControlledStar selected={value > 1} callBack={()=>valueStart(2)}/>
            <SelfControlledStar selected={value > 2} callBack={()=>valueStart(3)}/>
            <SelfControlledStar selected={value > 3} callBack={()=>valueStart(4)}/>
            <SelfControlledStar selected={value > 4} callBack={()=>valueStart(5)}/>
        </div>
    )
}