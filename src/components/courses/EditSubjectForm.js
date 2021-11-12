import React, { useEffect, useState } from "react";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Stack from "@mui/material/Stack";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import useHttp from "../../hooks/use-http";
import { editSubject, getSubjectById } from "../../lib/api";
import BackdropLoading from "../UI/BackdropLoading";
import swal from "sweetalert";
import LinearLoading from "../UI/LinearLoading";

const EditSubjectForm = (props) => {
  const {
    sendRequest: getSubject,
    error: errorGet,
    data: dataGet,
    status: statusGet,
  } = useHttp(getSubjectById, true);
  useEffect(() => {
    getSubject(props.maMH);
  }, [props.maMH, getSubject]);

  if (statusGet === "pending") return <BackdropLoading />;
  if (errorGet) return <p>errorGet</p>;

  return (
    <Dialog open={props.open} onClose={props.onClose}>
      <EditSubjectContent
        onReload={props.onReload}
        onClose={props.onClose}
        subject={dataGet}
      />
    </Dialog>
  );
};

const EditSubjectContent = (props) => {
  const { sendRequest, status, error, data } = useHttp(editSubject);
  React.useEffect(() => {
    if (status === "completed") {
      props.onClose();
      console.log(data);
      if (data) {
        swal(
          "Cập nhật thành công!",
          "Bạn đã cập nhật môn học thành công!",
          "success"
        );
        props.onReload();
      } else if (error) swal("Đã có lỗi xảy ra", error, "error");
    }
  }, [data, error, status, props]);
  const editSubjectSubmitHandler = (event) => {
    event.preventDefault();
    console.log({
      maMH: props.subject.maMH,
      tenMH: enteredSubject,
      diemDat: enteredPoint,
    });
    sendRequest({
      maMH: props.subject.maMH,
      tenMH: enteredSubject,
      diemDat: enteredPoint,
    });
  };
  const [enteredSubject, setEnteredSubject] = useState(props.subject.tenMH);
  const [enteredPoint, setEnteredPoint] = useState(props.subject.diemDat);
  const subjectChangeHandler = (event) => {
    setEnteredSubject(event.target.value);
  };
  const pointChangeHandler = (event) => {
    setEnteredPoint(event.target.value);
  };
  return (
    <form onSubmit={editSubjectSubmitHandler}>
      {status === "pending" && <LinearLoading />}
      <DialogTitle>Cập nhật môn học</DialogTitle>
      <DialogContent>
        <Stack spacing={2} sx={{ width: "200px" }}>
          <TextField
            value={enteredSubject}
            onChange={subjectChangeHandler}
            autoFocus
            margin="dense"
            id="tenMH"
            label="Tên môn học"
            type="text"
            variant="outlined"
          />
          <TextField
            value={enteredPoint}
            onChange={pointChangeHandler}
            margin="dense"
            id="diemDat"
            label="Điểm đạt"
            type="number"
            variant="outlined"
          />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button
          type="submit"
          variant="contained"
          disabled={status === "pending"}
        >
          {status === "pending" ? "Đang cập nhật..." : "Cập nhật"}
        </Button>
        <Button disabled={status === "pending"} onClick={props.onClose}>
          Hủy bỏ
        </Button>
      </DialogActions>
    </form>
  );
};

export default EditSubjectForm;
