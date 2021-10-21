import { Route, Redirect, Switch } from "react-router-dom";
import React, { Suspense } from "react";
import "./App.css";
import Header from "./components/layout/Header/Header";
import SideBar from "./components/layout/SideBar/SideBar";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import DateAdapter from "@mui/lab/AdapterMoment";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { viVN } from "@mui/material/locale";
const Home = React.lazy(() => import("./pages/Home"));
const Students = React.lazy(() => import("./pages/Students"));
const Classes = React.lazy(() => import("./pages/Classes"));
const Courses = React.lazy(() => import("./pages/Courses"));
const Transcript = React.lazy(() => import("./pages/Transcript"));
const Statistic = React.lazy(() => import("./pages/Statistic"));
const Regulation = React.lazy(() => import("./pages/Regulation"));


const theme = createTheme(
  {
    palette: {
      primary: { main: "#03c9d7" },
      secondary: { main: "#fc9678" },
      error: { main: "#e46a76" },
      warning: { main: "#fac90f" },
      success: { main: "#00c292" },
    },
    components: {
      MuiIconButton: {
        variants: [
          {
            props: { variant: "dark" },
            style: {
              color: "#949db2",
            },
          },
        ],
      },
      MuiButton: {
        variants: [
          {
            props: { variant: "contained" },
            style: {
              color: "#fff",
            },
          },
        ],
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            marginBottom: "8px",
          },
          input: {
            // padding: "8px 14px",
            border: "",
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            // margin: "8px 0 4px",
            fontWeight: 500,
            fontSize: "14px",
          },
        },
      },
      MuiFormControlLabel: {
        styleOverrides: {
          root: {},
          label: {
            fontWeight: 500,
            fontSize: "14px",
          },
        },
      },
    },
  },
  viVN
);
function App() {
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={DateAdapter}>
        <Box sx={{ display: "flex" }}>
          <SideBar />
          <Box sx={{ flex: "1" }}>
            <Header />
            <main>
              <Suspense
                fallback={
                  <Box
                    sx={{
                      width: "100%",
                      minHeight: "calc(100vh - 48px)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <CircularProgress />
                  </Box>
                }
              >
                <Switch>
                  <Route exact path="/">
                    <Redirect to="/home"></Redirect>
                  </Route>
                  <Route exact path="/home">
                    <Home />
                  </Route>
                  <Route path="/students">
                    <Students />
                  </Route>
                  <Route path="/classes">
                    <Classes />
                  </Route>
                  <Route exact path="/courses">
                    <Courses />
                  </Route>
                  <Route exact path="/transcript">
                    <Transcript />
                  </Route>
                  <Route exact path="/statistic">
                    <Statistic />
                  </Route>
                  <Route exact path="/rules">
                    <Regulation />
                  </Route>
                </Switch>
              </Suspense>
            </main>
          </Box>
        </Box>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
