import React from "react";

import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import useHttp from "../../hooks/use-http";
import { addStudent } from "../../lib/api";
import InputLabel from "@mui/material/InputLabel";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

import DatePicker from "@mui/lab/DatePicker";
import { useForm, Controller } from "react-hook-form";
const AddStudentForm = () => {
  const { sendRequest, status } = useHttp(addStudent);
  const { control, handleSubmit } = useForm();
  const submitFormHandler = (data) => {
    sendRequest(data);
  };
  return (
    <Paper elevation={4} sx={{ padding: "16px" }}>
      <Typography mb="16px" variant="h6" sx={{ fontSize: "18px" }}>
        Thêm học sinh
      </Typography>
      <form onSubmit={handleSubmit(submitFormHandler)}>
        <InputLabel mb="8px" htmlFor="name-input">
          Họ và tên
        </InputLabel>
        <Controller
          name="hoTen"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              id="name-input"
              variant="outlined"
            />
          )}
        ></Controller>

        <InputLabel mb="8px">Giới tính</InputLabel>
        <Controller
          name="gioiTinh"
          control={control}
          defaultValue="Nam"
          render={({ field }) => (
            <FormControl {...field} component="fieldset">
              <RadioGroup
                aria-label="gender"
                defaultValue="Nam"
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
          name="ngaySinh"
          control={control}
          defaultValue=""
          render={({ field }) => <BasicDatePicker {...field} />}
        ></Controller>

        <InputLabel htmlFor="address-input">Địa chỉ</InputLabel>
        <Controller
          name="diaChi"
          control={control}
          defaultValue=""
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
          disabled={status === "pending"}
          color="success"
          sx={{ marginTop: "16px" }}
          type="submit"
          variant="contained"
        >
          {status === "pending" ? "Đang thêm..." : "Thêm"}
        </Button>
      </form>
    </Paper>
  );
};
const BasicDatePicker = React.forwardRef((props, ref) => {
  const [value, setValue] = React.useState(null);
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
export default AddStudentForm;
