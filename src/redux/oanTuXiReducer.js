const stateDefault = {
  mangDatCuoc: [
    { ma: "keo", hinhAnh: "./img/bao.png", datCuoc: true },
    { ma: "bua", hinhAnh: "./img/bua.png", datCuoc: false },
    { ma: "bao", hinhAnh: "./img/keo.png", datCuoc: false },
  ],
  ketQua: "I'm ironman, i love u 3000 !!!",
  soBanThang: 0,
  soBanChoi: 0,
  npc: {
    ma: "keo",
    hinhAnh: "./img/keo.png",
  },
};

const oanTuXiReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "CHON_KEO_BUA_BAO": {
      let mangCuocUpdate = [...state.mangDatCuoc];
      mangCuocUpdate = mangCuocUpdate.map((item, index) => {
        if (item.ma === action.maCuoc) {
          return { ...item, datCuoc: true };
        }
        return { ...item, datCuoc: false };
      });
      state.mangDatCuoc = mangCuocUpdate;
      return { ...state };
    }
    case "RAN_DOM": {
      let soNgauNhien = Math.floor(Math.random() * 3);
      let quanCuocNgauNhien = state.mangDatCuoc[soNgauNhien];
      state.npc = quanCuocNgauNhien;
      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default oanTuXiReducer;
