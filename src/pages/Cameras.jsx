import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import DevicesTable from '../components/DevicesTable';

function Cameras() {
  // const navigate = useNavigate()
  
  // const {user} = useSelector((state) => state.auth)

  // useEffect(() => {
  //   if(!user) {
  //     navigate('/login')
  //   }
  // }, [user, navigate])
  return (
    <div>
      <DevicesTable/>
    </div>
  )
}

export default Cameras
