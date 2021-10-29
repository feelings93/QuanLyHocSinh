import React from "react";
import CoursesTable from "./CoursesTable";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import AddCourseForm from "./AddCourseForm";
import EditCourseForm from "./EditCourseForm";
import { useRouteMatch, useHistory } from "react-router-dom";

const CoursesList = () => {
  const history = useHistory();
  const { url } = useRouteMatch();
  const [isAddCourseDialogVisible, setIsAddCourseDialogVisible] =
    React.useState(false);
  const [isEditCourseDialogVisible, setIsEditCourseDialogVisible] =
    React.useState(false);
  const showAddCourseHandler = () => {
    setIsAddCourseDialogVisible(true);
  };
  const hideAddCourseHandler = () => {
    setIsAddCourseDialogVisible(false);
  };
  const showEditCourseHandler = (id) => {
    setIsEditCourseDialogVisible(true);
  };
  const hideEditCourseHandler = () => {
    setIsEditCourseDialogVisible(false);
  };
  const moveToSubjectPage = () => {
    history.push(`${url}/subjects`);
  };
  return (
    <>
      <Breadcrumbs mb="16px" aria-label="breadcrumb">
        <Typography color="text.primary">Chương trình học</Typography>
      </Breadcrumbs>
      <Box
        mb="16px"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" component="h2" sx={{ fontWeight: 700 }}>
          Danh sách chương trình học
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button onClick={moveToSubjectPage} variant="outlined" color="info">
            Danh sách môn học
          </Button>
          <Button
            onClick={showAddCourseHandler}
            variant="contained"
            color="success"
          >
            Thêm
          </Button>
        </Stack>
      </Box>

      <Grid
        container
        sx={{
          boxShadow: "0px 0px  30px 5px rgba(0, 0, 0, 0.08)",
        }}
      >
        <Grid item xs={12}>
          <CoursesTable onShowEdit={showEditCourseHandler} data={data} />
        </Grid>
      </Grid>
      <AddCourseForm
        open={isAddCourseDialogVisible}
        onClose={hideAddCourseHandler}
      />
      <EditCourseForm
        open={isEditCourseDialogVisible}
        onClose={hideEditCourseHandler}
      />
    </>
  );
};
const data = [
  { id: 1, monHoc: "Lý", khoi: "10", heSo: 1 },
  { id: 2, monHoc: "Hóa", khoi: "10", heSo: 1 },
  { id: 3, monHoc: "Sinh", khoi: "10", heSo: 1 },
  { id: 4, monHoc: "Sử", khoi: "10", heSo: 1 },
  { id: 5, monHoc: "Địa", khoi: "10", heSo: 1 },
  { id: 6, monHoc: "Văn", khoi: "10", heSo: 1 },
  { id: 7, monHoc: "Đạo đức", khoi: "10", heSo: 1 },
  { id: 8, monHoc: "Hóa", khoi: "10", heSo: 1 },
];

export default CoursesList;
