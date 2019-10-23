import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'song-1', duration: '2:45' },
    { title: 'song-2', duration: '3:45' },
    { title: 'song-3', duration: '4:45' },
    { title: 'song-4', duration: '5:45' }
  ]
}

const selectSongReducer = (selectedSong = null, action) => {
  if (action.type === "SELECT_SONG") {
    return action.payload
  }

  return selectedSong;
}

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectSongReducer
})