import React from "react";
import { titleAccordion } from "../../../App";

type AccordionTitlePropsType = {
    titleAccordion:titleAccordion[]
    callBack2:(value:number)=>void
}

export const AccordionTitle = (props:AccordionTitlePropsType) => {

    const onClickHandler = (value:number) => {props.callBack2(value)}

    return (
        <div>
            <ul>
                {props.titleAccordion.map(el=><li key={el.id} onClick={()=>onClickHandler(el.id)}>{el.name}</li>)}
            </ul>
        </div>
    )
}