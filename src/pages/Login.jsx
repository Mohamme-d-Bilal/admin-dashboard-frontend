import { useState, useEffect } from "react";
import { FaSignInAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login, reset } from '../features/auth/authSlice';
import Spinner from '../components/Spinner';
import axios from "axios";


function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  // axios.get('http://143.198.40.40:5002/users/test')
  // .then((response) => {
  //   console.log("Test Axios")
  //   console.log(response)
  //   setData(response.data) 
  // }).catch((error) => toast.error(error));

  const {username, password} = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector
    (
      (state) => state.auth
    )

  useEffect(() => {
    if(isError) {
      toast.error(message)
    } 
      
    if(isSuccess || user) {
      navigate('/')
    }

    dispatch(reset())


  }, [user, isError, isSuccess, message, navigate, dispatch] ) 

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const userData = {
      username,
      password,
    }

    dispatch(login(userData))
  }

  if(isLoading) {
    return <Spinner/>
  }

  return <>
    <section className="heading">
      <h1>
        <FaSignInAlt /> Login
      </h1>
    </section>

    <section className="form">
      <form onSubmit={onSubmit}>

        <div className="form-group">
          <input
            className="form-control"
            type="name"
            id="username" 
            name="username" 
            value={username} 
            placeholder='Enter your username' 
            onChange={onChange}
          />

        </div>

        <div className="form-group">
          <input
            className="form-control"
            type="password"
            id="password" 
            name="password" 
            value={password} 
            placeholder='Enter your password' 
            onChange={onChange}
          />
        </div>

        <div className="form-group">
          <button 
            type="submit"
            className="btn btn-block"
          >
            Login
          </button>
        </div>

      </form>
    </section>

  </>
}

export default Login
