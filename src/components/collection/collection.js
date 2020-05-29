import React ,{useEffect,useState}from 'react';

import './collection.scss';
import { apicity } from '../../api/api'



const Collection =(props)=>{

const {id,city,imageUrl,} =props
const [viewWeather, setviewWeather] = useState([]);
useEffect(() => {    
        apicity(city).then(
             data=> setviewWeather({                                  
                 temperature:data.main.temp,
                 humidity: data.main.humidity,
                 desc: data.weather[0].description
             })
         )                  
 }, []);      
    
 const renderGraphic =() => {
     const descLower=viewWeather.desc
     
    switch (descLower) {
      case "broken clouds":
         return(<div class="card__description--icon icon sun-shower drizzle"> <div class="cloud"></div> <div class="sun"> <div class="rays"></div> </div> <div class="rain"></div> </div>);
        break;
      case "broken clouds":
        return(<div className="card__description--icon icon cloudy clouds"> <div className="cloud"></div> <div className="cloud"></div> </div>);
        break;
      case "light rain":
        return(<div class="card__description--icon icon rainy"><div class="cloud"></div> <div class="rain"></div></div>);
        break;
      case "snow":
        return(<div className="card__description--icon icon flurries snow"> <div className="cloud"></div> <div className="snow"> <div className="flake"></div> <div class="flake"></div> </div> </div>);
        break;
      case "clear":
        return(<div class="card__description--icon icon sunny clear"> <div class="sun"> <div class="rays"></div> </div> </div>);
        break;
      case "thunderstorm":
        return(<div class="card__description--icon icon thunder-storm thunderstorm" > <div class="cloud"></div> <div class="lightning"> <div class="bolt"></div> <div class="bolt"></div> </div> </div>);
        break;
      default:
        return(<div className="card__description--icon icon cloudy clouds"> <div className="cloud"></div> <div className="cloud"></div> </div>);
    }
  };

 const temperaturechange =()=>{

 }


    return (
                <div className="collection-item"> 
                    <div className="image"
                        style={{
                            backgroundImage:`url(${imageUrl})`
                        }}
                    >          
                <div className="collection-footer">
                    <h1 className='city'>{city}</h1>       
                    <div className="weather_icon">{renderGraphic()}</div>
                    <h3 className='temperature' onClick={temperaturechange}>{viewWeather.temperature}</h3>                    
                    </div>               
                    </div>
                  
                </div>
            )
        }

export default Collection