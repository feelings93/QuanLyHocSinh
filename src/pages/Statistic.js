import React from 'react';
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/EditOutlined';
import Quanity from '../components/rules/quantity'
import Rank from '../components/rules/rank'
import Age from '../components/rules/age'
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/SaveAltOutlined';
import BCMonHoc from '../components/statistic/bcMonHoc';
import BCHocKy from '../components/statistic/bcHocKy';
const Statistic = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: '100%' }}>
      <TabContext value={value}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
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
