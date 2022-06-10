import React, {useEffect, useState} from 'react';

type ClockPropsType = {}



export const Clock = ({}: ClockPropsType) => {

    const [data, setData] = useState(new Date())

    const twoCharacters = (title:number):string =>title < 10 ? `0${title}` : title.toString()

    useEffect(()=>{

        const intervalId = setInterval(()=>{
            console.log('tik-tak')
            setData(new Date())
        },1000)

        return () => clearInterval(intervalId)

    },[])



    const hours = twoCharacters(data.getHours())
    const minutes = twoCharacters(data.getMinutes())
    const seconds = twoCharacters(data.getSeconds())

    return (
        <div>
            <span>{twoCharacters(data.getHours())}</span>
            <span>:{twoCharacters(data.getMinutes())}</span>
            <span>:{twoCharacters(data.getSeconds())}</span>
        </div>
    );
};
