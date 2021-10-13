import React from "react";

import Paper from "@mui/material/Paper";
import moment from "moment";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

import InputLabel from "@mui/material/InputLabel";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

import DatePicker from "@mui/lab/DatePicker";
import { useForm, Controller } from "react-hook-form";
const AddStudentForm = () => {
  const { control, handleSubmit } = useForm();
  const submitFormHandler = (data) => {
    console.log(data);
  };
  return (
    <Paper elevation={4} sx={{ padding: "16px" }}>
      <Typography mb="16px" variant="h6" sx={{ fontSize: "14px" }}>
        Thêm học sinh
      </Typography>
      <form onSubmit={handleSubmit(submitFormHandler)}>
        <InputLabel htmlFor="name-input">Họ và tên</InputLabel>
        <Controller
          name="fullName"
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

        <InputLabel>Giới tính</InputLabel>
        <Controller
          name="gender"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <FormControl {...field} component="fieldset">
              <RadioGroup
                aria-label="gender"
                defaultValue="nam"
                name="radio-buttons-group"
              >
                <FormControlLabel value="nam" control={<Radio />} label="Nam" />
                <FormControlLabel value="nữ" control={<Radio />} label="Nữ" />
              </RadioGroup>
            </FormControl>
          )}
        ></Controller>
        <InputLabel htmlFor="address-input">Ngày sinh</InputLabel>

        <Controller
          name="birthday"
          control={control}
          defaultValue=""
          render={({ field }) => <BasicDatePicker {...field} />}
        ></Controller>

        <InputLabel htmlFor="address-input">Địa chỉ</InputLabel>
        <Controller
          name="address"
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

        <Button type="submit" variant="contained">
          Thêm
        </Button>
      </form>
    </Paper>
  );
};
const BasicDatePicker = (props) => {
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
};
export default AddStudentForm;
