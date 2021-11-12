import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import IconButton from "@mui/material/IconButton";
import { DeleteOutlined, EditOutlined } from "@mui/icons-material";
import { useHistory, useRouteMatch } from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
const StudentsTable = (props) => {
  const history = useHistory();
  const { url } = useRouteMatch();
  const [pageSize, setPageSize] = React.useState(5);
  const [selectedList, setSelectedList] = React.useState([]);
  const moveToEditHandler = (id) => {
    history.push(`${url}/${id}`);
  };
  const deleteStudentsHandler = () => {
    console.log(selectedList);
  };
  const columns = [
    { field: "id", headerName: "Mã HS", width: 150 },
    { field: "hoTen", headerName: "Họ tên", width: 150 },
    { field: "gioiTinh", headerName: "Giới tính", sortable: false, width: 150 },
    { field: "ngaySinh", headerName: "Ngày sinh", sortable: false, width: 150 },
    { field: "diaChi", headerName: "Địa chỉ", width: 150 },
    {
      field: "action",
      headerName: "Hành động",
      headerAlign: "center",
      sortable: false,
      align: "center",
      width: 150,
      renderCell: (params) => (
        <IconButton
          title="Sửa"
          variant="dark"
          onClick={moveToEditHandler.bind(null, params.id)}
        >
          <EditOutlined />
        </IconButton>
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
          <IconButton
            title="Xóa"
            variant="dark"
            onClick={deleteStudentsHandler}
          >
            <DeleteOutlined />
          </IconButton>
        </Toolbar>
      )}
      {selectedList.length === 0 && <Toolbar></Toolbar>}
      <DataGrid
        className="mh-500 bt-none"
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

export default StudentsTable;
