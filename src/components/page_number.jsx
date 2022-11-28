import * as React from 'react';
import { Button, Grid } from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export const PageNumber = () => {
    return (
        <Grid container display={'flex'} sx={{paddingTop: '50px'}}>
            <Grid sx={{marginLeft: 'auto', marginRight:'50px'}}>
                <Button sx={{backgroundColor: '#E3F2FD', color: '#1976D2'}} disabled>
                    <NavigateBeforeIcon/>
                </Button>
            </Grid>
            <Grid sx={{height: 'auto'}}>
                <Button sx={{backgroundColor: '#E3F2FD', color: '#1976D2'}}>
                    1 / 1
                </Button>
            </Grid>
            <Grid sx={{marginRight: 'auto', marginLeft: '50px'}}>
                <Button sx={{backgroundColor: '#E3F2FD', color: '#1976D2'}} disabled>
                    <NavigateNextIcon/>
                </Button>
            </Grid>
        </Grid>
    )
}

export default PageNumber;