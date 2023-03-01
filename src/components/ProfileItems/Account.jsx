import React from 'react'
import {Box, Typography} from '@mui/material'
import TextField from '@mui/material/TextField'
import Button from '../Button'
import { orange } from '@mui/material/colors'

function Account() {
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
       >
              <Typography
              fontWeight='bold'
              >
                Name
              </Typography>
              <TextField
          id="outlined-helperText"
          defaultValue="Mathias Lawson"
          helperText="Enter new user name."
          style={{
            margin: '0.4rem 0rem'
          }}
               />


         <Box
           marginTop='1rem'
           display='flex'
           gap="0.4rem"
         >
            <Button color={"orange"} value={'Reset'}/> 
                 
          </Box>
    
       </Box>

       

       </Box>
      
    </>
  )
}

export default Account