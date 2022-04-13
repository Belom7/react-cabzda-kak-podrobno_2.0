import {UnControlledRating} from "./UnControlledRating";
import React, {useState} from "react";
import {ratingValueType} from "../../App";


export default {
    title: 'UnControlledRating stories',
    component: UnControlledRating
}

export const Rating0 = () => <UnControlledRating rating={0} callBack={x=>x}/>
export const Rating1 = () => <UnControlledRating rating={1} callBack={x=>x}/>
export const Rating2 = () => <UnControlledRating rating={2} callBack={x=>x}/>
export const Rating3 = () => <UnControlledRating rating={3} callBack={x=>x}/>
export const Rating4 = () => <UnControlledRating rating={4} callBack={x=>x}/>
export const Rating5 = () => <UnControlledRating rating={5} callBack={x=>x}/>
export const RatingChange = () => {
    const [rating, setRating] = useState<ratingValueType>(0)
    return <UnControlledRating rating={rating} callBack={setRating}/>
}
