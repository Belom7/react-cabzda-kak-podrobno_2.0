import React from "react";
import {ratingValueType} from "../../../App";

type StarPropsType = {
    selected: boolean
    callBack:(value:ratingValueType)=>void
    valueStar:ratingValueType
}

export const UnControlledStar = (props: StarPropsType) => {

    return <span onClick={()=>props.callBack(props.valueStar)}>{props.selected? <b>star </b>: 'star '}</span>
}