import React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import AddSubjectForm from "./AddSubjectForm";
import EditSubjectForm from "./EditSubjectForm";
import SubjectsTable from "./SubjectsTable";
import { useHistory } from "react-router-dom";
import useHttp from "../../hooks/use-http";
import { getAllSubjects } from "../../lib/api";
import Loading from "../UI/Loading";
const SubjectsList = () => {
  const { sendRequest, data, error, status } = useHttp(getAllSubjects, true);
  const [isReload, setIsReload] = React.useState(true);
  React.useEffect(() => {
    if (isReload === true) {
      sendRequest();
      setIsReload(false);
    }
  }, [sendRequest, isReload]);
  const history = useHistory();
  const [isAddSubjectDialogVisible, setIsAddSubjectDialogVisible] =
    React.useState(false);
  const [isEditSubjectDialogVisible, setIsEditSubjectDialogVisible] =
    React.useState(false);
  const [idSubject, setIdSubject] = React.useState(1);
  const showAddSubjectHandler = () => {
    setIsAddSubjectDialogVisible(true);
  };
  const hideAddSubjectHandler = () => {
    setIsAddSubjectDialogVisible(false);
  };
  const showEditSubjectHandler = (id) => {
    setIdSubject(id);
    setIsEditSubjectDialogVisible(true);
  };
  const hideEditSubjectHandler = () => {
    setIsEditSubjectDialogVisible(false);
  };
  const moveToCoursesPageHandler = () => {
    history.push(`/courses`);
  };
  if (status === "pending") return <Loading />;
  if (error) {
    return <p>{error}</p>;
  }
  return (
    <>
      <Breadcrumbs mb="16px" aria-label="breadcrumb">
        <Link
          sx={{ cursor: "pointer" }}
          onClick={moveToCoursesPageHandler}
          underline="hover"
          color="inherit"
        >
          Chương trình học
        </Link>
        <Typography color="text.primary">Môn học</Typography>
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
          Danh sách môn học
        </Typography>
        <Button
          onClick={showAddSubjectHandler}
          variant="contained"
          color="success"
        >
          Thêm
        </Button>
      </Box>

      <Grid
        container
        sx={{
          boxShadow: "0px 0px  30px 5px rgba(0, 0, 0, 0.08)",
        }}
      >
        <Grid item xs={12}>
          <SubjectsTable onShowEdit={showEditSubjectHandler} data={data} />
        </Grid>
      </Grid>

      {isAddSubjectDialogVisible && (
        <AddSubjectForm
          open={isAddSubjectDialogVisible}
          onClose={hideAddSubjectHandler}
          onReload={() => {
            setIsReload(true);
          }}
        />
      )}

      {isEditSubjectDialogVisible && (
        <EditSubjectForm
          maMH={idSubject}
          open={isEditSubjectDialogVisible}
          onClose={hideEditSubjectHandler}
          onReload={() => {
            setIsReload(true);
          }}
        />
      )}
    </>
  );
};
export default SubjectsList;
