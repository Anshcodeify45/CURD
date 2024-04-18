import React from 'react'
import { FormControl, FormGroup , InputLabel,Input,Typography, Button ,styled } from '@mui/material'
import { useState } from 'react'
import { addUrl } from './Service/Api'
import { useNavigate } from 'react-router-dom'


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

function AddUser() {

    const [value , setValue] = useState(initialValue);

    const navi = useNavigate();

    const onValuechange = (e) => {
            setValue({...value , [e.target.name]:e.target.value})
            console.log(value);
    }


    const getValue = async () => {
         await addUrl(value);
         navi('/all');
    }

  return (
    <Container>

        <Typography variant='h4'>Add User</Typography>

       <FormControl>
            <InputLabel>Name</InputLabel>
            <Input onChange={(e) => onValuechange(e)} name='name'/>
       </FormControl>

       <FormControl>
            <InputLabel>Username</InputLabel>
            <Input onChange={(e) => onValuechange(e)} name='username'/>
       </FormControl>

       <FormControl>
            <InputLabel>Email</InputLabel>
            <Input onChange={(e) => onValuechange(e)} name='email'/>
       </FormControl>

       <FormControl>
            <InputLabel>Phone</InputLabel>
            <Input onChange={(e) => onValuechange(e)} name='phone'/>
       </FormControl>
       <FormControl>
        <Button variant='contained'   onClick={() => getValue()}>Add User</Button>
       </FormControl>
    </Container>
  )
}

export default AddUser
