import React from "react";

type PropsAppTitleType = {
    title:string
}

export const AppTitle = (props:PropsAppTitleType) => {
    return (
        <>{props.title}</>
    )
}