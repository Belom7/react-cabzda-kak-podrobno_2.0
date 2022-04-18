import React from 'react';

type UnControlledOnOffPropsType = {
    value: boolean
    callBack: (value:boolean)=>void
}

export const UnControlledOnOff = (props: UnControlledOnOffPropsType) => {

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
            <div style={onStyle} onClick={()=>props.callBack(true)}>On</div>
            <div style={offStyle} onClick={()=>props.callBack(false)}>Off</div>
            <div style={indicationStyle}></div>
        </div>
    );
};
