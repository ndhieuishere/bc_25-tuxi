import React, { Component } from "react";
import { connect } from "react-redux/es/exports";
class Player extends Component {
  render() {
    return (
      <div className="text-center player">
        <div className="keoBuaBao ">
          <img
            className="mt-5"
            width={100}
            height={100}
            src={
              this.props.mangDatCuoc.find((item) => item.datCuoc === true)
                .hinhAnh
            }
            alt="img"
          />
        </div>
        <div className="speech-bubble "></div>
        <img src="./img/player.png" alt="player" style={{ width: 300 }} />
        <div className="row">
          {this.props.mangDatCuoc.map((item, index) => {
            let border = {};
            if (item.datCuoc) {
              border = { border: "3px solid orange" };
            }

            return (
              <div className="col-4">
                <button
                  onClick={() => {
                    this.props.datCuoc(item.ma);
                  }}
                  style={border}
                  className="btnItem"
                >
                  <img
                    width={50}
                    height={50}
                    src={item.hinhAnh}
                    alt="{item.hinhAnh}"
                  />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mangDatCuoc: state.oanTuXiReducer.mangDatCuoc,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    datCuoc: (maCuoc) => {
      dispatch({
        type: "CHON_KEO_BUA_BAO",
        maCuoc,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
