import React, { Component } from "react";
import { connect } from "react-redux";

class SongDetail extends Component {
  loadSongDetail() {
    if (!this.props.selectedSong) {
      return <div className="content">Please Select a Song !!</div>;
    }
    const { title, duration } = this.props.selectedSong;
    return (
      <div className="content">
        <div className="header">{title}</div>
        <div className="meta">Song</div>
        <div className="description">
          Duration:
          {duration}
        </div>
      </div>
    );
  }
  render() {
    console.log("Song Detail: ", this.props.selectedSong);
    return (
      <div className="ui cards">
        <div className="card">{this.loadSongDetail()}</div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { selectedSong: state.selectedSong };
};
export default connect(mapStateToProps)(SongDetail);
