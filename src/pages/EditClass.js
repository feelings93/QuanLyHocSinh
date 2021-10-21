import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import { Search } from "@mui/icons-material";
import { useHistory, useParams } from "react-router-dom";
import AddStudentToClassForm from "../components/classes/AddStudentToClassForm";
import StudentOfClassTable from "../components/classes/StudentOfClassTable";
const EditClass = () => {
  const history = useHistory();
  const moveToClassesHandler = () => {
    history.push("/classes");
  };
  const [isAddStudentDialogVisible, setIsAddStudentDialogVisible] =
    React.useState(false);
  const showAddStudentHandler = () => {
    setIsAddStudentDialogVisible(true);
  };
  const hideAddStudentHandler = () => {
    setIsAddStudentDialogVisible(false);
  };
  const params = useParams();
  return (
    <>
      <Breadcrumbs mb="16px" aria-label="breadcrumb">
        <Link
          sx={{ cursor: "pointer" }}
          onClick={moveToClassesHandler}
          underline="hover"
          color="inherit"
        >
          Lớp học
        </Link>
        <Typography color="text.primary">{"Lớp " + params.id}</Typography>
      </Breadcrumbs>
      <Box
        mb="16px"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" component="h2" sx={{ fontWeight: 700 }}>
          Danh sách học sinh lớp {params.id}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <TextField
            id="search"
            label="Tìm kiếm"
            variant="outlined"
            size="small"
            sx={{ marginRight: "8px" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
          <Button
            onClick={showAddStudentHandler}
            variant="contained"
            color="success"
          >
            Thêm
          </Button>
        </Box>
      </Box>
      <Grid
        container
        sx={{
          boxShadow: "0px 0px  30px 5px rgba(0, 0, 0, 0.08)",
        }}
      >
        <Grid item xs={12}>
          <StudentOfClassTable data={students} />
        </Grid>
      </Grid>

      <AddStudentToClassForm
        open={isAddStudentDialogVisible}
        onClose={hideAddStudentHandler}
      />
    </>
  );
};
const students = [
  {
    id: 1,
    hoTen: "Nguyễn Cao Cường",
    gioiTinh: "Nam",
    diaChi: "Đăk Lăk",
    ngaySinh: "09/03/2001",
  },
  {
    id: 2,
    hoTen: "Nguyễn Văn A",
    gioiTinh: "Nam",
    diaChi: "Đăk Nông",
    ngaySinh: "09/03/2001",
  },
  {
    id: 3,
    hoTen: "Trần Văn C",
    gioiTinh: "Nam",
    diaChi: "Hà Nội",
    ngaySinh: "09/03/2001",
  },
  {
    id: 4,
    hoTen: "Nguyễn Cao Cường",
    gioiTinh: "Nam",
    diaChi: "Đăk Lăk",
    ngaySinh: "09/03/2001",
  },
  {
    id: 5,
    hoTen: "Nguyễn Văn A",
    gioiTinh: "Nam",
    diaChi: "Đăk Nông",
    ngaySinh: "09/03/2001",
  },
  {
    id: 6,
    hoTen: "Trần Văn C",
    gioiTinh: "Nam",
    diaChi: "Hà Nội",
    ngaySinh: "09/03/2001",
  },
  {
    id: 7,
    hoTen: "Nguyễn Cao Cường",
    gioiTinh: "Nam",
    diaChi: "Đăk Lăk",
    ngaySinh: "09/03/2001",
  },
  {
    id: 8,
    hoTen: "Nguyễn Văn A",
    gioiTinh: "Nam",
    diaChi: "Đăk Nông",
    ngaySinh: "09/03/2001",
  },
  {
    id: 9,
    hoTen: "Trần Văn C",
    gioiTinh: "Nam",
    diaChi: "Hà Nội",
    ngaySinh: "09/03/2001",
  },
  {
    id: 10,
    hoTen: "Nguyễn Cao Cường",
    gioiTinh: "Nam",
    diaChi: "Đăk Lăk",
    ngaySinh: "09/03/2001",
  },
  {
    id: 15,
    hoTen: "Nguyễn Văn A",
    gioiTinh: "Nam",
    diaChi: "Đăk Nông",
    ngaySinh: "09/03/2001",
  },
  {
    id: 16,
    hoTen: "Trần Văn C",
    gioiTinh: "Nam",
    diaChi: "Hà Nội",
    ngaySinh: "09/03/2001",
  },
];
export default EditClass;
