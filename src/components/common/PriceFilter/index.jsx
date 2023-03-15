import { Button, Typography , Box } from '@material-ui/core'
import React from 'react'

const PriceFilter = ({ handlePriceFilter }) => {
  return (
    <Box sx={{
      color: "white"
    }}>
        <Typography> Filter by Price </Typography>
        <Button variant='contained' onClick={() => handlePriceFilter('lowToHigh')}>Low to High </Button>
        <Button variant='contained' onClick={() => handlePriceFilter('highToLow')}>High to Low </Button>


    </Box>
  )
}

export default PriceFilter