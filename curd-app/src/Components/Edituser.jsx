import React from 'react'
import { FormControl, FormGroup , InputLabel,Input,Typography, Button ,styled } from '@mui/material'
import { useState } from 'react'
import { getUserData ,editUser } from './Service/Api'
import { useNavigate } from 'react-router-dom'
import { useEffect} from 'react'
import { useParams } from 'react-router-dom'

const Container = styled(FormGroup)`
    width:50%;
    margin: 5% auto 0 auto;
    & > div {
        margin-top: 20px;
    }
`


const initialValue = {
    name:'',
    username:'',
    email:'',
    phone:''
}

function Edituser() {

    const [value , setValue] = useState(initialValue);


    const navi = useNavigate();

    const { id } = useParams();

    useEffect(() => {
        getuserDetails();
    }, [])

    const getuserDetails = async () => {
        const response = await getUserData(id);
        setValue(response.data);
    }

    const onValuechange = (e) => {
            setValue({...value , [e.target.name]:e.target.value})
            console.log(value);
    }


    const getValue = async () => {
         await editUser(id , value);
         navi('/all');
    }

  return (
    <Container>

        <Typography variant='h4'>Edit User</Typography>

       <FormControl>
            <InputLabel>Name</InputLabel>
            <Input onChange={(e) => onValuechange(e)} name='name' value={value.name}/>
       </FormControl>

       <FormControl>
            <InputLabel>Username</InputLabel>
            <Input onChange={(e) => onValuechange(e)} name='username' value={value.username}/>
       </FormControl>

       <FormControl>
            <InputLabel>Email</InputLabel>
            <Input onChange={(e) => onValuechange(e)} name='email' value={value.email}/>
       </FormControl>

       <FormControl>
            <InputLabel>Phone</InputLabel>
            <Input onChange={(e) => onValuechange(e)} name='phone' value={value.phone}/>
       </FormControl>
       <FormControl>
        <Button variant='contained' onClick={()=> getValue()}>Edit User</Button>
       </FormControl>
    </Container>
  )
}

export default Edituser
