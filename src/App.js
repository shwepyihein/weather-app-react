import React ,{useState} from 'react';
import './App.css';
import From from './components/Form/Form'
import Weather from './components/weather/weather'
import {apicity} from './api/api'
import {Country_Data}  from './data/data'
import CollectionPreview from './components/collectionpreview/collectionpreview'


function App() {
  const [weather, setweather] = useState({});
  const [city, setCity] = useState('');  
  const [CityData, setCityData] = useState(Country_Data);



  const handlesubmit= (e)=> {         
      e.preventDefault()              
        const apidata= apicity(city)
        .then(data=> setweather({
          data: data,
          city: data.name,
          country: data.sys.country,
          description: data.weather[0].description,
          temperature: data.main.temp,
          error:""
        }))
        .catch(error=>  setweather({
              data: '',
              city: '',
              country: '',
              description: '',
              temperature: '',
              error:"Please Type A City"
          }))
    }    



  return (
    <div className="App">        
        <From handlesubmit={handlesubmit} handlechange={(e)=>{setCity(e.target.value)}}/>
        <Weather weather={weather}/>
        <div>
           {CityData.map(({id,...otherCollectionProps})=> <CollectionPreview  key={id} {...otherCollectionProps}/>)}
        </div>
    </div>
  );
}

export default App;
