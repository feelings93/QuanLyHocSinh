import React from "react";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import BCMonHoc from "../components/statistic/bcMonHoc";
import BCHocKy from "../components/statistic/bcHocKy";
const Statistic = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Báo cáo theo môn học" value="1" />
            <Tab label="Báo cáo theo học kì" value="2" />
          </TabList>
        </Box>
        <TabPanel TabPanel value="1">
          <Box>
            <BCMonHoc></BCMonHoc>
          </Box>
        </TabPanel>
        <TabPanel value="2">
          <BCHocKy></BCHocKy>
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default Statistic;
