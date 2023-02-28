import React from 'react'
import { Box, Typography } from '@mui/material'
import useMediaQuery from "@mui/material/useMediaQuery";
import TabPanel from '../../components/TabPanel'
import {useTheme} from '@mui/material';
import {tokens} from '../../theme'
import profilePicture from '../global/user.jpg'
import './index.css'
const Profile = () => {

const iphoneSE = useMediaQuery("(min-width:300px)");
const theme = useTheme();
const colors = tokens(theme.palette.mode);
  
  return (
     <>
         <Box 
         m="40px 30px"
         borderRadius='0.4rem'
         sx={{
           gridTemplateColumns: iphoneSE ? "repeat(8, 1fr)" : "repeat(12, 1fr)", 
         }}  
         >
                <Box
                
                p='1rem'
                height='20vh'
                className= 'bg'
                >
                
                </Box>
                <Box
                bgcolor= {colors.orange[500]}
                p='1rem'
                height='10vh'
                display='flex'
                gap='7rem'
                >
              <Box>
              <img
                  alt="profile-user"
                  width="90px"
                  height="90px"
                  src={profilePicture}
                  
                  style={{ cursor: "pointer", borderRadius: "50%", position: 'fixed', top: '17rem' }}
              />
            </Box>      

<Box>
             <Typography 
            variant='h4'
            fontWeight='bold'
            color= {colors.black[800]}
             >
                Mathias Lawson
              </Typography>
              <Typography
               color= {colors.black[500]}
               fontWeight='light'
               >
                mathiaslawson70@gmail.com
              </Typography>
           
</Box>        
                </Box>
                <TabPanel />
         </Box>    
      
     
     
     </>
  )
}

export default Profile