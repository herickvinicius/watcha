import React, { useEffect, useState } from "react";
import { CssBaseline, Grid, Typography } from "@material-ui/core";
import APIService from "../utils/apiService";
import { useHistory } from "react-router";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token === null) {
      console.log(token);
      history.push("/login");
    }
  });

  useEffect(() => {
    APIService.fetchPopular()
      .then(({ results }) => setMovies(results))
      .catch((e) => console.error(e));
  }, []);

  //console.log(movies);

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
