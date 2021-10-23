import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import React, { useEffect } from "react";
import TranscriptTable from "./TranscriptTable";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import { Search } from "@mui/icons-material";
import { getAllStudents } from "../../lib/api";
import useHttp from "../../hooks/use-http";
import { useHistory } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

const TranscriptList = () => {
    const [lop, setLop] = React.useState('');
    const [subject, setSubject] = React.useState('');
    const [semester, setSemester] = React.useState('');


    const LopHandleChange = (event) => {
        setLop(event.target.value);
    };
    const   SubjectHandleChange = (event) => {
        setSubject(event.target.value);
    };
    const SemesterHandleChange = (event) => {
        setSemester(event.target.value);
    };
  return (
    <>
      <Grid container sm={12} rowSpacing={4} >
        <Grid item sm={12}>
                <Typography variant="h4" component="h2" sx={{ fontWeight: 700 }}>
                    Phiếu điểm
                </Typography>
            </Grid>
        <Grid container item sm={1} sx={{ alignItems: 'center' }}>
            <Typography   variant="h6" component="h6" sx={{ fontSize:"17px"  }}>
                    Lựa chọn:
            </Typography>
        </Grid>
        <Grid   item sm={5} >
            <FormControl size="small" sx={{minWidth:"90px",marginRight:"8px"}}>
                <InputLabel id="idSelectClass">Lớp*</InputLabel>
                <Select
                labelId="selectClass"
                id="idSelectClass"
                value={lop}
                label="Lớp"
                type="string"
                onChange={LopHandleChange}
                >
                    <MenuItem value={10}>10A1</MenuItem>
                    <MenuItem value={20}>10A2</MenuItem>
                    <MenuItem value={30}>10A3</MenuItem>
                </Select>
            </FormControl>
            <FormControl size="small" sx={{minWidth:"110px",marginRight:"8px"}}>
                <InputLabel id="idSelectClass">Môn học*</InputLabel>
                <Select
                labelId="selectSubject"
                id="idSelectSuject"
                value={subject}
                label="Môn học"
                onChange={SubjectHandleChange}
                >
                    <MenuItem value={10}>Tin học</MenuItem>
                    <MenuItem value={20}>Hoá học</MenuItem>
                    <MenuItem value={30}>Vật lý</MenuItem>
                </Select>
            </FormControl>
            <FormControl size="small" sx={{minWidth:"150px"}}>
                <InputLabel id="idSelectClass">Học kỳ*</InputLabel>
                <Select
                labelId="selectSemester"
                id="idSelectSemester"
                value={semester}
                label="Học kì"
                onChange={SemesterHandleChange}
                >
                    <MenuItem value={10}>1 (2020-2021)</MenuItem>
                    <MenuItem value={20}>2 (2020-2021)</MenuItem>
                    <MenuItem value={30}>1 (2021-2022)</MenuItem>
                </Select>
            </FormControl>
        </Grid>
        <Grid container item sm={6} sx={{ justifyContent: 'flex-end' }} >
        <TextField
        
                id="search"
                label="Tìm kiếm"
                variant="outlined"
                size="small"
                sx={{ marginRight: "6px" }}
                InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                    <Search />
                    </InputAdornment>
                ),
                }}
            />
            <Button
            variant="contained"
            color="success"
            >
            Thêm
          </Button>
        </Grid>    
        <Box
            marginTop="10px"
            width="100%"
            sm={12}
            container
            sx={{
            boxShadow: "0px 0px  30px 5px rgba(0, 0, 0, 0.08)"
            }}
        >    
            <TranscriptTable ></TranscriptTable>

        </Box>
 

      </Grid>


      
    </>
  );
};

export default TranscriptList;