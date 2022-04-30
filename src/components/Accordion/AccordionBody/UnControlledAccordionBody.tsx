import React from "react";
import {ActionType, TOGGLE_COLLAPSED} from "../../../App";

type AccordionBodyPropsType = {
    title:string
    collapsed:boolean
    // callBack:(collapsed:boolean)=>void
    callBack:(dispatch:ActionType)=>void
}

export const UnControlledAccordionBody = (props:AccordionBodyPropsType) => {
    return (
        <h3 onClick={()=>props.callBack({type:TOGGLE_COLLAPSED})}>{props.title}</h3>
    )
}