import React, { useEffect } from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import { Search } from "@mui/icons-material";
import { useHistory, useParams } from "react-router-dom";
import AddStudentToClassForm from "../components/classes/AddStudentToClassForm";
import StudentOfClassTable from "../components/classes/StudentOfClassTable";
import useHttp from "../hooks/use-http";
import { getClassesById } from "../lib/api";
import Loading from "../components/UI/Loading";

const EditClass = () => {
  const history = useHistory();
  const params = useParams();
  const { sendRequest, status, error, data } = useHttp(getClassesById, true);
  const [isReload, setIsReload] = React.useState(true);
  useEffect(() => {
    if (isReload === true) {
      sendRequest([params.id, 1]);
      setIsReload(false);
    }
  }, [sendRequest, params.id, isReload]);
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
  if (status === "pending") return <Loading />;
  if (error) return <p>{error}</p>;
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
        <Typography color="text.primary">{data.tenLop}</Typography>
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
          Danh sách học sinh lớp {data.tenLop}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <TextField
            id="search"
            label="Tìm kiếm"
            variant="outlined"
            size="small"
            sx={{ marginRight: "8px" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
          <Button
            onClick={showAddStudentHandler}
            variant="contained"
            color="success"
          >
            Thêm
          </Button>
        </Box>
      </Box>
      <Grid
        container
        sx={{
          boxShadow: "0px 0px  30px 5px rgba(0, 0, 0, 0.08)",
        }}
      >
        <Grid item xs={12}>
          <StudentOfClassTable
            maHK={1}
            maLop={data.maLop}
            data={data.hocSinh}
            onReload={() => {
              setIsReload(true);
            }}
          />
        </Grid>
      </Grid>

      {isAddStudentDialogVisible && (
        <AddStudentToClassForm
          maHK={1}
          maLop={data.maLop}
          open={isAddStudentDialogVisible}
          onClose={hideAddStudentHandler}
          onReload={() => {
            setIsReload(true);
          }}
        />
      )}
    </>
  );
};
export default EditClass;
