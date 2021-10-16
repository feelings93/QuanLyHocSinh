import React from "react";
import swal from "sweetalert";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

import InputLabel from "@mui/material/InputLabel";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
// import useHttp from "../../hooks/use-http";
// import { addStudent } from "../../lib/api";
import DatePicker from "@mui/lab/DatePicker";
import { useForm, Controller } from "react-hook-form";
const EditStudentForm = (props) => {
  const { student } = props;
  const { control, handleSubmit } = useForm();
  // const { sendRequest, status, error } = useHttp(addStudent);
  const submitFormHandler = (data) => {
    swal({
      text: "Hello world!",
    });
    console.log(data);
    // sendRequest(data);
  };
  return (
    <Paper elevation={4} sx={{ padding: "16px" }}>
      <Typography mb="16px" variant="h6" sx={{ fontSize: "18px" }}>
        Cập nhật thông tin học sinh
      </Typography>
      <form onSubmit={handleSubmit(submitFormHandler)}>
        <InputLabel htmlFor="name-input">Họ và tên</InputLabel>
        <Controller
          name="fullName"
          control={control}
          defaultValue={student.hoTen}
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              id="name-input"
              variant="outlined"
            />
          )}
        ></Controller>

        <InputLabel>Giới tính</InputLabel>
        <Controller
          name="gender"
          control={control}
          defaultValue={student.gioiTinh}
          render={({ field }) => (
            <FormControl {...field} component="fieldset">
              <RadioGroup
                aria-label="gender"
                defaultValue={student.gioiTinh}
                name="radio-buttons-group"
              >
                <FormControlLabel value="Nam" control={<Radio />} label="Nam" />
                <FormControlLabel value="Nữ" control={<Radio />} label="Nữ" />
              </RadioGroup>
            </FormControl>
          )}
        ></Controller>
        <InputLabel>Ngày sinh</InputLabel>

        <Controller
          name="birthday"
          control={control}
          defaultValue="23/11/2020"
          render={({ field }) => (
            <BasicDatePicker initVal={student.ngaySinh} {...field} />
          )}
        ></Controller>

        <InputLabel htmlFor="address-input">Địa chỉ</InputLabel>
        <Controller
          name="address"
          control={control}
          defaultValue={student.diaChi}
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              id="address-input"
              variant="outlined"
            />
          )}
        ></Controller>

        <Button
          color="success"
          sx={{ marginTop: "16px" }}
          type="submit"
          variant="contained"
        >
          Cập nhật
        </Button>
      </form>
    </Paper>
  );
};
const BasicDatePicker = React.forwardRef((props, ref) => {
  const [value, setValue] = React.useState(props.ngaySinh);
  const setNewValueHandler = (newValue) => {
    props.onChange(newValue.format("DD/MM/yyyy"));
    setValue(newValue);
  };
  return (
    <DatePicker
      inputFormat="DD/MM/yyyy"
      value={value}
      onChange={setNewValueHandler}
      renderInput={(params) => <TextField {...params} />}
    />
  );
});
export default EditStudentForm;
