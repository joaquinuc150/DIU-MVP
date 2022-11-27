import * as React from 'react';
import { Grid, Typography, TextField } from '@mui/material';

const RowHistory = (name, date, hour) => {
    return (
        <Grid container className='grid'>
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

export const HistorySearch = () =>{
    return(
        <div>
            <Grid container className='inputs'>
                <Grid item xs={4}>
                    <h3>Descripción</h3>
                    <Typography variant="h6" gutterBottom>
                    <TextField id="outlined-basic" label="Filtrar" variant="outlined" />
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <h3>Fecha</h3>
                    <Typography variant="h6" gutterBottom>
                    <TextField id="outlined-basic" label="Filtrar" variant="outlined" />
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <h3>Hora</h3>
                    <Typography variant="h6" gutterBottom>
                    <TextField id="outlined-basic" label="Filtrar" variant="outlined" />
                    </Typography>              
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    {RowHistory("Hora traumatólogo", "14/04/2022", "14:30")}
                    {RowHistory("Toma PCR", "22/01/2022", "11:00")}
                    {RowHistory("Procedimiento ambulatorio", "11/01/2020", "09:00")}
                    {RowHistory("Hora dental", "16/04/2019", "10:00")}
                    {RowHistory("Extracción dental", "10/01/2019", "12:30")}
                    {RowHistory("Hora nutricionista", "26/06/2016", "14:00")}
                </Grid>
            </Grid>
        </div>
        
    )
}

export default HistorySearch