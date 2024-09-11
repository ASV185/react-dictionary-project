import React, {useState} from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary(){
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);

    function handleResponse(response) {
        setResults(response.data);
    }

    function search(event){
        event.preventDefault();
        //documentation:https://www.shecodes.io/learn/apis/dictionary
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=6a8co22f6f92bdd5a654001ta38ff409`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleKeywordChange(event){
        setKeyword(event.target.value);
    }

    return(
        <div className="Dictionary text-center">
            <form onSubmit={search}>
                <input type="search" onChange={handleKeywordChange}/>
            </form>
            <Results results={results}/>
        </div>
    );
}
