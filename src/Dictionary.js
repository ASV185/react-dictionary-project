import React, {useState} from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props){
    let [keyword, setKeyword] = useState("props.defaultKeyword");
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);

    function handleDictionaryResponse(response) {
        setResults(response.data[0]);
    }

    function handleImagesResponse(response){
        setPhotos(response.data.photos);
    }

    function search(){
        //documentation:https://www.shecodes.io/learn/apis/dictionary
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=6a8co22f6f92bdd5a654001ta38ff409`;
        axios.get(apiUrl).then(handleDictionaryResponse);

        let imageApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=6a8co22f6f92bdd5a654001ta38ff409&per_page=6`;
        axios.get(imageApiUrl).then(handleImagesResponse);

    }

    function handleSubmit(event){
        event.preventDefault();
        search();
    }

    function handleKeywordChange(event){
        setKeyword(event.target.value);
    }

    function load(){
        setLoaded(true);
        search();
    }
 
    if(loaded) {
        return (
            <div className="Dictionary text-center">
                <section>
                    <form onSubmit={handleSubmit}>
                        <input type="search" onChange={handleKeywordChange} defaultValue={props.defaultKeyword}/>
                    </form>
                </section>
                <Results results={results}/>
                <Photos photos={photos} />
            </div>
        );
    } else {
        load();
        return "Loading";
    }
 
}
