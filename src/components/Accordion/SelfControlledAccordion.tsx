import React, {useState} from "react";
import {AccordionTitle} from "./AccordionTitle/AccordionTitle";
import {SelfControlledAccordionBody} from "./AccordionBody/SelfControlledAccordionBody";
import { titleAccordion } from "../../App";

type SelfControlledAccordionPropsType = {
    titleValue:string
    titleAccordion:titleAccordion[]
}

export const SelfControlledAccordion = (props: SelfControlledAccordionPropsType) => {

    const[collapsed,setCollapsed] = useState(false)

    const collapsedMenu = (value:boolean) => {setCollapsed(value)}

    return (
        <div>
            <SelfControlledAccordionBody title={props.titleValue} callBack={collapsedMenu} collapsed={collapsed}/>
            {/*{collapsed && <AccordionTitle titleAccordion={props.titleAccordion}/>}*/}
        </div>
    )
}