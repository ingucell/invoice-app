import React from 'react'
import {Box, Typography} from '@mui/material'
import TextField from '@mui/material/TextField'
import Button from '../Button'

function UserPreference() {
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
                Locale
              </Typography>
         <TextField
          id="outlined-helperText"
          defaultValue="English"
          helperText="Edit Language"
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
                Date Format
              </Typography>
          <TextField
          id="outlined-helperText"
          defaultValue="March 1, 2023 (MMMM D, YYYY)"
          helperText="Edit Date Format"
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
                Time Format
              </Typography>
          <TextField
          id="outlined-helperText"
          defaultValue="9:42 PM"
          helperText="Edit Time Format"
          style={{
            margin: '0.4rem 0rem'
          }}
               />
              </Box>
              
               {/* Another 2  */}

               <Box>
               <Typography
              fontWeight='bold'
              >
                Timezone
              </Typography>
          <TextField
          id="outlined-helperText"
          defaultValue="Asia/Kolkata"
          helperText="Edit Timezone"
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

export default UserPreference