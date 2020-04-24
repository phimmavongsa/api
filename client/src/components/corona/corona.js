import React, { useState } from 'react';
import axios from 'axios';
import './corona.css'


const corona = () => {

    // const [worldstat, setWorldstat] = useState([]);

    // console.log(worldstat)

     const corona_data = axios({
        "method":"GET",
        "url":"https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php",
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"coronavirus-monitor.p.rapidapi.com",
        "x-rapidapi-key":"56cf0ef69amshb9e5cc1ebc4c3ddp17e6d0jsn72eb4f2a92ce"
        }
        })
        .then((response)=>{
            console.log(response.data)
            // setWorldstat(response.data)
          })
        .catch((error)=>{
          console.log(error)
        })

        console.log(corona_data)

    return (
        <div className="wrapper">
        <div className="statistic">
            <div className="total_case_box">
                <h2>
                    <i className="fa fa-address-book" aria-hidden="true"></i>
                    Total Cases
                </h2>
                <p style={{fontSize: 3 +'rem'}} id="total_cases">test</p>
            </div>

            <div className="box_wrapper">
                <div className="box">
                    <h2>
                        <i className="fa fa-user-times" aria-hidden="true"></i>
                        Total Death
                    </h2>
                    <p style={{fontSize:1.5+'rem'}} id="total_death">test</p>
                </div>
                <div className="box">
                    <h2>
                        <i className="fa fa-refresh" aria-hidden="true"></i>
                        Total Recovery
                    </h2>
                    <p style={{fontSize:1.5+'rem'}} id="total_recovered">test</p>
                </div>
                <div className="box">
                    <h2>
                        <i className="fa fa-plus-circle" aria-hidden="true"></i>
                        New Case
                    </h2>
                    <p style={{fontSize:1.5+'rem'}} id="new_case">test</p>
                </div>
                <div className="box">
                    <h2>
                        <i className="fa fa-user-circle-o" aria-hidden="true"></i>
                        New Death
                    </h2>
                    <p style={{fontSize:1.5+'rem'}} id="new_death">test</p>
                </div>
            </div>
        </div>

        <table className="countries_stat" id="countries_stat">
            <tbody>
            <tr>
                <th>Country</th>
                <th>Case</th>
                <th>New Case</th>
                <th>Deaths</th>
                <th>New Deaths</th>
                <th>Serious Critical</th>
                <th>Total Recovered</th>
            </tr>
            </tbody>
        </table>
    </div>
    )
};

export default corona;