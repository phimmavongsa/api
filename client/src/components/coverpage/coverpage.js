import React from 'react';
import './coverpage.css';

const coverpage = (props) => {
    return (
        <section className="hero" id="hero">
            <div className="background-image" ></div>
            <h1>Responsive Flexbox Template</h1>
            <p>Hello I am <span id="typing" className="typing"></span></p>
            <h3>A freebie by Tutorialzine</h3>
            <a href="#hero" className="btn">Click Here</a>  
        </section>
    )
}

export default coverpage;