import React, { useEffect, useState } from "react";
import { CssBaseline, Grid, Typography } from "@material-ui/core";
import APIService from "../utils/apiService";
import { useHistory } from "react-router";
import MovieCard from "../components/MovieCard";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [token] = useState(localStorage.getItem("token"));
  const history = useHistory();

  // useEffect(() => {
  //   if (token === null) {
  //     console.log(token);
  //     history.push("/login");
  //   }
  // })

  useEffect(() => {
    if (token === null) {
      history.push("/login");
      return;
    }
    APIService.fetchPopular()
      .then(({ results }) => setMovies(results))
      .catch((e) => console.error(e));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  //console.log(movies);

  return (
    <>
      <CssBaseline />
      <Typography variant="h5" align="center">
        Filmes Populares
      </Typography>
      <Grid container>
        {movies.map((item) => (
          <Grid key={item.id} item xs={3}>
            <MovieCard movie={item} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Home;
