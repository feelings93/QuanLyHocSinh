import React from "react";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Stack from "@mui/material/Stack";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import MenuItem from "@mui/material/MenuItem";
const grades = [10, 11, 12];
const subjects = ["Lý", "Hóa", "Sinh", "Văn", "Sử", "Địa", "Toán"];
const EditCourseForm = (props) => {
  const [subject, setSubject] = React.useState("Admin");
  const selectSubjectHandler = (event) => {
    setSubject(event.target.value);
  };
  const [grade, setGrade] = React.useState(10);
  const selectGradeHandler = (event) => {
    setGrade(event.target.value);
  };
  return (
    <Dialog open={props.open} onClose={props.onClose}>
      <DialogTitle>Sửa chương trình học</DialogTitle>
      <DialogContent>
        <Stack spacing={2} sx={{ width: "300px" }}>
          <TextField
            autoFocus
            id="subject"
            select
            margin="dense"
            label="Môn học"
            value={subject}
            onChange={selectSubjectHandler}
          >
            {subjects.map((option) => (
              <MenuItem key={option} value={option}>
                {`${option}`}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="grade"
            select
            margin="dense"
            label="Khối"
            value={grade}
            onChange={selectGradeHandler}
          >
            {grades.map((option) => (
              <MenuItem key={option} value={option}>
                {`${option}`}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            margin="dense"
            id="coefficient"
            label="Hệ số"
            type="number"
            variant="outlined"
          />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={props.onClose}>
          Xác nhận
        </Button>
        <Button onClick={props.onClose}>Hủy bỏ</Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditCourseForm;
