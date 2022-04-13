import {UnControlledAccordion} from "./UnControlledAccordion";
import {useState} from "react";
import {action} from "@storybook/addon-actions";


export default {
    title:'UnControlledAccordion stories',
    component: UnControlledAccordion
}

const callBack = action('accordion mode clicked')

export const Accordion1 = () => <UnControlledAccordion titleValue={'Menu 1'} collapsed={true} callBack={callBack}/>
export const Accordion2 = () => <UnControlledAccordion titleValue={'Menu 2'} collapsed={false} callBack={callBack}/>
export const Accordion3 = () => {
    const [collapsed, setCollapsed] = useState(false)
    return <UnControlledAccordion titleValue={'Menu 3'} collapsed={collapsed} callBack={setCollapsed}/>
}