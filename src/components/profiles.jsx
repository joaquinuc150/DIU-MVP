import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
//import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import Avatar from '@mui/material/Avatar';
import Link from '@mui/material/Link';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';

export const Profiles = () => {
  const theme = useTheme();

  return (
    <Card sx={{ display: 'flex' }}>
      <Box sx={{ bgcolor: '#cfe8fc', height: '220px', width: '220px' }}>
        <Avatar sx={{height: '220px', width: 'auto', fontsize: 22 }}>FG</Avatar>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h6">
            Freddy Garcia
          </Typography>
          <Typography component="div" variant="p">
           59 años
          </Typography>
          <Typography component="div" variant="p">
          <Link href="#">freddy.garcia@gmail.com</Link>
          <IconButton color="primary" aria-label="upload picture" component="label">
            <input hidden accept="image/*" type="file" />
            <ModeEditOutlineIcon />
          </IconButton>
          </Typography>
          <Typography component="div" variant="p">
          <Link href="#">+569 1234 5678</Link>
          <IconButton aria-label="upload picture" component="label">
            <input hidden accept="image/*" type="file" />
            <ModeEditOutlineIcon />
          </IconButton>
          </Typography>
          
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
        </Box>
      </Box>
    </Card>
  );
}



/*


export const Profiles = () => {
  return (
    <React.Fragment>
    <CssBaseline />
    <Container maxWidth="sm">
      <Box sx={{ bgcolor: '#cfe8fc', height: '25vh' }} />
      <Stack direction="row" spacing={2}>
      <Avatar sx={{ bgcolor: deepOrange[500], position:"absolute", display:"flex" }}>FG</Avatar>
    </Stack>
    </Container>
  </React.Fragment>
)};
*/
export default Profiles