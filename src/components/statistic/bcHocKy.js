import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import React from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { IconButton } from "@mui/material";
import LocalPrintshopOutlinedIcon from "@mui/icons-material/LocalPrintshopOutlined";

const BCHocKy = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "tenLop", headerName: "Lớp", width: 200 },
    { field: "siSo", headerName: "Sĩ số", width: 200 },
    { field: "soluongDat", headerName: "Số lượng đạt", width: 200 },
    { field: "tileDat", headerName: "Tỉ lệ đạt", width: 200 },
    { field: "ghiChu", headerName: "Ghi chú", width: 200 },
  ];

  const rows = [
    { id: 1, tenLop: "10A1", siSo: 40, soluongDat: 35, tileDat: "90%" },
    { id: 2, tenLop: "10A1", siSo: 40, soluongDat: 35, tileDat: "90%" },
    { id: 3, tenLop: "10A1", siSo: 40, soluongDat: 35, tileDat: "90%" },
    { id: 4, tenLop: "10A1", siSo: 40, soluongDat: 35, tileDat: "90%" },
    { id: 5, tenLop: "10A1", siSo: 40, soluongDat: 35, tileDat: "90%" },
    { id: 6, tenLop: "10A1", siSo: 40, soluongDat: 35, tileDat: "90%" },
    { id: 7, tenLop: "10A1", siSo: 40, soluongDat: 35, tileDat: "90%" },
  ];
  const [subject, setSubject] = React.useState("");
  const [semester, setSemester] = React.useState("");
  const [pageSize, setPageSize] = React.useState(15);

  const SubjectHandleChange = (event) => {
    setSubject(event.target.value);
  };
  const SemesterHandleChange = (event) => {
    setSemester(event.target.value);
  };
  return (
    <Grid container sm={12} rowSpacing={3}>
      <Grid container item sm={1} sx={{ alignItems: "center" }}>
        <Typography variant="h6" component="h6" sx={{ fontSize: "17px" }}>
          Lựa chọn:
        </Typography>
      </Grid>
      <Grid item sm={5}>
        <FormControl size="small" sx={{ minWidth: "250px" }}>
          <InputLabel id="idSelectClass">Học kỳ*</InputLabel>
          <Select
            labelId="selectSemester"
            id="idSelectSemester"
            value={semester}
            label="Học kì"
            onChange={SemesterHandleChange}
          >
            <MenuItem value={10}>1 (2020-2021)</MenuItem>
            <MenuItem value={20}>2 (2020-2021)</MenuItem>
            <MenuItem value={30}>1 (2021-2022)</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid container item sm={6} sx={{ justifyContent: "flex-end" }}>
        <IconButton color="primary" aria-label="add to shopping cart">
          <LocalPrintshopOutlinedIcon />
        </IconButton>
      </Grid>
      <Grid item sm={12}>
        <DataGrid
          components={{
            Toolbar: GridToolbar,
          }}
          className="mh-500 bt-none"
          hideFooterSelectedRowCount
          pageSize={pageSize}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          pagination
          disableColumnMenu
          disableSelectionOnClick
          rows={rows}
          rowsPerPageOptions={[5, 10, 20]}
          columns={columns}
        />
      </Grid>
    </Grid>
  );
};

export default BCHocKy;
