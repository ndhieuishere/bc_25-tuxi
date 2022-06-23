import React, { Component } from "react";
import "./oanTuXi.css";
import Player from "./player";
import Npc from "./npc";
import ThongTin from "./thongTin";
import { connect } from "react-redux";
class OanTuXi extends Component {
  render() {
   
    return (
      <div className="gameOanTuXi ">
        <div className="row text-center mt-5">
          <div className="col-4 mt-4">
            <Player />
          </div>
          <div className="col-4  mt-3">
            <ThongTin />
            <button
              onClick={() => {
                this.props.playGame();
              }}
              className="btn btn-success p-3 display-4 mt-5"
            >
              play game
            </button>
          </div>
          <div className="col-4  mt-4">
            <Npc />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    playGame: () => {
      let count = 0;
      let randomNpcItem = setInterval(() => {
        dispatch({
          type: "RAN_DOM",
        });
        count++;
        if (count > 10) {
          clearInterval(randomNpcItem);
        }
      }, 100);
    },
  };
};

export default connect(null, mapDispatchToProps)(OanTuXi);
