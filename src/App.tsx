import React from 'react';
import './App.css';

function App() {
    return (
        <div>
            This is App component
            <Rating/>
            <Accordion/>
        </div>
    );
}

export default App;

const Rating = () => {
    return (
        <div>
            <div>Star</div>
            <div>Star</div>
            <div>Star</div>
            <div>Star</div>
        </div>
    )
}

const Accordion = () => {
    return(
        <div>
            <h3>Menu</h3>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}
