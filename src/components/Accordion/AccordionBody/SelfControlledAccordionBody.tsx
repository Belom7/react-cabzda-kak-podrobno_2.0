import React from "react";

type SelfControlledAccordionBodyPropsType = {
    title:string
    collapsed:boolean
    callBack:(value:boolean)=>void
}

export const SelfControlledAccordionBody = (props:SelfControlledAccordionBodyPropsType) => {
    return (
        <h3 onClick={()=>props.callBack(!props.collapsed)}>{props.title}</h3>
    )
}