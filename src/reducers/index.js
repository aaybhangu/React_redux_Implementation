import { combineReducers } from "redux";
const songListReducer = () => {
  return [
    { title: "Love yourself", duration: "4:05" },
    { title: "Too late to say sorry", duration: "3:05" },
    { title: "Shape of you", duration: "4:35" },
    { title: "Perfact Love", duration: "3:32" }
  ];
};
const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songListReducer,
  selectedSong: selectedSongReducer
});
