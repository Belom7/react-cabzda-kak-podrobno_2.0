import React from "react";
import {AccordionBody} from "./AccordionBody/AccordionBody";
import {AccordionTitle} from "./AccordionTitle/AccordionTitle";

type AccordionPropsType = {
    titleValue:string
    collapsed:boolean
}

export const Accordion = (props:AccordionPropsType) => {
    if(props.collapsed===false){
        return (
            <div>
                <AccordionBody title={props.titleValue}/>
                <AccordionTitle/>
            </div>
        )
    }else{
        return (
            <div>
                <AccordionBody title={props.titleValue}/>
            </div>
        )
    }

}