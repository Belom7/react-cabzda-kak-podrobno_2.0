import React, {useState} from "react";
import {SelfControlledStar} from "./Star/SelfControlledStar";

export const SelfControlledRating = () => {

    const [value, setValue] = useState(0)

    const valueStart = (value:number) => {setValue(value)}

    return (
        <div>
            <SelfControlledStar selected={value > 0} callBack={valueStart} numberStar={1}/>
            <SelfControlledStar selected={value > 1} callBack={valueStart} numberStar={2}/>
            <SelfControlledStar selected={value > 2} callBack={valueStart} numberStar={3}/>
            <SelfControlledStar selected={value > 3} callBack={valueStart} numberStar={4}/>
            <SelfControlledStar selected={value > 4} callBack={valueStart} numberStar={5}/>
        </div>
    )
}