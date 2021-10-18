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
const ClassList = (props) => {
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
  const filteredClasses = DUMMY_CLASS.filter((e) => e.khoi === grade);
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
const DUMMY_CLASS = [
  {
    id: 1,
    khoi: 10,
    tenLop: "10A1",
    siSo: 40,
  },
  {
    id: 2,
    khoi: 10,
    tenLop: "10A2",
    siSo: 36,
  },
  {
    id: 3,
    khoi: 10,
    tenLop: "10A3",
    siSo: 38,
  },
  {
    id: 4,
    khoi: 10,
    tenLop: "10A4",
    siSo: 40,
  },
  {
    id: 5,
    khoi: 10,
    tenLop: "10A5",
    siSo: 36,
  },
  {
    id: 6,
    khoi: 10,
    tenLop: "10A6",
    siSo: 38,
  },
  {
    id: 7,
    khoi: 10,
    tenLop: "10A7",
    siSo: 40,
  },
  {
    id: 8,
    khoi: 10,
    tenLop: "10A8",
    siSo: 36,
  },
  {
    id: 9,
    khoi: 10,
    tenLop: "10A9",
    siSo: 38,
  },
  {
    id: 10,
    khoi: 11,
    tenLop: "11A1",
    siSo: 40,
  },
  {
    id: 11,
    khoi: 11,
    tenLop: "11A2",
    siSo: 36,
  },
  {
    id: 12,
    khoi: 11,
    tenLop: "11A3",
    siSo: 38,
  },
  {
    id: 13,
    khoi: 11,
    tenLop: "11A4",
    siSo: 40,
  },
  {
    id: 14,
    khoi: 11,
    tenLop: "11A5",
    siSo: 36,
  },
  {
    id: 15,
    khoi: 11,
    tenLop: "11A6",
    siSo: 38,
  },
  {
    id: 16,
    khoi: 11,
    tenLop: "11A7",
    siSo: 40,
  },
  {
    id: 17,
    khoi: 11,
    tenLop: "11A8",
    siSo: 36,
  },
  {
    id: 18,
    khoi: 11,
    tenLop: "11A9",
    siSo: 38,
  },
  {
    id: 19,
    khoi: 12,
    tenLop: "12A1",
    siSo: 40,
  },
  {
    id: 20,
    khoi: 12,
    tenLop: "12A2",
    siSo: 36,
  },
  {
    id: 21,
    khoi: 12,
    tenLop: "12A3",
    siSo: 38,
  },
  {
    id: 22,
    khoi: 12,
    tenLop: "12A4",
    siSo: 40,
  },
  {
    id: 23,
    khoi: 12,
    tenLop: "12A5",
    siSo: 36,
  },
  {
    id: 24,
    khoi: 12,
    tenLop: "12A6",
    siSo: 38,
  },
  {
    id: 25,
    khoi: 12,
    tenLop: "12A7",
    siSo: 40,
  },
  {
    id: 26,
    khoi: 12,
    tenLop: "12A8",
    siSo: 36,
  },
  {
    id: 27,
    khoi: 12,
    tenLop: "12A9",
    siSo: 38,
  },
];
export default ClassList;
