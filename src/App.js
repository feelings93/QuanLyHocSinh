import { Route, Redirect, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/layout/Header/Header";
import SideBar from "./components/layout/SideBar/SideBar";
import Box from "@mui/material/Box";
import Home from "./pages/Home";
import Students from "./pages/Students";
import Classes from "./pages/Classes";
import Courses from "./pages/Courses";
import Transcript from "./pages/Transcript";
import Statistic from "./pages/Statistic";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    primary: { main: "#03c9d7" },
    secondary: { main: "#fc9678" },
    error: { main: "#e46a76" },
    warning: { main: "#fac90f" },
    success: { main: "#00c292" },
  },
  components: {
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
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <SideBar />
        <Box sx={{ flex: "1" }}>
          <Header />
          <main>
            <Switch>
              <Route exact path="/">
                <Redirect to="/home"></Redirect>
              </Route>
              <Route exact path="/home">
                <Home />
              </Route>
              <Route exact path="/students">
                <Students />
              </Route>
              <Route exact path="/classes">
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
            </Switch>
          </main>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
