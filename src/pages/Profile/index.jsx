import React from 'react'
import { Box, Typography } from '@mui/material'
import useMediaQuery from "@mui/material/useMediaQuery";
import TabPanel from '../../components/TabPanel'
const Profile = () => {

const iphoneSE = useMediaQuery("(min-width:300px)");
  
  return (
     <>
         <Box 
         m="40px 30px"
         bgcolor='orange'
         borderRadius='0.4rem'
         sx={{
           gridTemplateColumns: iphoneSE ? "repeat(8, 1fr)" : "repeat(12, 1fr)", 
         }}  
         >
                <Box
                bgcolor='red'
                p='1rem'
                height='15vh'
                >
                    {/* upper picture side */}
                    as
                </Box>
                <Box
                bgcolor='gray'
                p='1rem'
                height='10vh'
                >

                    {/* name side */}
                    Name
                </Box>
                <TabPanel />
         </Box>    
      
     
     
     </>
  )
}

export default Profile