import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { useHistory, useParams } from "react-router-dom";
import EditStudentForm from "../components/students/EditStudentForm";
// import useHttp from "../hooks/use-http";
// import { getStudentById } from "../lib/api";
const EditStudent = () => {
  const history = useHistory();
  const params = useParams();
  alert(params.id);
  // const { sendRequest, status, data, error } = useHttp(getStudentById, true);
  const moveToStudentsHandler = () => {
    history.push("/students");
  };

  // React.useEffect(() => {
  //   sendRequest(params.id);
  // }, [sendRequest, params.id]);

  // if (status === "pending") {
  //   return <p>Loading...</p>;
  // }
  // if (error) {
  //   history.push("/students");
  // }
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
        <Typography color="text.primary">Sửa học sinh</Typography>
      </Breadcrumbs>
      <EditStudentForm
        student={{ hoTen: "", ngaySinh: "", diaChi: "", gioiTinh: "" }}
      />
    </>
  );
};

export default EditStudent;
