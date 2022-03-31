import React from 'react';
import './App.css';
import {Rating} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";
import {AppTitle} from "./components/AppTitle/AppTitle";

function App() {
    return (
        <div>
            <AppTitle title={'This is App component'}/>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
            <Accordion name={'Menu1'}/>
            <Accordion name={'Menu2'}/>
        </div>
    );
}

export default App;



