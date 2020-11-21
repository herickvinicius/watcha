const express = require("express");
const axios = require("axios");
const authMiddleware = require("../middlewares/auth");
const tmdb = require("../config/tmdb.json");
const Profile = require("../models/profile");
const { watch } = require("../models/profile");

const router = express.Router();

router.use(authMiddleware);

router.get("/popular", async (req, res) => {
  const { page = 1 } = req.query;
  try {
    const { data } = await axios(
      `${tmdb.API_ROOT}movie/popular?api_key=${tmdb.API_KEY}&page=${page}`
    );
    return res.json(data);
  } catch (error) {
    console.error(error.message);
    return res.status(503).send({ error: error.message });
  }
});

router.get("/getWatchlist", async (req, res) => {
  const { userId } = req.query;
  try {
    // Busca no banco por perfis que pertençam ao user logado
    const profile = await Profile.findOne({ userId });

    // A partir daqui, o vetor de watchlist pode ser acessada por profile.watchlist
    return res.json(profile.watchlist);
  } catch (error) {
    console.error({ error: error.message });
  }
});

// router.post("/setWatchlist", async (req, res) => {

// })

router.get("/search", async (req, res) => {
  const { terms } = req.query;
  try {
    const { data } = await axios(
      `${tmdb.API_ROOT}search/movie?api_key=${tmdb.API_KEY}&query=${terms}`
    );
    return res.json(data);
  } catch (error) {
    console.error(error.message);
    return res.status(503).send({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  const movieId = req.params.id;
  try {
    const { data } = await axios(
      `${tmdb.API_ROOT}movie/${movieId}?api_key=${tmdb.API_KEY}`
    );
    return res.json(data);
  } catch (error) {
    console.error(error.message);
    return res.status(503).send({ error: error.message });
  }
});

module.exports = (app) => app.use("/movies", router);
