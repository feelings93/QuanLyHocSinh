import React from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
const Rank = (props) => {
  const [diem, setDiem] = React.useState(props.maxDiemChuan);
  const selectDiemHandler = (e) => {
    setDiem(e.target.value);
  };
  return (
    <Grid
      container
      sm={12}
      xs={12}
      justifyContent="space-between"
      padding="0 70px 5px 70px"
      alignItems="center"
    >
      <Grid sm={8} xs={8}>
        <Typography variant="h6" gutterBottom component="div">
          Điểm đạt tiêu chuẩn:
        </Typography>
      </Grid>
      <Grid sm={4} xs={4}>
        <TextField
          id="point-number"
          label="Điểm"
          type="number"
          value={diem}
          onChange={selectDiemHandler}
          disabled={!props.setDis}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
    </Grid>
  );
};

export default Rank;
