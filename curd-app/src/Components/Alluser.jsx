import React, { useState } from 'react'
import { Button, Table , TableBody, TableCell, TableHead, TableRow , styled ,Box } from '@mui/material'
import { getUsers , deleteUser} from './Service/Api'
import { useEffect } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';


const Tabledesign = styled(Table)`
    width:100%;
    margin: 0 auto 0 auto;
`
const Thead = styled(TableRow)`
    background:#000;
    &>th {
        color:#fff;
        font-size:20px;
    }
`
const Tbody = styled(TableRow)`
&>td {
    font-size:20px;
}
`

const Home= styled(Box)`
        width: 100%;  
        height: 92vh;
        margin-down:5%;
        background-image: url('https://img.freepik.com/free-photo/artistic-blurry-colorful-wallpaper-background_58702-8951.jpg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover; 
`


function Alluser() {

        const [user , setUser] = useState([]);

        useEffect(() => {
            getUsersDetails();
        },[]);

        const getUsersDetails= async ()=>{
            let response =await getUsers();
            setUser(response.data);
        }

        const deleteUserdata = async(id) => {
            await deleteUser(id)
            getUsersDetails();
        }

  return (
    <Home>
    <Tabledesign>
      <TableHead>
            <Thead>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Username</TableCell>
                <TableCell>Gmail</TableCell>
                <TableCell>Phone no.</TableCell>
                <TableCell>Update</TableCell>
            </Thead>
      </TableHead>
      <TableBody>
                {
                    user.map(users => (
                        <Tbody>
                            <TableCell>{users.id}</TableCell>
                            <TableCell>{users.name}</TableCell>
                            <TableCell>{users.username}</TableCell>
                            <TableCell>{users.email}</TableCell>
                            <TableCell>{users.phone}</TableCell>
                            <TableCell>
                            <Button component={Link} to={`/edit/${users.id}`} variant="contained" color="success" style={{marginRight:30}}>Edit</Button>
                                <Button variant="contained" startIcon={<DeleteIcon />} color='error' onClick={()=>deleteUserdata(users.id)}>Delete</Button>
                            </TableCell>
                        </Tbody>
                    ))
                }
            </TableBody>
    </Tabledesign>
    </Home>
  )
}

export default Alluser
