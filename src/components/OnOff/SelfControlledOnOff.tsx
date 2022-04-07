import React, {useState} from 'react';

export const SelfControlledOnOff = () => {

    const [value, setValue] = useState(false)

    const onClickHandler = (valueButton:boolean) => {setValue(valueButton)}

    const onStyle = {
        width: '40px',
        height: '20px',
        border: 'black 1px solid',
        backgroundColor: value ? 'green' : 'white',
        marginLeft: '5px',
        display: 'inline-block'
    }
    const offStyle = {
        width: '40px',
        height: '20px',
        border: 'black 1px solid',
        backgroundColor: !value ? 'red' : 'white',
        marginLeft: '5px',
        display: 'inline-block'
    }
    const indicationStyle = {
        width: '10px',
        height: '10px',
        border: 'black 1px solid',
        marginLeft: '5px',
        borderRadius: '50%',
        display: 'inline-block',
        backgroundColor: value ? 'green' : 'red',
    }

    return (
        <div>
            <div style={onStyle} onClick={()=>onClickHandler(true)}>On</div>
            <div style={offStyle} onClick={()=>onClickHandler(false)}>Off</div>
            <div style={indicationStyle}></div>
        </div>
    );
};
