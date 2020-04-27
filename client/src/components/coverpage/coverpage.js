import React, { useState,useEffect }  from 'react';
import { Zoom } from 'react-slideshow-image';
import axios from 'axios'
import './coverpage.css';

const port = 8000;

const Coverpage = (props) => {
    const [Cover, setCover] = useState({});
    let list = [];

    useEffect(() => {
        const get_Coverpage = async () => {
            let result =await axios.get(`http://localhost:${port}/api/cover_pages`);
            setCover(result.data);
        }
        get_Coverpage();
    }, [props]);
    // console.log('Cover P :',Cover)

    const zoomInProperties = {
        duration: 5000,
        transitionDuration: 500,
        indicators: true,
        scale: 1.4,
        pauseOnHover: true,
      };

      const printCover = () => {
          if(Cover && Cover.length){
              return Cover.map( (each, index) => {
                  return (
                    list.push(each.img)
                  )
              })
          }

      }
      printCover();
    //   const [fadeImages] = Cover.img;
      console.log('Cover P :',list)
    return (
        // <section className="hero" id="hero">
        //     <div className="background-image" ></div>
        //     <h1>Responsive Flexbox Template</h1>
            // <p>Hello I am <span id="typing" className="typing"></span></p>
            // <h3>A freebie by Tutorialzine</h3>
            // <a href="#hero" className="btn">Click Here</a>  
            
        // </section>

        <section className="hero" id="hero">
            <div className="slide-container ">
                <Zoom {...zoomInProperties}>
                    {list.map((each, index) => (
                        <img key={index} style={{ width: '100%',height:'100vh' }} src={each} alt='cover IMG'  />  
                    ))}
                    
                </Zoom>
                
            </div>
            <h1>Responsive Flexbox Template</h1>
            <p>Hello I am <span id="typing" className="typing"></span></p>
            <h3>A freebie by Tutorialzine</h3>
            <a href="#hero" className="btn">Click Here</a> 
        </section>

    )
}

export default Coverpage;