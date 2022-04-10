import React from "react";
import {UnControlledStar} from "./Star/UnControlledStar";
import {ratingValueType} from "../../App";

type UnControlledRatingPropsType = {
    rating: ratingValueType
    callBack:(value:ratingValueType)=>void
}

export const UnControlledRating = (props: UnControlledRatingPropsType) => {
    return (
        <div>
            <UnControlledStar selected={props.rating > 0} callBack={props.callBack} valueStar={1}/>
            <UnControlledStar selected={props.rating > 1} callBack={props.callBack} valueStar={2}/>
            <UnControlledStar selected={props.rating > 2} callBack={props.callBack} valueStar={3}/>
            <UnControlledStar selected={props.rating > 3} callBack={props.callBack} valueStar={4}/>
            <UnControlledStar selected={props.rating > 4} callBack={props.callBack} valueStar={5}/>
        </div>
    )
}