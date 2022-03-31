import React from "react";
import {AccordionBody} from "./AccordionBody/AccordionBody";
import {AccordionTitle} from "./AccordionTitle/AccordionTitle";

type PropsAccordionType = {
    name:string
}

export const Accordion = (props:PropsAccordionType) => {
    return (
        <div>
            <AccordionBody name={props.name}/>
            <AccordionTitle/>
        </div>
    )
}