import {Clock} from "./Clock";

export default {
    title: 'Clock',
    component: Clock
}

export const BaseAnalogExample = () => {
    return <Clock mode={'Analog'}/>
}

export const BaseDigitalExample = () => {
    return <Clock mode={'Digital'}/>
}