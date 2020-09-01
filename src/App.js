import React,{ useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [data, setData] = useState([])
  const [year, setYear] = useState("")
  const [launch, setLaunch] = useState("")

  useEffect(() => {
    axios.get(`https://api.spacexdata.com/v3/launches?limit=100&launch_success=${launch}&land_success=true&launch_year=${year}`)
     .then(response => {
       setData(response.data)
     })
     .catch(error =>{
       console.log(error);
     })
  }, [year,launch])
  
  const buttonHandler = (e) =>{
     setYear(e.target.value)
  }
  const handleButton = (e) => {
    setLaunch(e.target.value)
  }
  return (
    <div>
      <h2 id="title">SpaceX Launch Programs</h2>
      <div className="app">
      <div className="buttons">
        <h3>Filters</h3>
        <p>Launch Year</p>
         <button value='2006' onClick={buttonHandler}>2006</button>
         <button value='2007' onClick={buttonHandler}>2007</button>
         <button value='2008' onClick={buttonHandler}>2008</button>
         <button value='2009' onClick={buttonHandler}>2009</button>
         <button value='2010' onClick={buttonHandler}>2010</button>
         <button value='2011' onClick={buttonHandler}>2011</button>
         <button value='2012' onClick={buttonHandler}>2012</button>
         <button value='2013' onClick={buttonHandler}>2013</button>
         <button value='2014' onClick={buttonHandler}>2014</button>
         <button value='2015' onClick={buttonHandler}>2015</button>
         <button value='2016' onClick={buttonHandler}>2016</button>
         <button value='2017' onClick={buttonHandler}>2017</button>
         <button value='2018' onClick={buttonHandler}>2018</button>
         <button value='2019' onClick={buttonHandler}>2019</button>
         <button value='2020' onClick={buttonHandler}>2020</button>
        <p>Successful Launch</p>
        <button value="true" onClick={handleButton}>True</button>
        <button value="false" onClick={handleButton}>False</button>
      </div>
      <div id="program">
          {
           data.map (data => (
          <div key= {data.flight_number}
           className="data">
           <img
           width="200"
           alt={data.mission_name}
           src={data.links.mission_patch}
           />
         <h3>{data.mission_name}</h3>
         <p>Mission Id: <span>{data.mission_id}</span></p>
         <p>Launch Year: <span>{data.launch_year}</span></p>
         <p>Successful Launch: <span>{data.launch_success.toString()}</span></p>
         <p>Successful Landing: <span>{data.launch_landing}</span></p>
        </div>
        ))
      }
      </div>
      </div>
    </div>
  ); 
}
export default App;