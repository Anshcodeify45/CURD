import React from 'react'
import { Box ,Typography,styled } from '@mui/material'

const Homepage = styled(Box)`
width: 100%;  
height: 95vh;
background-image: url('https://www.quirks.com/storage/attachments/613bad2caf255b74f9652da1/613bad41af255b74f9655266/original/Loading%20bar%20almost%20complete%20with%20idea%20beeing%20processed%20on%20a%20light%20bulb%20on%20yellow%20background.jpg');
background-position: center;
background-repeat: no-repeat;
background-size: cover; 
& > h2{
    padding-top:5px;
    margin-left:5%;
    color:#fff;
}
`

function CURD() {
  return (
    <Homepage>
      <Typography variant='h2'>Hello everyone,</Typography>
      <Typography variant='h2'>welcome to C-U-R-D React app...</Typography>
    </Homepage>
  )
}

export default CURD
