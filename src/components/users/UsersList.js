import React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import UsersTable from "./UsersTable";
import AddUserForm from "./AddUserForm";
import EditUserForm from "./EditUserForm";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import { Search } from "@mui/icons-material";
const UsersList = () => {
  const [isAddUserDialogVisible, setIsAddUserDialogVisible] =
    React.useState(false);
  const [isEditUserDialogVisible, setIsEditUserDialogVisible] =
    React.useState(false);
  const showAddUserHandler = () => {
    setIsAddUserDialogVisible(true);
  };
  const hideAddUserHandler = () => {
    setIsAddUserDialogVisible(false);
  };
  const showEditUserHandler = (id) => {
    setIsEditUserDialogVisible(true);
  };
  const hideEditUserHandler = () => {
    setIsEditUserDialogVisible(false);
  };
  return (
    <>
      <Breadcrumbs mb="16px" aria-label="breadcrumb">
        <Typography color="text.primary">Người dùng</Typography>
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
          Danh sách người dùng
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
            onClick={showAddUserHandler}
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
          <UsersTable onShowEdit={showEditUserHandler} data={users} />
        </Grid>
      </Grid>
      <AddUserForm open={isAddUserDialogVisible} onClose={hideAddUserHandler} />
      <EditUserForm
        open={isEditUserDialogVisible}
        onClose={hideEditUserHandler}
      />
    </>
  );
};
const users = [
  { id: 1, tenDangNhap: "feelings93", dangHoatDong: true, vaiTro: "Giáo viên" },
  { id: 2, tenDangNhap: "feelings92", dangHoatDong: false, vaiTro: "Giáo vụ" },
  { id: 3, tenDangNhap: "feelings93", dangHoatDong: true, vaiTro: "Giáo viên" },
  { id: 4, tenDangNhap: "feelings93", dangHoatDong: true, vaiTro: "Giáo viên" },
];
export default UsersList;
