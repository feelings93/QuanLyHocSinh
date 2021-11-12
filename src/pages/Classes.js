import React from "react";
import Box from "@mui/material/Box";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import ClassList from "../components/classes/ClassList";
import EditClass from "./EditClass";

const Classes = () => {
  let { path } = useRouteMatch();
  return (
    <Box
      sx={{ padding: "32px", width: "100%", minHeight: "calc(100vh - 48px)" }}
    >
      <Switch>
        <Route exact path={path}>
          <ClassList />
        </Route>
        <Route exact path={`${path}/:id`}>
          <EditClass />
        </Route>
      </Switch>
    </Box>
  );
};

export default Classes;
