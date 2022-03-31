import React from "react";

type PropsAccordionBodyType = {
    name:string
}

export const AccordionBody = (props:PropsAccordionBodyType) => {
    return (
        <h3>{props.name}</h3>
    )
}