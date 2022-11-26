import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Link from '@mui/material/Link';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';

export const Profiles = ({name, family, edad, email, tel, image}) => {
  const theme = useTheme();

  return (
    <Card sx={{ display: 'flex', margin: 'auto', width: '50%', padding: '20pt'}}>
      <Box sx={{height: '200px', width: '200px', display: 'flex', padding:'5px'}}>
        <Avatar src={image} sx={{bgcolor: '#1565C0', height: '190px', width: '190px'}}></Avatar>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h6">
            {name}
          </Typography>
          <Typography component="div" variant="p">
           {family}
          </Typography>
          <Typography component="div" variant="p">
           {edad} años
          </Typography>
          <Typography component="div" variant="p" sx={{ marginTop: '10px'}}>
          <Link href="#">{email}</Link>
          <IconButton color="primary" aria-label="upload picture" component="label">
            <input hidden accept="image/*" type="file" />
            <ModeEditOutlineIcon />
          </IconButton>
          </Typography>
          <Typography component="div" variant="p">
          <Link href="#">{tel}</Link>
          <IconButton color="primary" aria-label="upload picture" component="label">
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