import axios from "axios";

const BASE_URL = 'http://143.198.40.40:5002'
const API_URL = '/users/'
const users = [{
    username: 'bilal',
    email: "bilal@gmail.com",
    name: "moahhmed bilal",
    password: "12345"
}]

// Register 
const register = async (userData) => {
    //const response = await axios.post(BASE_URL + API_URL + 'admin/register', userData)
    users.push(userData);
    //console.log("AuthService - register", users)
    const response = users.find(user => user.email == userData.email)
    //if(response.data) {
    if(response){
        localStorage.setItem('user', JSON.stringify(response))
        //localStorage.setItem('user', JSON.stringify(response.data))
    }
    //return response.data
    return response;
}

// Login 
const login = async (userData) => {
    const response = await axios.post(BASE_URL + API_URL + 'app/login', userData,
    {
        headers: {
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        },
    });
    //const response = users.find(user => user.username == userData.username)
    if(response.data) {
    //if(response) {
        //console.log(response)
        localStorage.setItem('user', JSON.stringify(response.data))
        //localStorage.setItem('user', JSON.stringify(response))
    }
    //return response
    return response.data
}

// Logout
const logout = () => {
    localStorage.removeItem('user')
}

const authService = {
    register,
    logout,
    login,
}

export default authService