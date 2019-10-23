import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {

  renderSong() {
    return this.props.songs.map(song => {
      return (
        <div className="ui middle aligned divided list" key={song.title}>
          <div className="item">
            <div className="content">
              <span style={{ marginRight: '20px' }}><b>Title: </b>{song.title}</span>
              <span><b>Duration</b>: {song.duration}</span>
              <button className="ui primary button" onClick={this.props.selectSong.bind(this, song)}>Select</button>
            </div>
          </div>
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        {this.renderSong()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { songs: state.songs };
}

export default connect(mapStateToProps, { selectSong })(SongList);



