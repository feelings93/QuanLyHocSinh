import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { useHistory } from "react-router-dom";
import AddStudentForm from "../components/students/AddStudentForm";
const AddStudent = () => {
  const history = useHistory();
  const moveToStudentsHandler = () => {
    //   event.preventDefault();
    history.push("/students");
  };
  return (
    <>
      <Breadcrumbs mb="16px" aria-label="breadcrumb">
        <Link
          sx={{ cursor: "pointer" }}
          onClick={moveToStudentsHandler}
          underline="hover"
          color="inherit"
        >
          Học sinh
        </Link>
        <Typography color="text.primary">Thêm học sinh</Typography>
      </Breadcrumbs>
      <AddStudentForm />
    </>
  );
};

export default AddStudent;
