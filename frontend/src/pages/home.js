import React, { useEffect, useState } from "react";
import { CssBaseline, Grid, Typography } from "@material-ui/core";
import APIService from "../utils/apiService";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    APIService.fetchPopular()
      .then(({ results }) => setMovies(results))
      .catch((e) => console.error(e));
  }, []);

  console.log(movies);

  return (
    <>
      <CssBaseline />
      <Typography variant="h5" align="center">
        Filmes Populares
      </Typography>
      <Grid container>
        {movies.map((item) => (
          <Grid key={item.id} item xs={12}>
            <Typography align="center">{item.title}</Typography>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Home;
