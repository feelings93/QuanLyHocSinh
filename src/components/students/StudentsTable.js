import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import IconButton from "@mui/material/IconButton";
import { MoreVert } from "@mui/icons-material";
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
  { field: "id", headerName: "Mã HS", width: 150 },
  { field: "hoTen", headerName: "Họ tên", width: 150 },
  { field: "gioiTinh", headerName: "Giới tính", width: 150 },
  { field: "ngaySinh", headerName: "Ngày sinh", width: 150 },
  { field: "diaChi", headerName: "Địa chỉ", width: 150 },
  {
    field: "action",
    width: 100,
    renderCell: (params) => (
      <IconButton
        onClick={() => {
          alert(params.id);
        }}
      >
        <MoreVert />
      </IconButton>
    ),
  },
];
const StudentsTable = (props) => {
  return (
    <div style={{ height: "500px", width: "100%" }}>
      <DataGrid
        disableColumnMenu
        disableSelectionOnClick
        checkboxSelection
        rows={props.data}
        columns={columns}
      />
    </div>
  );
};

export default StudentsTable;
