import React, {useState} from 'react';

const Phones = [
    {id: 1, namePhone: 'Iphone'},
    {id: 2, namePhone: 'Nokia'},
    {id: 3, namePhone: 'Motorola'},
    {id: 4, namePhone: 'Simens'},
    {id: 5, namePhone: 'Poco'},
]

export const CastomSelect = () => {
    const [name, setName] = useState('Menu')
    const [focus, setFocus] = useState(false)

    const onFocusHandler = () => {
        setFocus(true)
    }
    const onClickHandler = (name: string) => {
        setName(name)
        setFocus(false)
    }

    return (
        <div>
            <div onClick={onFocusHandler}>{name}</div>
            <ol>
                {focus && Phones.map(el => <li key={el.id}
                                               onClick={() => onClickHandler(el.namePhone)}>{el.namePhone}</li>)}
            </ol>
        </div>
    );
};
