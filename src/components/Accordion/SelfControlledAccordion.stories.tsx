import {SelfControlledAccordion} from "./SelfControlledAccordion";

export default {
    title:'SelfControlledAccordion stories',
    component: SelfControlledAccordion
}

const titleAccordion = [
    {id:1, name:'Maksim'},
    {id:2, name:'Egor'},
    {id:3, name:'Evgen'},
    {id:4, name:'Iliya'},
    {id:5, name:'Sasha'},
]

export const Accordion = () => <SelfControlledAccordion titleValue={'Menu 1'} titleAccordion={titleAccordion}/>
