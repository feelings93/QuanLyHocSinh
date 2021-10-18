import React from "react";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import Checkbox from "@mui/material/Checkbox";
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
const AddStudentToClassForm = (props) => {
  const [addedStudents, setAddedStudents] = React.useState([]);
  const changeSelectedStudentHandler = (event, value) => {
    setAddedStudents(value);
  };
  const addStudentToClassHandler = () => {
    console.log(addedStudents);
    props.onClose();
  };
  return (
    <Dialog open={props.open} onClose={props.onClose}>
      <DialogTitle>Thêm học sinh vào lớp</DialogTitle>
      <DialogContent>
        <Autocomplete
          sx={{ padding: "8px 0" }}
          onChange={changeSelectedStudentHandler}
          value={addedStudents}
          multiple
          id="students"
          options={studentsList}
          disableCloseOnSelect
          getOptionLabel={(option) => option.hoTen}
          renderOption={(props, option, { selected }) => (
            <li {...props}>
              <Checkbox
                icon={icon}
                checkedIcon={checkedIcon}
                style={{ marginRight: 8 }}
                checked={selected}
              />
              {`${option.hoTen} (${option.id})`}
            </li>
          )}
          style={{ width: 500 }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Danh sách học sinh"
              placeholder="Học sinh"
            />
          )}
        />
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={addStudentToClassHandler}>
          Thêm
        </Button>
        <Button onClick={props.onClose}>Hủy bỏ</Button>
      </DialogActions>
    </Dialog>
  );
};
const studentsList = [
  {
    id: 1,
    hoTen: "Nguyễn Cao Cường",
    ngaySinh: "09/03/2001",
    gioiTinh: "Nam",
    diaChi: "Đăk Lăk",
  },
  {
    id: 2,
    hoTen: "Nguyễn Hồng Anh",
    ngaySinh: "09/03/2001",
    gioiTinh: "Nam",
    diaChi: "Đăk Lăk",
  },
  {
    id: 3,
    hoTen: "Nguyễn Duy Hoàng",
    ngaySinh: "09/03/2001",
    gioiTinh: "Nam",
    diaChi: "Đăk Lăk",
  },
  {
    id: 4,
    hoTen: "Nguyễn Văn A",
    ngaySinh: "09/03/2001",
    gioiTinh: "Nam",
    diaChi: "Đăk Lăk",
  },
  {
    id: 5,
    hoTen: "Nguyễn Mạnh Cường",
    ngaySinh: "09/03/2001",
    gioiTinh: "Nam",
    diaChi: "Đăk Lăk",
  },
];
export default AddStudentToClassForm;
