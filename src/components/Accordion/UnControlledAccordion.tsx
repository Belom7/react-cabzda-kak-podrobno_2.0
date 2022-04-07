import React from "react";
import {UnControlledAccordionBody} from "./AccordionBody/UnControlledAccordionBody";
import {AccordionTitle} from "./AccordionTitle/AccordionTitle";

type UnControlledAccordionPropsType = {
    titleValue: string
    collapsed: boolean
}

export const UnControlledAccordion = (props: UnControlledAccordionPropsType) => {
    return (
        <div>
            <UnControlledAccordionBody title={props.titleValue}/>
            {props.collapsed && <AccordionTitle/>}
        </div>
    )


}