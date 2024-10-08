import React from "react";
import Meaning from "./Meaning";
import "./Results.css";

export default function Results(props){
    console.log(props.results);
    if(props.results){
    return <div className="Results mt-5 pb-3 bg-dark text-white">
            <h2>{props.results.word}</h2>
            <h4>/{props.results.phonetic}/</h4>
            {props.results.meanings.map(function(meaning, index){
                return (
                    <div key={index}>
                        <Meaning meaning ={meaning}/>
                    </div>
                );
            })}
            </div>;
    } else {
        return null;
    }
}