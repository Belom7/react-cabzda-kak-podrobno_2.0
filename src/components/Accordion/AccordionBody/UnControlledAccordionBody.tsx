import React from "react";

type AccordionBodyPropsType = {
    title:string
}

export const UnControlledAccordionBody = (props:AccordionBodyPropsType) => {
    return (
        <h3>{props.title}</h3>
    )
}