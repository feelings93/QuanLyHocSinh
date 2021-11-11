import React from "react";
import { DataGrid } from "@mui/x-data-grid";
// const rows = [
//   {
//     id: 1,
//     hoTen: "Nguyễn Cao Cường",
//     gioiTinh: "Nam",
//     ngaySinh: "09/03/2001",
//     diaChi: "xã Eatar, huyện Cư M'gar, tỉnh Đăk Lăk",
//   },
//   {
//     id: 2,
//     hoTen: "Nguyễn Cao Cường",
//     gioiTinh: "Nam",
//     ngaySinh: "09/03/2001",
//     diaChi: "xã Eatar, huyện Cư M'gar, tỉnh Đăk Lăk",
//   },
//   {
//     id: 3,
//     hoTen: "Nguyễn Cao Cường",
//     gioiTinh: "Nam",
//     ngaySinh: "09/03/2001",
//     diaChi: "xã Eatar, huyện Cư M'gar, tỉnh Đăk Lăk",
//   },
//   {
//     id: 4,
//     hoTen: "Nguyễn Cao Cường",
//     gioiTinh: "Nam",
//     ngaySinh: "09/03/2001",
//     diaChi: "xã Eatar, huyện Cư M'gar, tỉnh Đăk Lăk",
//   },
//   {
//     id: 5,
//     hoTen: "Nguyễn Cao Cường",
//     gioiTinh: "Nam",
//     ngaySinh: "09/03/2001",
//     diaChi: "xã Eatar, huyện Cư M'gar, tỉnh Đăk Lăk",
//   },
// ];
const columns = [
  { field: "malop", headerName: "Mã lớp", width: 100 },
  { field: "lop", headerName: "Lớp", width: 80 },
  { field: "sohsdat", headerName: "Học sinh đạt", width: 120 },
];
const TopClassTable = (props) => {
  return (
    <div style={{ height: "500px", width: "100%" }}>
      <DataGrid
        disableColumnMenu
        disableSelectionOnClick
        rows={props.data}
        columns={columns}
      />
    </div>
  );
};

export default TopClassTable;
