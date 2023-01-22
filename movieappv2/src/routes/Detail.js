import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function Detail(){
    const [detailMV, setDetailMV] = useState(0);
    const {id} =useParams()
    const getMovies = async()=>{
        const json = await(
            await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=5b41ed68d49a740584bf5c7ede5ccd07 `)
        ).json();
        console.log(json);
        setDetailMV(json);
    };
    useEffect(()=>{
        getMovies()
    },[]);
    console.log("hi : " + detailMV)
    return(
        <div>
            <h1>detail</h1>
        </div>


    );
};

export default Detail;
