import React from "react";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import MenuItem from "@mui/material/MenuItem";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Box from "@mui/material/Box";
import useHttp from "../../hooks/use-http";
import { addClass } from "../../lib/api";
const grades = [10, 11, 12];
const AddClassForm = (props) => {
  const { sendRequest, status } = useHttp(addClass);
  const [grade, setGrade] = React.useState(10);
  const selectGradeHandler = (event) => {
    setGrade(event.target.value);
  };
  const [enteredClassName, setEnteredClassName] = React.useState("");

  const addClassSubmitHandler = (event) => {
    event.preventDefault();
    let data = {
      tenLop: enteredClassName,
      maKhoi: grade - 9,
    };
    sendRequest(data);
  };
  return (
    <Dialog open={props.open} onClose={props.onClose}>
      <form onSubmit={addClassSubmitHandler}>
        <DialogTitle>Thêm lớp học</DialogTitle>
        <DialogContent>
          <Box sx={{ display: "flex" }}>
            <TextField
              autoFocus
              margin="dense"
              id="class"
              label="Tên lớp"
              value={enteredClassName}
              onChange={(event) => {
                setEnteredClassName(event.target.value);
              }}
              type="text"
              sx={{ marginRight: "8px" }}
              variant="outlined"
            />
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
                  {`Khối ${option}`}
                </MenuItem>
              ))}
            </TextField>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            disabled={status === "pending"}
            type="submit"
            variant="contained"
          >
            {status === "pending" ? "Đang thêm..." : "Thêm"}
          </Button>
          <Button onClick={props.onClose}>Hủy bỏ</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default AddClassForm;
