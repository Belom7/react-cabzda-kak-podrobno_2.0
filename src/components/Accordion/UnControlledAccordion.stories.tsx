import {UnControlledAccordion} from "./UnControlledAccordion";
import {useReducer, useState} from "react";
import {action} from "@storybook/addon-actions";
import {TOGGLE_COLLAPSED} from "../../App";


export default {
    title:'UnControlledAccordion stories',
    component: UnControlledAccordion
}

const callBack = action('accordion mode clicked')
const callBack2 = action('clicked id :')

const titleAccordion = [
    {id:1, name:'Maksim'},
    {id:2, name:'Egor'},
    {id:3, name:'Evgen'},
    {id:4, name:'Iliya'},
    {id:5, name:'Sasha'},
]

export type ActionType = {
    type: string
}
export type StateType = {
    collapsed:boolean
}

export const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type){
        case TOGGLE_COLLAPSED:
            return {...state, collapsed: !state.collapsed}
        default : return state
    }
}

export const Accordion1 = () => <UnControlledAccordion titleValue={'Menu 1'}
                                                       collapsed={true}
                                                       callBack={callBack}
                                                       callBack2={callBack2}
                                                       titleAccordion={titleAccordion}/>
export const Accordion2 = () => <UnControlledAccordion titleValue={'Menu 2'}
                                                       collapsed={false}
                                                       callBack={callBack}
                                                       callBack2={callBack2}
                                                       titleAccordion={titleAccordion}/>
export const Accordion3 = () => {
    // const [collapsed, setCollapsed] = useState(false)
    const [collapsed, dispatch] = useReducer(reducer, {collapsed:false})
    return <UnControlledAccordion titleValue={'Menu 3'}
                                  collapsed={collapsed.collapsed}
                                  // callBack={setCollapsed}
                                  callBack={dispatch}
                                  callBack2={callBack2}
                                  titleAccordion={titleAccordion}/>
}