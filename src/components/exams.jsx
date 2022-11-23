import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Button, Grid, Typography }from '@mui/material';

const RowExams = (name, date) => {
    return (
        <Grid container>
            <Grid item xs={4}>
                <Typography variant="h6" gutterBottom>
                    {name}
                </Typography>
            </Grid>
            <Grid item xs={4}>
                <Typography variant="h6" gutterBottom>
                    {date}
                </Typography>
            </Grid>
            <Grid item xs={4}>
                <Button sx={{textTransform: 'none'}} variant="contained" href="#contained-buttons">
                    Ver
                </Button>
            </Grid>
        </Grid>
    )
} 

export const Exams = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant="h4" gutterBottom>
                    Resultados de examenes
                </Typography>
                {RowExams("Radiografia dental", "17/05/2022")}
                {RowExams("Toma de sangre", "17/05/2022")}
                {RowExams("Radiografia Dental", "17/05/2022")}
            </Grid>
        </Grid>
    )
};

export default Exams