import React from "react";
import "./Synonyms.css";

export default function Synonyms(props){
    if(props.synonyms){
        return (
          <div className="Synonyms d-flex justify-content-center m-2 p-2">
            {props.synonyms.map(function(synonym,index){
                return <li key={index}>{synonym}</li>;
            })}
          </div>  
        );
    }else {
        return null;
    }
    
}