import React, { useState } from "react";
import Unsplash, { toJson } from "unsplash-js";
import AddFavourites from './bookmark';


const unsplash = new Unsplash({
    accessKey: "I0DI8e_-yu9gvaRc7N4ki4xsyqqdkoRy1gmu3Rk7X1g"
});

const SearchPhotos = () => {

    const [query, setQuery] = useState("");
    const [pics, setPics] = useState([]);

    const searchPhotos = async (e) => {
        e.preventDefault();
        unsplash.search
            .photos(query, 1, 20)
            .then(toJson)
            .then((json) => {
                setPics(json.results);
            });
    };

    return (
        <>
            <form className="form" onSubmit={searchPhotos}>
                <label className="label" htmlFor="query">
                    {" "}
                </label>

                <input type="text" name="query" className="input" placeholder={"Search free high resolution images"} value={query} onChange={(e) => setQuery(e.target.value)} />

                <button type="submit" className="button">Search</button>
            </form>

            <div className="card-list">

                {pics.map((pic) =>
                    <div className="card " key={pic.id} >
                        <img
                            className="card--image"
                            alt={pic.alt_description}
                            src={pic.urls.full}
                            width="50%"
                            height="50%"
                            
                        ></img>
                        <div className='overlay '>
						    <AddFavourites/>
					    </div>
                    </div>)};
            </div>

            
        </>
    );
}

export default SearchPhotos;