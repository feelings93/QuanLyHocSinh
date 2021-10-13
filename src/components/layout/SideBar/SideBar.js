import React from "react";
import classes from "./SideBar.module.css";
import study from "../../../assets/img/study.svg";
import logo from "../../../assets/img/logo.png";
import TabList from "./TabList";
// import MenuIcon from "@mui/icons-material/Menu";
// import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
const TAB_ITEMS = [
  {
    link: "/home",
    title: "Trang chủ",
    icon: "dashboard",
  },
  {
    link: "/students",
    title: "Học sinh",
    icon: "school",
  },
  {
    link: "/classes",
    title: "Lớp học",
    icon: "people",
  },
  {
    link: "/courses",
    title: "Chương trình học",
    icon: "description",
  },
  {
    link: "/transcript",
    title: "Bảng điểm",
    icon: "assessment",
  },
  {
    link: "/statistic",
    title: "Báo cáo",
    icon: "show_chart",
  },
  {
    link: "/rules",
    title: "Quy định",
    icon: "chat",
  },
];
const SideBar = () => {
  return (
    <>
      <div className={classes["side-bar"]}>
        <Box
          sx={{ display: "flex", justifyContent: "space-between", mb: "32px" }}
        >
          <div className={classes.title}>
            <img className={classes.logo} src={logo} alt="Logo" />
            <label>Eduma</label>
          </div>
          {/* <IconButton
          sx={{ ml: "4px" }}
          size="large"
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton> */}
        </Box>

        <TabList tabItems={TAB_ITEMS} />
        <img src={study} alt="Theme" />
      </div>
      <div className={classes["side-bar--virtual"]}></div>
    </>
  );
};

export default SideBar;
