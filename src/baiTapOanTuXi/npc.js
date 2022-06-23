import React, { Component } from "react";
import { connect } from "react-redux";
class Npc extends Component {
  render() {
    let keyframe = `@keyframes randomItem${Date.now()} {
      0% {top:-50px;}
      25 % {top:100px}
      50% {top:-50px;}
      75 % {top:100px}
      100 % {top:100px}
    }`;
    return (
      <div className="text-center player">
        <style>{keyframe}</style>
        <div className="keoBuaBao " style={{ position: "relative" }}>
          <img
            style={{
              position: "absolute",
              animation: ` randomItem${Date.now()}0.5s`,
              transform: "rotate(120deg)",
              left: "30%",
            }}
            className="mt-5"
            width={100}
            height={100}
            src={this.props.npc.hinhAnh}
            alt="img"
          />
        </div>
        <div className="speech-bubble "></div>
        <img
          src="./img/playercomputer.png"
          alt="thanos"
          style={{ width: 300 }}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    npc: state.oanTuXiReducer.npc,
  };
};

export default connect(mapStateToProps)(Npc);
