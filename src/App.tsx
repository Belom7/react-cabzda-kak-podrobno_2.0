import React, {useState} from 'react';
import './App.css';
import {UnControlledRating} from "./components/Rating/UnControlledRating";
import {UnControlledAccordion} from "./components/Accordion/UnControlledAccordion";
import {AppTitle} from "./components/AppTitle/AppTitle";
import {UnControlledOnOff} from "./components/OnOff/UnControlledOnOff";
import {SelfControlledOnOff} from "./components/OnOff/SelfControlledOnOff";
import {SelfControlledAccordion} from "./components/Accordion/SelfControlledAccordion";
import {SelfControlledRating} from "./components/Rating/SelfControlledRating";
import {action} from "@storybook/addon-actions";
import {CastomSelect} from "./components/CastomSelect/CastomSelect";

export type ratingValueType = 0 | 1 | 2 | 3 | 4 | 5
export type titleAccordion = {id:number, name:string}

function App() {

    const titleAccordion = [
        {id:1, name:'Maksim'},
        {id:2, name:'Egor'},
        {id:3, name:'Evgen'},
        {id:4, name:'Iliya'},
        {id:5, name:'Sasha'},
    ]

    const [ratingValue, setRatingValue] = useState<ratingValueType>(0)
    const [collapsedAccordion, setCollapsedAccordion] = useState<boolean>(false)
    const [valueOnOff, setValueOnOff] = useState<boolean>(false)

    const callBack2 = action('clicked')

    return (
        <div>
            <AppTitle title={'This is App component'}/>

            <AppTitle title={'UnControlledComponents'}/>

            <UnControlledRating rating={ratingValue} callBack={setRatingValue}/>
            {/*<UnControlledRating value={1}/>*/}
            {/*<UnControlledRating value={2}/>*/}
            {/*<UnControlledRating value={3}/>*/}
            {/*<UnControlledRating value={4}/>*/}
            {/*<UnControlledRating value={5}/>*/}

            <UnControlledAccordion collapsed={collapsedAccordion}
                                   titleValue={'Menu1'}
                                   callBack={setCollapsedAccordion}
                                   titleAccordion={titleAccordion}
                                   callBack2={callBack2}
            />
            {/*<UnControlledAccordion collapsed={collapsedAccordion} titleValue={'Menu2'} callBack={setCollapsedAccordion}/>*/}

            <UnControlledOnOff value={valueOnOff} callBack={setValueOnOff}/>
            {/*<UnControlledOnOff value={false}/>*/}

            <AppTitle title={'SelfControlledComponents'}/>

            <SelfControlledRating/>
            <SelfControlledRating/>
            <SelfControlledRating/>

            <SelfControlledAccordion titleValue={'Menu1'} titleAccordion={titleAccordion}/>
            <SelfControlledAccordion titleValue={'Menu2'} titleAccordion={titleAccordion}/>

            <SelfControlledOnOff/>
            {/*<SelfControlledOnOff/>*/}
            {/*<SelfControlledOnOff/>*/}

            <CastomSelect/>
        </div>
    );
}

export default App;



