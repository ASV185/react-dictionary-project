import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props){
        return (
            <div className="Meaning">
                <h3>{props.meaning.partOfSpeech}</h3>
                <p><strong>Definition: </strong>{props.meaning.definition[0]}.</p>
                <p><strong>Ex: </strong><em>{props.meaning.example}</em></p>
                <Synonyms synonyms = {props.meaning.synonyms}/>
            </div>
      );
}