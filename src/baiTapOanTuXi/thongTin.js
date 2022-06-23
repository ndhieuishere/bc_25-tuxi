import React, { Component } from "react";
import { connect } from "react-redux";

class ThongTin extends Component {
  render() {
    return (
      <>
        <div className="display-4 text-warning mt-5">{this.props.ketQua}</div>
        <div className="display-4 text-success mt-5">
          số bàn thắng:
          <span className="text-warning">{this.props.soBanThang}</span>
        </div>
        <div className="display-4 text-success mt-5">
          Tổng số bàn chơi:
          <span className="text-warning">{this.props.soBanChoi}</span>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ketQua: state.oanTuXiReducer.ketQua,
    soBanThang: state.oanTuXiReducer.soBanThang,
    soBanChoi: state.oanTuXiReducer.soBanChoi,
  };
};

export default connect(mapStateToProps)(ThongTin);
