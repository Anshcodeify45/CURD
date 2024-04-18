import React from 'react'
import { FormControl, FormGroup , InputLabel,Input,Typography, Button ,styled ,Box} from '@mui/material'
import { useState } from 'react'
import { addUrl } from './Service/Api'
import { useNavigate } from 'react-router-dom'


const Container = styled(FormGroup)`
    width:33%;
    margin: 0 auto 0 auto;
    padding-top:5%;
    & > div {
        margin-top: 30px;
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
    <Home> 
           <Container>

                <Typography variant='h4' style={{textAlign:'center',color:'black'}}>Add User</Typography>

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
</Home>
 
  )
}

export default AddUser
