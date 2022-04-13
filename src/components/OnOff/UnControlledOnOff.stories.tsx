import {UnControlledOnOff} from "./UnControlledOnOff";
import {useState} from "react";
import {action} from "@storybook/addon-actions";


export default {
    title:'UnControlledOnOff stories',
    component:UnControlledOnOff
}

const callBack = action('on or off clicked')

export const On = () => <UnControlledOnOff value={true} callBack={callBack}/>
export const Off = () => <UnControlledOnOff value={false} callBack={callBack}/>
export const OnOff = () => {
    const [value,setValue] = useState<boolean>(false)
    return <UnControlledOnOff value={value} callBack={setValue}/>
}