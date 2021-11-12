import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import React, { useEffect } from "react";
import useHttp from "../../hooks/use-http";
import { getAllStudents } from "../../lib/api";
import StudentsTable from "./StudentsTable";
import { useHistory, useRouteMatch } from "react-router-dom";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import { Search } from "@mui/icons-material";
import Loading from "../UI/Loading";
const StudentsList = () => {
  const { sendRequest, status, data, error } = useHttp(getAllStudents, true);
  const history = useHistory();
  const { url } = useRouteMatch();
  useEffect(() => {
    sendRequest();
  }, [sendRequest]);
  const addStudentHandler = () => {
    history.push(url + "/add");
  };
  if (status === "pending") {
    return <Loading />;
  }
  if (error) {
    return <p className="centered focused">{error}</p>;
  }
  if (status === "completed" && (!data || data.length === 0)) {
    return <p>Không có</p>;
  }
  return (
    <>
      <Breadcrumbs mb="16px" aria-label="breadcrumb">
        {/* <Link underline="hover" color="inherit" href="/students">
          Học sinh
        </Link> */}
        <Typography color="text.primary">Học sinh</Typography>
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
          Danh sách học sinh
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
            onClick={addStudentHandler}
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
          <StudentsTable data={data} />
        </Grid>
      </Grid>
    </>
  );
};

export default StudentsList;
