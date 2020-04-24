import React from 'react';
import './coverpage.css';

const coverpage = (props) => {
    return (
        <section className="hero" id="hero">
            <div class="background-image" ></div>
            <h1>Responsive Flexbox Template</h1>
            <p>Hello I am <span id="typing" class="typing"></span></p>
            <h3>A freebie by Tutorialzine</h3>
            <a href="#hero" classname="btn">Click Here</a>  
        </section>
    )
}

export default coverpage;