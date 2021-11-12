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
  { field: "id", headerName: "Mã HS", width: 120 },
  { field: "hoTen", headerName: "Họ tên", width: 200 },
  { field: "lop", headerName: "Lớp", width: 80 },
  { field: "diaChi", headerName: "Địa chỉ", width: 250 },
  { field: "diemtongket", headerName: "Tổng điểm", width: 150 },
];

const TopStudentTable = (props) => {
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

export default TopStudentTable;
