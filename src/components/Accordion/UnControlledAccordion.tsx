import React from "react";
import {UnControlledAccordionBody} from "./AccordionBody/UnControlledAccordionBody";
import {AccordionTitle} from "./AccordionTitle/AccordionTitle";

type UnControlledAccordionPropsType = {
    titleValue: string
    collapsed: boolean
    callBack:(collapsed:boolean)=>void
}

export const UnControlledAccordion = (props: UnControlledAccordionPropsType) => {
    return (
        <div>
            <UnControlledAccordionBody title={props.titleValue} callBack={props.callBack} collapsed={props.collapsed}/>
            {props.collapsed && <AccordionTitle/>}
        </div>
    )


}