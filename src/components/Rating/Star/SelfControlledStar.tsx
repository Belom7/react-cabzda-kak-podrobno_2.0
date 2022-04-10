import React from "react";

type SelfControlledStarPropsType = {
    selected: boolean
    callBack: () => void
}

export const SelfControlledStar = (props: SelfControlledStarPropsType) => {

    const onClickHandler = () => props.callBack()

    return <span onClick={onClickHandler}>{props.selected ? <b>star </b> : 'star '}</span>
}