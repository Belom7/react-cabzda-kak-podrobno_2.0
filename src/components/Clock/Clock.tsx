import React, {useEffect, useState} from 'react';
import {DigitalClock} from "./Digital/DigitalClock";
import {AnalogClock} from "./Analog/AnalogClock";

type ClockPropsType = {
    mode: 'Analog' | 'Digital'
}


export const Clock = ({mode}: ClockPropsType) => {

    const [data, setData] = useState(new Date())

    useEffect(() => {

        const intervalId = setInterval(() => {
            console.log('tik-tak')
            setData(new Date())
        }, 1000)

        return () => clearInterval(intervalId)

    }, [])


    return (
        <div>
            {mode === 'Digital' ?
                <DigitalClock data={data}/>
                : <AnalogClock data={data}/>
            }
        </div>
    );
};
