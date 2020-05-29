
import React ,{useState,useEffect} from 'react';
import './preview_collection.scss';
import Collection from '../collection/collection'
import { apicity } from '../../api/api'


const CollectionPreview =({title,items})=>{    
    
      
return (   <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
             {
                 items.filter((item,index)=>index<4).map(({id,viewWeather,...otherItemProps})=>{

                     return <Collection key={id} viewWeather={viewWeather} {...otherItemProps}/>
                 })
             }
        </div>
    </div>
)
}

export default CollectionPreview