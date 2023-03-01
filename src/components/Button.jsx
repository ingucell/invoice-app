import { Typography } from '@mui/material'
import { height } from '@mui/system'
import React from 'react'

function Button({color, value}) {
  return (
    <>
      <button
        style={{
            backgroundColor: color,
            height: '2rem',
            width: 'max-content',
            borderRadius: '0.5rem',
            border: 'none',
            cursor: 'pointer'
        }}
      >
        <Typography color='white'>
        {value}
        </Typography>
           
      </button>
    </>
  )
}

export default Button