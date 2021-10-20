import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";

import {
  DeleteOutlined,
  EditOutlined,
  Restore,
  Block,
} from "@mui/icons-material";
import Chip from "@mui/material/Chip";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const useStyles = makeStyles({
  root: {
    "&.MuiDataGrid-root .MuiDataGrid-columnHeader:focus, &.MuiDataGrid-root .MuiDataGrid-cell:focus, &.MuiDataGrid-root .MuiDataGrid-cell:focus-within, &.MuiDataGrid-root .MuiDataGrid-columnHeader:focus-within":
      {
        outline: "none",
      },
  },
});
const UsersTable = (props) => {
  const classes = useStyles();
  const [pageSize, setPageSize] = React.useState(5);
  const [selectedList, setSelectedList] = React.useState([]);
  const deleteUsersHandler = () => {
    console.log(selectedList);
  };
  const columns = [
    { field: "id", headerName: "Mã người dùng", width: 150 },
    { field: "tenDangNhap", headerName: "Tên đăng nhập", width: 150 },
    { field: "vaiTro", headerName: "Vai trò", width: 150 },
    {
      field: "dangHoatDong",
      headerName: "Trạng thái",
      sortable: false,
      width: 150,
      renderCell: (params) => {
        return (
          <Chip
            sx={params.row.dangHoatDong && { color: "#fff" }}
            label={
              params.row.dangHoatDong ? "Đang hoạt động" : "Ngưng hoạt động"
            }
            color={params.row.dangHoatDong ? "success" : "secondary"}
            variant={params.row.dangHoatDong ? "contained" : "outlined"}
          />
        );
      },
    },
    {
      field: "action",
      headerName: "Hành động",
      headerAlign: "center",
      sortable: false,
      align: "center",
      width: 150,
      renderCell: (params) => (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <IconButton
            title="Sửa"
            variant="dark"
            onClick={props.onShowEdit.bind(null, params.id)}
          >
            <EditOutlined color="primary" />
          </IconButton>
          {params.row.dangHoatDong ? (
            <IconButton
              title="Vô hiệu hóa"
              variant="dark"
              //   onClick={deleteOneStudentHandler.bind(null, params.id)}
            >
              <Block color="secondary" />
            </IconButton>
          ) : (
            <IconButton
              title="Cho phép hoạt động lại"
              variant="dark"
              //   onClick={deleteOneStudentHandler.bind(null, params.id)}
            >
              <Restore color="success" />
            </IconButton>
          )}
          <IconButton
            title="Xóa"
            variant="dark"

            //   onClick={deleteOneStudentHandler.bind(null, params.id)}
          >
            <DeleteOutlined color="action" />
          </IconButton>
        </Box>
      ),
    },
  ];
  return (
    <div style={{ height: "auto", minHeight: "500px", width: "100%" }}>
      {selectedList.length > 0 && (
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "rgba(3, 201, 215, 0.08)",
          }}
        >
          <Typography variant="subtitle1">
            Đã chọn {selectedList.length}
          </Typography>
          <Button
            onClick={deleteUsersHandler}
            variant="contained"
            color="error"
          >
            Xóa tất cả
          </Button>
        </Toolbar>
      )}
      {selectedList.length === 0 && <Toolbar></Toolbar>}
      <DataGrid
        className={`${classes.root} mh-500 bt-none`}
        disableCellFocusOutline
        // className=""
        hideFooterSelectedRowCount
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        onSelectionModelChange={(params) => {
          setSelectedList(params);
        }}
        pagination
        disableColumnMenu
        disableSelectionOnClick
        checkboxSelection
        rows={props.data}
        rowsPerPageOptions={[5, 10, 20]}
        columns={columns}
      />
    </div>
  );
};

export default UsersTable;
