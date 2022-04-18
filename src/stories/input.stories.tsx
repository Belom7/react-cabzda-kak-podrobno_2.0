import {ChangeEvent, useRef, useState} from "react";

export default {
    title: 'input stories',

}

export const UnControlledInput = () => <input/>
export const TrackValueOfUnControlledInput = () => {
    const[value,setValue]=useState<string>('')
    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value)
    return <><input onChange={onChangeHandler}/> - {value}</>
}
export const GetValueOfUnControlledInputByButtonPress = () => {

    const[value,setValue]=useState<string>('')
    const inputRef = useRef<HTMLInputElement>(null)


    const onClickHandler = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)}

    return <> <input ref={inputRef}/> <button onClick={onClickHandler}>save</button>  actual value: {value}</>
}




export const SelfControlledInput = () => <input value={'Pup'}/>