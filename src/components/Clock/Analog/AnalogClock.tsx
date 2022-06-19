import React from 'react';
import style from './AnalogClock.module.css'

type AnalogClockPropsType = {
    data: Date
}

export const AnalogClock = ({data}: AnalogClockPropsType) => {

    const secondsStyle = {
        transform: `rotate(${data.getSeconds() * 6}deg)`
    }
    const minutesStyle = {
        transform: `rotate(${data.getMinutes() * 6}deg)`
    }
    const hoursStyle = {
        transform: `rotate(${data.getHours() * 30}deg)`
    }

    return (
        <div className={style.clock}>
            <div className={style.analogClock}>
                <div className={`${style.dial} ${style.seconds}`} style={secondsStyle}/>
                <div className={`${style.dial} ${style.minutes}`} style={minutesStyle}/>
                <div className={`${style.dial} ${style.hours}`} style={hoursStyle}/>
            </div>
        </div>
    );
};


<div className={"analog-clock"}>
    <div className={"dial seconds"}/>
    <div className={"dial minutes"}/>
    <div className={"dial hours"}/>
</div>