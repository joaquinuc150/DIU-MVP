import React from 'react';
import { Grid, Typography, Button }from '@mui/material';

const RowHistory = (name, date, hour) => {
    return (
        <Grid container className='grid__2'>
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
            <Grid item sx={{float: 'right'}} xs={11}>
                <Button sx={{textTransform: 'none', float: 'right'}} variant="contained" href="/history/1">
                    Ver más
                </Button>
            </Grid> 
        </Grid>
    );
        
};

export default History