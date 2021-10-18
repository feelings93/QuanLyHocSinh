import React from "react";
import { useRouteMatch, Switch, Route } from "react-router-dom";
import Box from "@mui/material/Box";
import StudentsList from "../components/students/StudentsList";
import AddStudent from "./AddStudent";
import EditStudent from "./EditStudent";
const Students = () => {
  let { path } = useRouteMatch();
  return (
    <Box
      sx={{ padding: "32px", width: "100%", minHeight: "calc(100vh - 48px)" }}
    >
      <Switch>
        <Route exact path={path}>
          <StudentsList />
        </Route>
        <Route exact path={`${path}/add`}>
          <AddStudent />
        </Route>
        <Route exact path={`${path}/:id`}>
          <EditStudent />
        </Route>
      </Switch>
    </Box>
  );
};

export default Students;
