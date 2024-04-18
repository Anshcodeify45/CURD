import axios from 'axios'


const API_URL = 'http://localhost:3002/user';


export const addUrl = async (data) => {
            try {
               await axios.post(API_URL , data) 
            } catch (error) {
                console.log("Error while catching data" , error.message)
            }
}


export const getUsers = async () => {
    try{
        return await axios.get(API_URL);
    }catch(error){
        console.log("Error while getting user data" , error.message);
    }
}

export const getUserData = async (data) => {
    try{
        return await axios.get(`${API_URL}/${data}`);
    }catch(error){
        console.log("Error while getting user data" , error.message);
    }
}

export const editUser = async (data , id) => {
    try{
            return await axios.put(`${API_URL}/${id}`,data)
    }catch(error){
        console.log('error while getting edditing data',error.message)
    }
}


export const deleteUser = async (id) => {
    try{
        return await axios.delete(`${API_URL}/${id}`)
    }catch(error){
        console.log('error while deleting data',error.message)
    }
}