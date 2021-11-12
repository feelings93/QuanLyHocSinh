import React from "react";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Stack from "@mui/material/Stack";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const EditDiem = (props) => {

  return (
    <Dialog open={props.open} onClose={props.onClose}>
      <Box margin="10px 25px 0px 22px" display="flex" alignItems="center" justifyContent="space-between">
      <Typography variant="h6" component="h6" fontSize="30px">
            Sửa điểm
       </Typography>      <Typography variant="h6" component="h6" fontSize="20px">
           Môn: {props._monhoc}
       </Typography>
      </Box>  
      
      <DialogContent>

        <Stack spacing={2} sx={{ width: "350px" }}>
        
        <Box display="flex" justifyContent="space-between">
        <Typography variant="h6" component="h1" fontSize="15px">
        ( MaHS: {props._id}) {props._hoten} 
        </Typography>
        <Typography variant="h6" component="h1" fontSize="15px">
            Lớp: {props._lop}
        </Typography>
        </Box>

        
          <TextField
            autoFocus
            margin="dense"
            id="diemmieng"
            label="Điểm miệng"
            type="text"
            variant="outlined"
            value={props._diemmieng}
          />
          <TextField
            margin="dense"
            id="diem15p"
            label="Điểm 15p"
            type="text"
            variant="outlined"
            value={props._diem15p}

          />
           <TextField
            margin="dense"
            id="diem1tiet"
            label="Điểm 1 tiết"
            type="text"
            variant="outlined"
            value={props._diem1t}

          />
           <TextField
            margin="dense"
            id="diemhocky"
            label="Điểm học kỳ"
            type="text"
            variant="outlined"
            value={props._diemhk}

          />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={props.onClose}>
          Thêm
        </Button>
        <Button onClick={props.onClose}>Hủy bỏ</Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditDiem;