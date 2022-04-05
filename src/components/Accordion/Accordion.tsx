import React from "react";
import {AccordionBody} from "./AccordionBody/AccordionBody";
import {AccordionTitle} from "./AccordionTitle/AccordionTitle";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
}

export const Accordion = (props: AccordionPropsType) => {
    return (
        <div>
            <AccordionBody title={props.titleValue}/>
            {props.collapsed && <AccordionTitle/>}
        </div>
    )


}