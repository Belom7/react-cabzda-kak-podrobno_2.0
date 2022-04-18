import {ChangeEvent, useRef, useState} from "react";

export default {
    title: 'input stories',

}

export const UnControlledInput = () => <input/>
export const TrackValueOfUnControlledInput = () => {
    const [value, setValue] = useState<string>('')
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value)
    return <><input onChange={onChangeHandler}/> - {value}</>
}
export const GetValueOfUnControlledInputByButtonPress = () => {
    const [value, setValue] = useState<string>('')
    const inputRef = useRef<HTMLInputElement>(null)

    const onClickHandler = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }

    return <> <input ref={inputRef}/>
        <button onClick={onClickHandler}>save</button>
        actual value: {value}</>
}


export const SelfControlledInput = () => <input value={'Pup'}/>
export const TrackValueOfSelfControlledInput = () => {
    const [value, setValue] = useState('')
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    return <><input value={value} onChange={onChangeHandler}/> - {value}</>
}
export const TrackValueOfSelfControlledCheckBox = () => {
    const [value, setValue] = useState(false)
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.checked)
    }

    return <><input type={"checkbox"} checked={value} onChange={onChangeHandler}/> - {`${value}`}</>
}
export const TrackValueOfSelfControlledSelect = () => {
    const [value, setValue] = useState<undefined|string>('')
    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setValue(e.currentTarget.value)
    }

    return <><select value={value} onChange={onChangeHandler}>
        <option>none</option>
        <option value={'1'}>Moscow</option>
        <option value={'2'}>Minsk</option>
        <option value={'3'}>Kiev</option>
    </select>
        -- {value}
    </>

}