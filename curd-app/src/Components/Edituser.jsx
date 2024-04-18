import React from 'react'
import { FormControl, FormGroup , InputLabel,Input,Typography, Button ,styled ,Box} from '@mui/material'
import { useState } from 'react'
import { getUserData ,editUser } from './Service/Api'
import { useNavigate } from 'react-router-dom'
import { useEffect} from 'react'
import { useParams } from 'react-router-dom'

const Container = styled(FormGroup)`
    width:32%;
    margin: 0 auto 0 auto;
    padding-top:5%;
    & > div {
        margin-top: 20px;
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
         await editUser(value,id);
         navi('/all');
    }

  return (
    <Home>
    <Container>

        <Typography variant='h4' style={{textAlign:'center',color:'black'}}>Edit User</Typography>

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
    </Home>
  )
}

export default Edituser
