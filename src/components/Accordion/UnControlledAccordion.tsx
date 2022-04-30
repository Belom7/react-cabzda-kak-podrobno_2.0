import React from "react";
import {UnControlledAccordionBody} from "./AccordionBody/UnControlledAccordionBody";
import {AccordionTitle} from "./AccordionTitle/AccordionTitle";
import {ActionType, titleAccordion} from "../../App";

type UnControlledAccordionPropsType = {
    titleValue: string
    collapsed: boolean
    // callBack: (collapsed: boolean) => void
    callBack: (dispatch:ActionType) => void
    titleAccordion: titleAccordion[]
    callBack2: (value: number) => void
}

export const UnControlledAccordion = (props: UnControlledAccordionPropsType) => {
    return (
        <div>
            <UnControlledAccordionBody title={props.titleValue} callBack={props.callBack} collapsed={props.collapsed}/>
            {props.collapsed && <AccordionTitle titleAccordion={props.titleAccordion} callBack2={props.callBack2}/>}
        </div>
    )


}