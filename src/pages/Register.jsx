import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaUser } from "react-icons/fa";
import { register, reset } from '../features/auth/authSlice';
import Spinner from '../components/Spinner';
import { storage } from '../firebase';
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage';

function Register() {
  //const [imageUpload, setImageUpload] = useState(null);
  // const [imageList, setImageList] = useState([]); 
  const imageListRef = ref(storage, 'profileImages/')

  const [formData, setFormData] = useState({
    username: '',
    fullname: '',
    address: '',
    longitude: '',
    latitude: '',
    password: '',
    password2: ''
  })

  const { username, fullname, address, longitude, latitude, password, password2 } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector
    (
      (state) => state.auth
    )

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess || user) {
      navigate('/')
    }

    // listAll(imageListRef).then((response) => {
    //   response.items.forEach((item) => {
    //     console.log("item",item)
    //     if(item.fullPath == "profileImages/pngegg.png"){
    //       getDownloadURL(item).then((url) => {
    //         console.log('url',url)
    //         setImageList((prev) => [url]);
    //       })
    //     }
        
    //   })
    // })

    dispatch(reset())


  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    if (username == '' || username == null) {
      toast.error('User Name is required')
    }
    if (fullname == '' || fullname == null) {
      toast.error('Full Name is required')
    }
    if (address == '' || address == null) {
      toast.error('Address is required')
    }
    if (longitude == '' || longitude == null) {
      toast.error('Longitude is required')
    }
    if (latitude == '' || latitude == null) {
      toast.error('Latitude is required')
    }
    if (password == '' || password == null) {
      toast.error('Password is required')
    }
    if (password2 == '' || password2 == null) {
      toast.error('Confirm Password')
    }
    if (
      (password != '' && password != null) &&
      (password2 != '' && password2 != null) &&
      (password !== password2)) {
      toast.error('Passwords do not match')
    }
    // if (imageUpload == null) {
    //   toast.error('Upload an image')
    // }
    else {
      const userData = {
        username,
        fullname,
        location: {
          address,
          coordinates: [latitude, longitude]
        },
        password,
      }

      // const imageRef = ref(storage, `profileImages/${imageUpload.name}`)
      // const a = await uploadBytes(imageRef, imageUpload)
      // console.log(a)

      dispatch(register(userData))
    }
  }

  if (isLoading) {
    return <Spinner />
  }

  return <>
    <section className="heading">
      {/* {imageList((url) => {
        return <img src={url}/>
      })} */}
      <h1>
        <FaUser /> Register
      </h1>
      <p>Please create an account</p>
    </section>

    <section className="form">
      <form onSubmit={onSubmit}>

        <div className="form-group">
          <input
            className="form-control"
            type="text"
            id="username"
            name="username"
            value={username}
            placeholder='Enter your username'
            onChange={onChange}
            required
          />
        </div>

        <div className="form-group">
          <input
            className="form-control"
            type="name"
            id="fullname"
            name="fullname"
            value={fullname}
            placeholder='Enter your full name'
            onChange={onChange}
            required
          />
        </div>

        <div className="form-group">
          <input
            className="form-control"
            type="text"
            id="address"
            name="address"
            value={address}
            placeholder='Enter your address'
            onChange={onChange}
            required
          />
        </div>

        <div className="form-group">
          <input
            className="form-control"
            type="number"
            id="latitude"
            name="latitude"
            value={latitude}
            placeholder='Enter latitude'
            onChange={onChange}
            required
          />
        </div>

        <div className="form-group">
          <input
            className="form-control"
            type="number"
            id="longitude"
            name="longitude"
            value={longitude}
            placeholder='Enter longitude'
            onChange={onChange}
            required
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
            required
          />
        </div>

        <div className="form-group">
          <input
            className="form-control"
            type="password"
            id="password2"
            name="password2"
            value={password2}
            placeholder='Confirm password'
            onChange={onChange}
            required
          />

          {/* <input
            type="file"
            onChange={(event) => { setImageUpload(event.target.files[0]) }}
          /> */}

        </div>

        <div className="form-group">
          <button
            type="submit"
            className="btn btn-block"
          >
            Submit
          </button>
        </div>

      </form>
    </section>

  </>
}

export default Register
