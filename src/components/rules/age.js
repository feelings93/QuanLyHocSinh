import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
const Age =(props)=> {
    const [maxage, setMaxAge] = React.useState(props.maxAge);
    const [minage, setMinAge] = React.useState(props.minAge);

    const selectMaxAgeHandler = (e)=>{
        setMaxAge(e.target.value);
    }
    const selectMinAgeHandler = (e)=>{
        setMinAge(e.target.value);
    }
    return (
        <Grid container  sm={12} xs={8} justifyContent="space-between" padding="0 70px 0 70px" alignItems="center">
            <Grid sm={8} xs={4}>
                <Typography  variant="h6" gutterBottom component="div">
                    Độ tuổi học sinh tối đa:
                </Typography>
            </Grid>
            <Grid sm={4} xs={4}>
                <TextField
                    id="agemax-number"
                    label="Tối đa"
                    type="number"
                    value={maxage}
                    onChange={selectMaxAgeHandler}
                    disabled={!props.setDis}
                    InputLabelProps={{
                    shrink: true,
                    }}
                />
            </Grid>
            <Grid sm={8} xs={4}>
                <Typography  variant="h6" gutterBottom component="div">
                    Độ tuổi học sinh tối thiểu:
                </Typography>
            </Grid>
            <Grid sm={4} xs={4}>
                <TextField
                    id="agemin-number"
                    label="Tối thiểu"
                    type="number"
                    value={minage}
                    onChange={selectMinAgeHandler}
                    disabled={!props.setDis}
                    InputLabelProps={{
                    shrink: true,
                    }}
                />
            </Grid>
        </Grid>
    )
}

export default Age
