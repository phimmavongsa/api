import React, { useState,useEffect }  from 'react';
import axios from 'axios'
import './coverpage.css';

const port = 8000;

const Coverpage = (props) => {
    const [Cover, setCover] = useState({});

    useEffect(() => {
        const get_Coverpage = async () => {
            let result =await axios.get(`http://localhost:${port}/api/cover_pages`);
            setCover(result.data);
        }
        get_Coverpage();
    }, [props]);
    console.log('Cover P :',Cover)



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

export default Coverpage;