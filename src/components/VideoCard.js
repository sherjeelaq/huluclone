import React from "react";
import "./VideoCard.css";
import TextTruncate from "react-text-truncate";
import ThumbUpSharpIcon from "@material-ui/icons/ThumbUpSharp";
import { forwardRef } from "react";
import { Link } from "react-router-dom";

const base_url = "https://image.tmdb.org/t/p/original/";

const VideoCard = forwardRef(({ movie }, ref) => {
  return (
    <Link
      to={`${
        movie.media_type === "tv" ? `tv/${movie.id}` : `movie/${movie.id}`
      }`}
      className="videoCard_link"
    >
      <div ref={ref} className="videoCard">
        <img
          src={`${
            movie.backdrop_path === null
              ? "https://via.placeholder.com/500x300"
              : base_url + "/" + movie.backdrop_path
          }`}
          alt={movie.title || movie.original_name}
        />

        <h2>{movie.title || movie.original_name}</h2>
        <TextTruncate
          line={1}
          element="p"
          truncateText="..."
          text={movie.overview}
        />
        <div className="videoCard_stats">
          {/*movie.media_type && `${movie.media_type} .`*/}
          <div className="videoCard_movieReleased">
            <b>Release Date: </b>
            {movie.release_date || movie.first_air_date}
          </div>
          <div className="videoCard_movieVoteCount">
            <ThumbUpSharpIcon /> {movie.vote_count}
          </div>
        </div>
      </div>
    </Link>
  );
});

export default VideoCard;
