import React from 'react';

type DigitalClockPropsType = {
    data:Date
}

export const DigitalClock = ( {data}:DigitalClockPropsType) => {

    const twoCharacters = (title: number): string => title < 10 ? `0${title}` : title.toString() //если меньше 10 то добавляет 0 вперед

    return (
        <div>
            <span>{twoCharacters(data.getHours())}</span>
            <span>:{twoCharacters(data.getMinutes())}</span>
            <span>:{twoCharacters(data.getSeconds())}</span>
        </div>
    );
};
