import React from "react";

type AccordionBodyPropsType = {
    title:string
    collapsed:boolean
    callBack:(collapsed:boolean)=>void
}

export const UnControlledAccordionBody = (props:AccordionBodyPropsType) => {
    return (
        <h3 onClick={()=>props.callBack(!props.collapsed)}>{props.title}</h3>
    )
}