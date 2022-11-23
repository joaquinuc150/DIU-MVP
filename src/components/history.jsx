import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Grid, Typography, Button }from '@mui/material';
import { green } from '@mui/material/colors';
const RowHistory = (name, date, hour) => {
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
                <Typography variant="h6" gutterBottom>
                    {hour}
                </Typography>              
            </Grid>
        </Grid>
    );
} 

export const History = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant="h4" gutterBottom>
                    Historial
                </Typography>
                {RowHistory("Hora traumatologo", "14/04/2022", "14:30")}
                {RowHistory("Toma PCR", "22/01/2022", "11:00")}
                {RowHistory("Hora traumatologo", "14/04/2022", "14:30")}
            </Grid>
            <Grid item sx={{float: 'right'}} xs={12}>
                <Button sx={{textTransform: 'none', float: 'right'}} variant="contained" href="#contained-buttons">
                    Ver más
                </Button>
            </Grid> 
        </Grid>
          );
        
};

export default History