import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles"
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
// Importar e implementar funções addToWatchlist e fetchWatchlist

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

export function MovieCard({
    movie: { Cover, Title, Type, Year, MovieId } = {},
    isAddedToWatch: added = false,
}) {
    const classes = useStyles();
    const history = useHistory();
    const [isAddedToWatch, setIsAddedToWatch] = useState(saved);

    const handle
}