import { Button } from '@mui/material'
import React from 'react'

const ButtonComponent = ({children}) => {
  return (
    <Button
    variant="contained"
    size="small"
    sx={{
      bgcolor: "red",
      borderRadius: "9999px",
      "&:hover": {
        bgcolor: "red",
      },
    }}
  >
    {children}
  </Button>
  )
}

export default ButtonComponent
