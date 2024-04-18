
import React from 'react'
import { AppBar , Toolbar , styled} from '@mui/material'
import { NavLink } from 'react-router-dom'


const Header = styled(AppBar)`
    background:	#8B0000;
`

const Blocks = styled(NavLink)`
    font-size:20px;
    margin-right:20px;
    text-decoration:none;
    color:inherit;
`

function Navbar() {
  return (
    <Header position='static'>
      <Toolbar>
            <Blocks to='/'>CURD</Blocks>
            <Blocks to='/all'>All Users</Blocks>
            <Blocks to='/add'>Add Users</Blocks>
      </Toolbar>
    </Header>
  )
}

export default Navbar
