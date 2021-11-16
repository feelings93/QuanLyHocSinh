import React, { useEffect } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import IconButton from "@mui/material/IconButton";
import { EditOutlined } from "@mui/icons-material";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import EditDiem from "./EditDiem";
import useHttp from "../../hooks/use-http";
import { getAllTranscripts } from "../../lib/api";

const TranscriptTable = (props) => {
  const { sendRequest, error, data, status } = useHttp(getAllTranscripts);
  const [pageSize, setPageSize] = React.useState(15);
  const [selectedList, setSelectedList] = React.useState([]);
  const [edit, setEdit] = React.useState(false);
  const [editRowsModel, setEditRowsModel] = React.useState({});
  const [editTranscript, setEditTranscript] = React.useState({});
  const [bangDiem, setBangDiem] = React.useState([]);
  const [searchBD, setSearchBD] = React.useState([]);
  const updateTranscript = (data) => {
    let newDatas = bangDiem.map((x) => (x.maHS !== data.maHS ? x : data));
    setBangDiem(newDatas);
  };
  useEffect(() => {
    if (props.lop !== "" && props.hocKy !== "" && props.monHoc) {
      sendRequest({
        maHK: props.hocKy.maHK,
        maMH: props.monHoc.maMH,
        maLop: props.lop.maLop,
      });
    }
  }, [props.hocKy, props.lop, props.monHoc, sendRequest]);
  useEffect(() => {
    if (status === "completed" && data) {
      setBangDiem(data);
    }
  }, [data, status]);
  useEffect(() => {
    if (props.query === "" || !props.query) {
      setSearchBD(bangDiem);
    } else {
      setSearchBD(
        bangDiem.filter((x) =>
          x.hoTen.toUpperCase().includes(props.query.toUpperCase())
        )
      );
    }
  }, [bangDiem, props.query]);
  const handleEditRowsModelChange = React.useCallback((model) => {
    setEditRowsModel(model);
    //alert(JSON.stringify(model[0]));
  }, []);
  const [isEditDiemDialogVisible, setEditDiemDialogVisible] =
    React.useState(false);
  const hideEditDiemHandler = () => {
    setEditDiemDialogVisible(false);
  };
  if (status === "pending") return <p>Đang tải ...</p>;
  if (error) return <p>{error}</p>;
  const columns = [
    { field: "id", headerName: "Mã HS", width: 80 },
    { field: "tenLop", headerName: "Lớp", width: 100 },
    { field: "hoTen", headerName: "Họ tên", width: 190 },
    {
      field: "diemMieng",
      headerName: "Điểm miệng",
      width: 150,
      editable: true,
    },
    { field: "diem15P", headerName: "Điểm 15p", width: 150, editable: true },
    {
      field: "diem1Tiet",
      headerName: "Điểm 1 tiết",
      width: 150,
      editable: true,
    },
    {
      field: "diemHK",
      headerName: "Điểm học kì",
      width: 120,
      editable: true,
    },
    {
      field: "diemTBM",
      headerName: "Điểm trung bình",
      width: 140,
      valueGetter: (params) => {
        return params.row.diemTBM === -1 ? "Chưa tính" : params.row.diemTBM;
      },
    },
    {
      field: "action",
      type: "actions",
      headerName: "Hành động",
      headerAlign: "center",
      sortable: false,
      align: "center",
      width: 120,
      renderCell: (params) => {
        return (
          <IconButton
            title="Sửa"
            variant="dark"
            onClick={() => {
              setEdit(false);
              setEditTranscript({
                ...params.row,
                maHK: props.hocKy.maHK,
                maMH: props.monHoc.maMH,
                maLop: props.lop.maLop,
                tenMH: props.monHoc.tenMH,
              });
              console.log(params.row);
              setEditDiemDialogVisible(true);
            }}
          >
            <EditOutlined />
          </IconButton>
        );
      },
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
        </Toolbar>
      )}
      {selectedList.length === 0 && <Toolbar></Toolbar>}
      <DataGrid
        components={{
          Toolbar: GridToolbar,
        }}
        className="mh-500 bt-none"
        hideFooterSelectedRowCount
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        onSelectionModelChange={(params) => {
          setSelectedList(params);
          alert(params);
        }}
        pagination
        disableColumnMenu
        disableSelectionOnClick
        //  checkboxSelection
        rows={searchBD}
        rowsPerPageOptions={[5, 10, 20]}
        columns={columns}
        editMode="row"
        editRowsModel={editRowsModel}
        onCellClick={handleEditRowsModelChange}
        onEditRowsModelChange={!edit ? handleEditRowsModelChange : ""}
        //onSelectionModelChange = {handleRowSelection}
      />

      {isEditDiemDialogVisible && (
        <EditDiem
          updateTranscript={updateTranscript}
          editTranscript={editTranscript}
          open={isEditDiemDialogVisible}
          onClose={hideEditDiemHandler}
        />
      )}
    </div>
  );
};

export default TranscriptTable;
