import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Fab from "@mui/material/Fab";
import { Add } from "@mui/icons-material";
import { useHistory, useParams } from "react-router-dom";
import AddStudentToClassForm from "../components/classes/AddStudentToClassForm";
const EditClass = () => {
  const history = useHistory();
  const moveToClassesHandler = () => {
    history.push("/classes");
  };
  const [isAddStudentDialogVisible, setIsAddStudentDialogVisible] =
    React.useState(false);
  const showAddStudentHandler = () => {
    setIsAddStudentDialogVisible(true);
  };
  const hideAddStudentHandler = () => {
    setIsAddStudentDialogVisible(false);
  };
  const params = useParams();
  return (
    <>
      <Breadcrumbs mb="16px" aria-label="breadcrumb">
        <Link
          sx={{ cursor: "pointer" }}
          onClick={moveToClassesHandler}
          underline="hover"
          color="inherit"
        >
          Lớp học
        </Link>
        <Typography color="text.primary">{"Lớp " + params.id}</Typography>
      </Breadcrumbs>
      <Fab
        sx={{ position: "fixed", bottom: "32px", right: "32px" }}
        color="primary"
        aria-label="add"
        size="large"
        title="Thêm lớp học"
        onClick={showAddStudentHandler}
      >
        <Add sx={{ color: "#fff" }} />
      </Fab>
      <AddStudentToClassForm
        open={isAddStudentDialogVisible}
        onClose={hideAddStudentHandler}
      />
    </>
  );
};

export default EditClass;
