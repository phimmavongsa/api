import React, { useState,useEffect }  from 'react';
import { Zoom } from 'react-slideshow-image';
import { useSelector } from 'react-redux';
import axios from 'axios'
import './coverpage.css';

const port = 8000;

const Coverpage = (props) => {
    
    const session = useSelector(state => state.session);
    const [Cover, setCover] = useState({});
    const [Typing, setTyping] = useState('');
    let list = [];

    useEffect(() => {
        let typeString = ["Developer","Entrepreneur","Idol","Singer","Student","Employer"];
        let i = 0;
        let count = 0;
        let selectedText = '';
        let text = '';
        const get_Coverpage = async () => {
            let result =await axios.get(`http://localhost:${port}/api/cover_pages`);
            setCover(result.data);
        }
        const type = () => {
            if(count === typeString.length){
                count = 0;
            }
            selectedText = typeString[count];
            text = selectedText.slice(0, ++i);
            setTyping(text)
            if(text.length === selectedText.length) {
                count++;
                i = 0;
            }
            setTimeout(type,500);
        }
        get_Coverpage();
        type();
    }, [props]);


    const zoomInProperties = {
        duration: 5000,
        transitionDuration: 500,
        indicators: true,
        scale: 1.4,
        pauseOnHover: true,
        arrows:false

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


    return (


        <section className="hero" id="hero">
            <div className="slide-container ">
                <Zoom {...zoomInProperties}>
                    {list.map((each, index) => (
                        <img key={index} style={{ width: '100%',height:'100vh' }} src={each} alt='cover IMG'  />  
                    ))}
                    
                </Zoom>
                
            </div>
            <h1>Today, Have A Good Day</h1>
            <h3>Hello {session.authenticated? session.user.username:'Guest'}</h3>
            <p>Your are <span id="typing" className="typing">{Typing}</span></p>
            <a href="/" className="btn">Click Here</a> 
        </section>

    )
}

export default Coverpage;