import React from "react";
import Grid from "@mui/material/Grid";
import ClassItem from "./ClassItem";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import { Add } from "@mui/icons-material";
import AddClassForm from "./AddClassForm";
import { getAllClasses } from "../../lib/api";
import useHttp from "../../hooks/use-http";
const ClassList = (props) => {
  const { sendRequest, status, data, error } = useHttp(getAllClasses, true);
  React.useEffect(() => {
    sendRequest();
  }, [sendRequest]);
  const [grade, setGrade] = React.useState(10);
  const [isAddClassDialogVisible, setIsAddClassDialogVisible] =
    React.useState(false);
  const handleChange = (event) => {
    setGrade(event.target.value);
  };
  const showAddClassHandler = () => {
    setIsAddClassDialogVisible(true);
  };
  const hideAddClassHandler = () => {
    setIsAddClassDialogVisible(false);
  };
  if (status === "pending") return <h4>Đang tải...</h4>;
  if (error) return <h4>Đã có lỗi xảy ra</h4>;
  const filteredClasses = data.filter((e) => e.maKhoi === grade - 9);
  return (
    <>
      <Breadcrumbs mb="16px" aria-label="breadcrumb">
        <Typography color="text.primary">Lớp học</Typography>
      </Breadcrumbs>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          Danh sách lớp học
        </Typography>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="grade">Khối</InputLabel>
            <Select
              labelId="grade"
              id="grade"
              value={grade}
              label="Grade"
              onChange={handleChange}
            >
              <MenuItem value={10}>Khối 10</MenuItem>
              <MenuItem value={11}>Khối 11</MenuItem>
              <MenuItem value={12}>Khối 12</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
      <ul>
        <Grid mb="32px" container spacing={{ xs: 3, md: 6 }} sx={{ flex: 1 }}>
          {filteredClasses.map((e) => (
            <ClassItem class={e} key={e.id} />
          ))}
        </Grid>
      </ul>
      <Fab
        sx={{ position: "fixed", bottom: "32px", right: "32px" }}
        color="primary"
        aria-label="add"
        size="large"
        title="Thêm lớp học"
        onClick={showAddClassHandler}
      >
        <Add sx={{ color: "#fff" }} />
      </Fab>
      <AddClassForm
        open={isAddClassDialogVisible}
        onClose={hideAddClassHandler}
      />
    </>
  );
};
export default ClassList;
