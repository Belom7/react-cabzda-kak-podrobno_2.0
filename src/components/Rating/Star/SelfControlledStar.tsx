import React from "react";

type SelfControlledStarPropsType = {
    selected: boolean
    callBack: (value: number) => void
    numberStar: number
}

export const SelfControlledStar = (props: SelfControlledStarPropsType) => {

    const onClickHandler = (value: number) => props.callBack(value)

    return <span onClick={() => {
        onClickHandler(props.numberStar)
    }}>{props.selected ? <b>star </b> : 'star '}</span>
}