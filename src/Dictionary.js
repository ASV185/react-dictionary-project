import React, {useState} from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary(){
    let [keyword, setKeyword] = useState("");

    function handleResponse(response) {
        console.log(response.data.meanings[0]);

    }

    function search(event){
        event.preventDefault();
        
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
        </div>
    );
}
