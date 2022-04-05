import React from 'react';

type OnOffPropsType = {
    value: boolean
}

export const OnOff = (props: OnOffPropsType) => {

    const onStyle = {
        width:'40px',
        height:'20px',
        border:'black 1px solid',
        backgroundColor: props.value? 'green': 'white',
        marginLeft: '5px',
        display:'inline-block'
    }
    const offStyle = {
        width:'40px',
        height:'20px',
        border:'black 1px solid',
        backgroundColor: !props.value?'red' : 'white',
        marginLeft: '5px',
        display:'inline-block'
    }
    const indicationStyle = {
        width:'10px',
        height:'10px',
        border:'black 1px solid',
        marginLeft: '5px',
        borderRadius:'50%',
        display:'inline-block',
        backgroundColor: props.value?'green' : 'red',
    }


    return (
        <div>
            <div style={onStyle}>On</div>
            <div style={offStyle}>Off</div>
            <div style={indicationStyle}></div>
        </div>
    );
};
