import React from 'react'
import {Box, Typography} from '@mui/material'
import TextField from '@mui/material/TextField'
import Button from '../Button'
import { orange } from '@mui/material/colors'
import profilePicture from '../../pages/global/user.jpg'

function Avatar() {
  return (
    <>
    <Box 
      display='flex'
    >

   
       <Box
         display='flex'
         gap='5rem'
         width='50%'
         flexWrap='wrap'
       >
        <Box>
              <Typography
              fontWeight='bold'
              >
                  Name
              </Typography>
              <Typography>
                  Mathias Lawson
              </Typography>
        </Box>
        <Box>
             <Typography
              fontWeight='bold'
             >
                  Email
              </Typography>
              <Typography>
                  mathiaslawson70@gmail.com
              </Typography>
        </Box>
        <Box>
          <Typography
           fontWeight='bold'
          >
                  Username
              </Typography>
              <Typography>
                 Customer
              </Typography>
        </Box>

       </Box>

{/* Right Side */}
       <Box>
       
              <img
                  alt="profile-user"
                  width="140px"
                  height="140px"
                  src={profilePicture}
                  style={{ cursor: "pointer", borderRadius: "50%", position: 'fixed', margin: '0rem 8rem'}}
              />

              
         <Box
           marginTop='10rem'
           display='flex'
           gap="0.4rem"
           marginLeft="7.5rem"
         >
            <Button color={"orange"} value={'Change Avatar'}/> 
            <Button color={"red"} value={'Remove'}/> 
                 
          </Box>
    
       </Box>

       

       </Box>
      
    </>
  )
}

export default Avatar