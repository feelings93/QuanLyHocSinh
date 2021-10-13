import React from "react";
import { useLocation, Switch, Route } from "react-router-dom";
import Box from "@mui/material/Box";
import StudentsList from "../components/students/StudentsList";
import AddStudentForm from "../components/students/AddStudentForm";

const Students = () => {
  const location = useLocation();
  console.log(`${location.pathname}/add`);
  return (
    <Box
      sx={{ padding: "32px", width: "100%", minHeight: "calc(100vh - 48px)" }}
    >
      <Switch>
        <Route exact path={location.pathname}>
          <StudentsList />
        </Route>
        <Route exact path={`${location.pathname}/add`}>
          <AddStudentForm />
        </Route>
      </Switch>
    </Box>
  );
};

export default Students;
