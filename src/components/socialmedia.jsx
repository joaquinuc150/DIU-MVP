import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

export const SocialMedia = () =>{
    return(
        <div>
            <FacebookRoundedIcon  color = 'primary'  fontSize="large">
        </FacebookRoundedIcon>
        <TwitterIcon color='primary' fontSize='large'></TwitterIcon>
        <InstagramIcon color='primary' fontSize='large'></InstagramIcon>
        </div>
        
        );

        };
export default SocialMedia
