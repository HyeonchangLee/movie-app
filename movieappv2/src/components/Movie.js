import PropTypes from "prop-types" ; 
import { Link } from "react-router-dom";


function Movie({style, url, poster_path, title, overview, release_date, vote_average, id}){
    return (
        <div>
          <img style={style} src={url+poster_path} alt={title} />
          <Link to={`/movie/${id}`}><h2>{title}</h2></Link>
          <p>{overview}</p>
          <p>release_date : {release_date}</p>
          <p>point : {vote_average}</p>
        </div>
    );
    
};

Movie.propTypes = {
    id : PropTypes.number.isRequired,
    style : PropTypes.object.isRequired, 
    url : PropTypes.string.isRequired, 
    poster_path : PropTypes.string.isRequired,  
    title : PropTypes.string.isRequired, 
    overview :PropTypes.string.isRequired, 
    release_date : PropTypes.string.isRequired, 
    vote_average : PropTypes.number.isRequired, 
};


export default Movie;