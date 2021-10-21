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

const Table_ThamSo =[
  {
    id: 1,
    name:"maxClass",
    value:30     
  },
  {
      id:2,
      name:"minStudent",
      value:"20"
  },
  {
      id:3,
      name:"maxStudent",
      value:"50"
  },
  {
      id:4,
      name:"maxSubject",
      value:"90"
  },
  {
    id:5,
    name:"maxDiemChuan",
    value:8
  },
  {
    id:6,
    name:"maxAge",
    value:20
  },
  {
    id:7,
    name:"minAge",
    value:15
  },
]
const Regulation = () => {
    const [value, setValue] = React.useState("qua");

    const [edit, setEdit] = React.useState(false);
    const handleChange = (event, newValue) => {
      //alert( (Table_Quanity.find((e) => e.name==="maxClass" )).value);
      setValue(newValue);
    };

  
  


  return (
  <Grid container  sm={12} xs={12} alignItems="center" justifyContent="center"   direction="column" marginTop="20px"  >
    <Grid sm={12} xs={12} display="flex" justifyContent="space-between" >
      <h1>Thay đổi qui định</h1>    
      <Box>
      <IconButton aria-label="edit"  color="primary" disabled={edit} onClick={()=>{ setEdit(true)}} >
        <EditIcon />
      </IconButton> 
      </Box>
    </Grid>
    <Grid sm={12} xs={12}>
    <TabContext value={value}  >
        <Box sx={{ minWidth:'420px', maxWidth:"700px",borderRadius:4, borderColor: 'divider' , boxShadow:3,padding:'0 10px 0 10px'}}>
            <TabList  TabList onChange={handleChange} aria-label="lab API tabs example" centered variant="fullWidth">
                <Tab style={{fontSize:"18px"}} label="Số lượng" value="qua" />
                <Tab style={{fontSize:"18px"}} label="Xếp loại" value="rank" />
                <Tab style={{fontSize:"18px"}} label="Độ tuổi" value="age" />
            </TabList>
        </Box>
        <TabPanel  value="qua" >
          <Box
          minWidth='440px'
          padding="25px 0 10px 0" 
          maxWidth="650px"
          sx={{
            boxShadow:3,
            borderRadius:4,
            backgroundColor: '#fff',

            }}
          >
            <Quanity 
            setDis={edit} 
            maxClass={ (Table_ThamSo.find((e) => e.name==="maxClass" )).value } 
            maxStudent ={ Table_ThamSo.find((e) => e.name==="maxStudent" ).value} 
            minStudent={ Table_ThamSo.find((e) => e.name==="minStudent" ).value} 
            maxSubject={ Table_ThamSo.find((e) => e.name==="maxSubject" ).value} 
             >
             </Quanity>
          </Box>
        
        </TabPanel>
        <TabPanel value="rank">
          <Box
          minWidth='440px'
          padding="15px 0 5px 0" 
          maxWidth="650px"
          sx={{
            boxShadow:3,
            borderRadius:4,
            backgroundColor: '#fff',

            }}
          >
            <Rank 
            setDis={edit}
            maxDiemChuan={ (Table_ThamSo.find((e) => e.name==="maxDiemChuan" )).value } 

            >           
            </Rank>
          </Box>
        </TabPanel>
        <TabPanel  value="age">
        <Box
                  minWidth='440px'

          padding="15px 0 5px 0" 
          maxWidth="650px"
          sx={{
            boxShadow:3,
            borderRadius:4,
            backgroundColor: '#fff',

            }}
          >
            <Age 
            setDis={edit}
            maxAge={ (Table_ThamSo.find((e) => e.name==="maxAge" )).value } 
            minAge={ (Table_ThamSo.find((e) => e.name==="minAge" )).value } 
            >

            </Age>
          </Box>

        </TabPanel>
    </TabContext>
    </Grid>
    <Grid sm={12} xs={8}>
    <Button style={{ display: edit ? "" : "none" }} variant="contained" size="Large" endIcon={<SaveIcon />} disabled={!edit} onClick={()=>{setEdit(!edit)}} >
        Lưu lại
      </Button>
    </Grid>
  </Grid>
   
  );
};

export default Regulation;
