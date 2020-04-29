import React from 'react';
import './Features.css';

const Features = () => {

    return (
        <section className="features" id="features">
            <h3 className="title">Features and services</h3>
        
            <ul className="grid">
                <li>
                    <i className="fa fa-newspaper-o"></i>
                    <h4>Blog Interesting</h4>
                    <p>A blog is a discussion or informational website published on the World Wide Web consisting of discrete, often informal diary-style text entries (posts). Posts are typically displayed in reverse chronological order, so that the most recent post appears first, at the top of the web page.</p>
                </li>
                <li>
                    <i className="fa fa-cubes"></i>
                    <h4>React</h4>
                    <p>React has been designed from the start for gradual adoption, and you can use as little or as much React as you need. Whether you want to get a taste of React, add some interactivity to a simple HTML page, or start a complex React-powered app, the links in this section will help you get started.</p>
                </li>
                <li>
                    <i className="fa fa-hospital-o"></i>
                    <h4>Covid-19</h4>
                    <p>Currently, the coronavirus disease 2019 (COVID-19) outbreak has spread across the world and the World Health Organization (WHO) has characterized COVID-19 as a pandemic (WHO declared COVID-19 a pandemic on 11 March 2020). People and outbound travelers are recommended to closely monitor the situation. Moreover, the public must fully cooperate and act as the Ministry of Public Health (MoPH) recommends for your safety and for others, and to decrease negative social and economic impacts. The Disease Infected Zones were determined to include the People’s Republic of China (including Special Administrative Regions Macau and Hong Kong), South Korea, Iran and Italy.</p>
                </li>
            </ul>
        </section>

    )
}

export default Features;