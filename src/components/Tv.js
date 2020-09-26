import React, { useState, useEffect } from "react";
import "./Movie.css";
import Header from "./Header";
import { Button } from "@material-ui/core";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import { withRouter } from "react-router-dom";
import axios from "../axios";
import requests from "../requests";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

function Search({ match }) {
  const [movie, setMovie] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original";
  const [genres, setGenres] = useState("");
  const [videoArray, setVideoArray] = useState([]);
  const [productionCompanies, setproductionCompanies] = useState([]);
  const [backdropImages, setbackdropImages] = useState([]);
  const [posterImages, setposterImagess] = useState([]);
  //getting id from parameters by using it in js

  useEffect(() => {
    async function fetchData() {
      const movieData = requests.searchTVId(match.params.id);
      const request = await axios.get(movieData).catch((err) => {
        console.log(err);
      });

      setMovie(request.data);
      setGenres(
        request.data.genres.map((genre) => {
          return <span key={genre.id}>{genre.name + ", "}</span>;
        })
      );
      setVideoArray(
        request.data.videos.results.map((result) => {
          return (
            <iframe
              key={result.id}
              width="300"
              height="200"
              title={result.name}
              src={`https://www.youtube.com/embed/${result.key}?controls=1`}
              frameBorder="0"
              samesite="strict"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen="allowfullscreen"
            ></iframe>
          );
        })
      );

      setbackdropImages(
        request.data.images.backdrops.slice(0, 8).map((result, i) => {
          return (
            <Zoom key={i}>
              <img
                src={`${base_url}${result.file_path}`}
                className="movie_backdropimage"
                alt={`${result.file_path}`}
              />
            </Zoom>
          );
        })
      );

      setposterImagess(
        request.data.images.posters.slice(0, 8).map((result, i) => {
          return (
            <Zoom key={i}>
              <img
                src={`${base_url}${result.file_path}`}
                className="movie_posterimage"
                alt={`${result.file_path}`}
              />
            </Zoom>
          );
        })
      );

      setproductionCompanies(
        request.data.production_companies.map((prodComp) => {
          return (
            <div className="movie_icon" key={prodComp.id}>
              <img
                src={`${
                  prodComp.logo_path === null
                    ? "https://via.placeholder.com/200"
                    : base_url + prodComp.logo_path
                }`}
                alt={`${prodComp.name}`}
                className="movie_productionCompanies_icon"
              />
              <p>{`${prodComp.name}`}</p>
            </div>
          );
        })
      );
      return request;
    }

    fetchData();

    //run this code once when the Results components load if , [] in the last if not added then avery time the code will run when the component loads
  }, [match.params.movieId]);

  return (
    <div className="Movie">
      <Header activeIcon={""} />
      <div className="movie">
        <div className="movie_majorDetails">
          <img
            src={`${
              movie.poster_path === null && movie.backdrop_path === null
                ? "https://via.placeholder.com/400x500"
                : base_url + "/" + (movie?.poster_path || movie.backdrop_path)
            }`}
            alt={movie?.original_title || movie?.original_name}
          />
          <div className="movie_watch">
            <h2>{movie?.original_title || movie?.original_name}</h2>
            <p>
              <b>Ratings: </b> {movie?.vote_average}
            </p>
            <p>
              <b>Genre: </b>
              {genres}
            </p>
            <Button variant="contained" className="movie_watchButton">
              <PlayArrowIcon />
              Watch Online
            </Button>
            <Button variant="contained" className="movie_watchlistButton">
              <PlaylistAddIcon />
              Add to Watchlish
            </Button>
          </div>
        </div>

        <div className="movie_details">
          <p className="movie_description">{movie?.overview}</p>
          <p className="movie_heading">
            <b>Status: </b>
            {movie?.status}
          </p>
          <p className="movie_heading">
            <b>Episodes: </b>
            {movie?.episode_run_time}
          </p>
          <p className="movie_heading">
            <b>Completed Status: </b>
            {movie?.in_production === true ? "In Progress" : "Completed"}
          </p>
          <p className="movie_heading">
            <b>First Air Date: </b>
            {movie?.first_air_date}
          </p>
          <div className="movie_videos">
            <h3 className="movie_heading">Videos</h3>
            {videoArray.length === 0 ? (
              <p className="movie_errorText">No videos found!</p>
            ) : (
              <div className="movie_videoshow">
                <div className="movie_swipe scrollbar" id="style-2">
                  {videoArray}
                </div>
                <span>
                  <ArrowRightIcon />
                </span>
              </div>
            )}
          </div>
          <div className="movie_productionCompanies">
            <h3 className="movie_heading">Produced by</h3>
            {productionCompanies.length === 0 ? (
              <p className="movie_errorText">No data found!</p>
            ) : (
              <div className="movie_icons">{productionCompanies}</div>
            )}
          </div>

          <div className="movie_backdropImages">
            <h3 className="movie_heading">Screens:</h3>
            {backdropImages.length === 0 ? (
              <p className="movie_errorText">No data found!</p>
            ) : (
              <div className="movie_images">{backdropImages}</div>
            )}
          </div>

          <div className="movie_posterImages">
            <h3 className="movie_heading">Posters:</h3>
            {posterImages.length === 0 ? (
              <p className="movie_errorText">No data found!</p>
            ) : (
              <div className="movie_images">{posterImages}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Search);
