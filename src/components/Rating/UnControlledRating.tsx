import React from "react";
import {UnControlledStar} from "./Star/UnControlledStar";

type UnControlledRatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}

export const UnControlledRating = (props: UnControlledRatingPropsType) => {
    return (
        <div>
            <UnControlledStar selected={props.value > 0}/>
            <UnControlledStar selected={props.value > 1}/>
            <UnControlledStar selected={props.value > 2}/>
            <UnControlledStar selected={props.value > 3}/>
            <UnControlledStar selected={props.value > 4}/>
        </div>
    )
}