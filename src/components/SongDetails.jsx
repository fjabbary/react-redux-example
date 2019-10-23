import React from 'react';
import { connect } from 'react-redux';

function SongDetails({ song }) {

  return (
    <div>
      <h1>{song ? song.title : ''}</h1>
      <p>{song ? song.duration : ''}</p>
    </div>
  )
}

const mapStateToProps = (state) => {
  return { song: state.selectedSong };
}

export default connect(mapStateToProps)(SongDetails);
