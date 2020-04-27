import React, { useState,useEffect } from 'react';
import Navbar from '../header/Header';
import axios from 'axios';
import './corona.css'


const Corona = (props) => {

    const [WorldStat, setWorldStat] = useState({});
    const [CasesByCountry, setCasesByCountry] = useState([]);

    useEffect(() => {
        const WorldStat_Data = async () => {
            await axios({
            "method":"GET",
            "url":"https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php",
            "headers":{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"coronavirus-monitor.p.rapidapi.com",
            "x-rapidapi-key":"56cf0ef69amshb9e5cc1ebc4c3ddp17e6d0jsn72eb4f2a92ce"
            }
            })
            .then((response)=>{
                setWorldStat(response.data)
              })
            .catch((error)=>{
              console.log(error)
            })
        }
        const Cases_Country = async () => {
            axios({
                "method":"GET",
                "url":"https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php",
                "headers":{
                "content-type":"application/octet-stream",
                "x-rapidapi-host":"coronavirus-monitor.p.rapidapi.com",
                "x-rapidapi-key":"56cf0ef69amshb9e5cc1ebc4c3ddp17e6d0jsn72eb4f2a92ce"
                }
                })
                .then((response)=>{
                  setCasesByCountry(response.data.countries_stat)
                })
                .catch((error)=>{
                  console.log(error)
                })
        }
        WorldStat_Data();
        Cases_Country();

        // eslint-disable-next-line
      }, [props])

      const printCasesByCountry = () =>{
          if(CasesByCountry && CasesByCountry.length ){
            //   const {country_name,cases,new_cases,deaths,new_deaths,serious_critical,total_recovered,total_tests} = Cases;
              return CasesByCountry.map( (cases,index) => {
                  if( index !== 0 && cases.country_name !== "Thailand"){
                    return (
                        <tr key={index} >
                            <td>{cases.country_name}</td>
                            <td>{cases.cases}</td>
                            <td>{cases.new_cases}</td>
                            <td>{cases.deaths}</td>
                            <td>{cases.new_deaths}</td>
                            <td>{cases.serious_critical}</td>
                            <td>{cases.total_recovered}</td>
                        </tr>
                      )
                  } else if (cases.country_name === "Thailand" ){
                    return (
                        <tr key={index} style={{backgroundColor: "lightblue"}}  >
                            <td>{cases.country_name}</td>
                            <td>{cases.cases}</td>
                            <td>{cases.new_cases}</td>
                            <td>{cases.deaths}</td>
                            <td>{cases.new_deaths}</td>
                            <td>{cases.serious_critical}</td>
                            <td>{cases.total_recovered}</td>
                        </tr>
                    )
                  }
              })
          } 
      }


        // console.log('Cases:',Cases)
        // const {total_cases,total_deaths,total_recovered,new_cases,new_deaths} = WorldStat;
        // const {country_name,cases,new_cases,deaths,new_deaths,serious_critical,total_recovered,total_tests} = Cases;
    return (
        <div className="wrapper">
            <Navbar />
        <div className="statistic">
            <div className="total_case_box">
                <h2>
                    <i className="fa fa-address-book" aria-hidden="true"></i>
                    Total Cases
                </h2>
                <p style={{fontSize: 3 +'rem'}} id="total_cases">{WorldStat.total_cases}</p>
            </div>

            <div className="box_wrapper">
                <div className="box">
                    <h2>
                        <i className="fa fa-user-times" aria-hidden="true"></i>
                        Total Death
                    </h2>
                    <p style={{fontSize:1.5+'rem'}} id="total_death">{WorldStat.total_deaths}</p>
                </div>
                <div className="box">
                    <h2>
                        <i className="fa fa-refresh" aria-hidden="true"></i>
                        Total Recovery
                    </h2>
                    <p style={{fontSize:1.5+'rem'}} id="total_recovered">{WorldStat.total_recovered}</p>
                </div>
                <div className="box">
                    <h2>
                        <i className="fa fa-plus-circle" aria-hidden="true"></i>
                        New Case
                    </h2>
                    <p style={{fontSize:1.5+'rem'}} id="new_case">{WorldStat.new_cases}</p>
                </div>
                <div className="box">
                    <h2>
                        <i className="fa fa-user-circle-o" aria-hidden="true"></i>
                        New Death
                    </h2>
                    <p style={{fontSize:1.5+'rem'}} id="new_death">{WorldStat.new_deaths}</p>
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
            {printCasesByCountry()}
            </tbody>
        </table>
    </div>
    )
};

export default Corona;