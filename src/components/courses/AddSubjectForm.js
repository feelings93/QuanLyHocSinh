import React from "react";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Stack from "@mui/material/Stack";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
const AddSubjectForm = (props) => {
  return (
    <Dialog open={props.open} onClose={props.onClose}>
      <DialogTitle>Thêm môn học</DialogTitle>
      <DialogContent>
        <Stack spacing={2} sx={{ width: "200px" }}>
          <TextField
            autoFocus
            margin="dense"
            id="subject"
            label="Tên môn học"
            type="text"
            variant="outlined"
          />
          <TextField
            margin="dense"
            id="point"
            label="Điểm đạt"
            type="number"
            variant="outlined"
          />
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

export default AddSubjectForm;
