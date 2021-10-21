import React from "react";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Stack from "@mui/material/Stack";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import MenuItem from "@mui/material/MenuItem";
const roles = ["Admin", "Hiệu trưởng", "Giáo vụ", "Giáo viên"];
const AddUserForm = (props) => {
  const [role, setRole] = React.useState("Admin");
  const selectRoleHandler = (event) => {
    setRole(event.target.value);
  };
  return (
    <Dialog open={props.open} onClose={props.onClose}>
      <DialogTitle>Thêm người dùng</DialogTitle>
      <DialogContent>
        <Stack spacing={2} sx={{ width: "300px" }}>
          <TextField
            autoFocus
            margin="dense"
            id="username"
            label="Tên người dùng"
            type="text"
            variant="outlined"
          />
          <TextField
            margin="dense"
            id="class"
            label="Mật khẩu"
            type="password"
            variant="outlined"
          />
          <TextField
            id="role"
            select
            margin="dense"
            label="Vai trò"
            value={role}
            onChange={selectRoleHandler}
          >
            {roles.map((option) => (
              <MenuItem key={option} value={option}>
                {`${option}`}
              </MenuItem>
            ))}
          </TextField>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={props.onClose}>
          Thêm
        </Button>
        <Button onClick={props.onClose}>Hủy bỏ</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddUserForm;
