import React from 'react'
import {Box, Typography} from '@mui/material'
import TextField from '@mui/material/TextField'
import Button from '../Button'
import { orange } from '@mui/material/colors'

function ChangePassword() {
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
       <Box
          width='max-content'
          display='grid'
          gap='2rem'
          gridTemplateColumns='10rem 10rem '
          gridTemplateRows='5rem 5rem '
       >
        {/* Name */}
        <Box>
        <Typography
              fontWeight='bold'
              >
                Current Password
              </Typography>
         <TextField
          id="outlined-helperText"
          placeholder="English"
          helperText="Current Password"
          type="password"
          style={{
            margin: '0.4rem 0rem'
          }}
               />
        </Box>


        <Box>
               {/* Email */}
             <Typography
              fontWeight='bold'
              >
                New Password
              </Typography>
          <TextField
          id="outlined-helperText"
          placeholder="New Password"
          helperText="New Password"
          type="password"
          style={{
            margin: '0.4rem 0rem'
          }}
               />
        </Box>
              

              <Box>
                  {/* Another */}
               <Typography
              fontWeight='bold'
              >
                Confirm New Password
              </Typography>
          <TextField
          id="outlined-helperText"
          placeholder="Confirm New Password"
          type='password'
          helperText="Confirm New Password"
          style={{
            margin: '0.4rem 0rem'
          }}
               />
              </Box>
              
             
            
         <Box
           marginTop='0rem'
           display='flex'
           gap="0.4rem"
         >
            <Button color={"orange"} value={'Reset'}/> 
            <Button color={"red"} value={'Cancel'}/> 
            <Button color={"blue"} value={'Save'}/> 
                 
          </Box>
    
       </Box>

       

       </Box>
      
    </>
  )
}

export default ChangePassword