import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import { useHistory } from "react-router";
// Importar icones pra usar nos cards
// Importar e implementar função addToWatchlist

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const MovieCard = ({ movie }) => {
  const classes = useStyles();
  return <Card className={classes}>{movie.title}</Card>;
};

export default MovieCard;
