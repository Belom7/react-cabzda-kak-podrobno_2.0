import React from 'react';
import './App.css';
import {UnControlledRating} from "./components/Rating/UnControlledRating";
import {UnControlledAccordion} from "./components/Accordion/UnControlledAccordion";
import {AppTitle} from "./components/AppTitle/AppTitle";
import {UnControlledOnOff} from "./components/OnOff/UnControlledOnOff";
import {SelfControlledOnOff} from "./components/OnOff/SelfControlledOnOff";
import {SelfControlledAccordion} from "./components/Accordion/SelfControlledAccordion";
import {SelfControlledRating} from "./components/Rating/SelfControlledRating";

function App() {
    return (
        <div>
            <AppTitle title={'This is App component'}/>

            <AppTitle title={'UnControlledComponents'}/>

            <UnControlledRating value={0}/>
            <UnControlledRating value={1}/>
            <UnControlledRating value={2}/>
            <UnControlledRating value={3}/>
            <UnControlledRating value={4}/>
            <UnControlledRating value={5}/>

            <UnControlledAccordion collapsed={true} titleValue={'Menu1'}/>
            <UnControlledAccordion collapsed={false} titleValue={'Menu2'}/>

            <UnControlledOnOff value={true}/>
            <UnControlledOnOff value={false}/>

            <AppTitle title={'SelfControlledComponents'}/>

            <SelfControlledRating/>
            <SelfControlledRating/>
            <SelfControlledRating/>

            <SelfControlledAccordion titleValue={'Menu1'}/>
            <SelfControlledAccordion titleValue={'Menu2'}/>

            <SelfControlledOnOff/>
            <SelfControlledOnOff/>
            <SelfControlledOnOff/>
        </div>
    );
}

export default App;



