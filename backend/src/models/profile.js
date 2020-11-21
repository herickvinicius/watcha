const mongoose = require("../database");

const ProfileSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    require: true,
  },
  watchlist: [
    {
      type: Object,
    },
  ],
  //moviesWatched: {},
  //favTags: {}
});

const Profile = mongoose.model("Profile", ProfileSchema);

module.exports = Profile;
