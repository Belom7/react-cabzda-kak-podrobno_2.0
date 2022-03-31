import React from 'react';
import './App.css';

function App() {
    console.log('App rendering')
    return (
        <div>
            <AppTitle/>
            <Rating/>
            <Accordion/>
        </div>
    );
}

export default App;

const Rating = () => {
    console.log('Rating rendering')
    return (
        <div>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </div>
    )
}

const Accordion = () => {
    console.log('Accordion rendering')
    return (
        <div>
            <AccordionBody/>
            <AccordionTitle/>
        </div>
    )
}

const Star = () => {
    console.log('Star rendering')
    return (
        <div>
            Star
        </div>
    )
}

const AccordionBody = () => {
    console.log('AccordionBody rendering')
    return (
        <h3>Menu</h3>
    )
}

const AccordionTitle = () => {
    console.log('AccordionTitle rendering')
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}

const AppTitle = () => {
    console.log('AppTitle rendering')
    return (
        <>This is App component</>
    )
}