import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Link from '@mui/material/Link';
import CheckIcon from '@mui/icons-material/Check';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';

export const EditInfo = ({data}) => {
  const handleInput = () => { 
    setEdit(<input ref={inputRef} type="text " />)
    setButton(<IconButton color="primary" component="label" onClick={handleSubmit}>
    <CheckIcon />
    </IconButton>)
  }
  
  const handleSubmit = () => {
    setEdit(<Link href="#">{inputRef.current.value}</Link>)
    setButton(<IconButton color="primary" component="label" onClick={handleInput}>
    <ModeEditOutlineIcon />
    </IconButton>)
  }

  const inputRef = React.useRef(null)
  const [edit, setEdit] = React.useState(<Link href="#">{data}</Link>)
  const [button, setButton] = React.useState(
  <IconButton color="primary" component="label" onClick={handleInput}>
  <ModeEditOutlineIcon />
  </IconButton>
  )


  return (
      <Typography component="div" variant="p">
          {edit}
          {button}
      </Typography>
  )
}


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
          <Typography component="div" variant="p" marginBottom='20px'>
           {edad} años
          </Typography>
          <EditInfo data={email} />
          <EditInfo data={tel} />
          
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
        </Box>
      </Box>
    </Card>
  );
}

export default Profiles