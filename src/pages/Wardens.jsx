import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import WardensTable from '../components/WardensTable';

function Wardens() {
  // const navigate = useNavigate()
  
  // const {user} = useSelector((state) => state.auth)

  // useEffect(() => {
  //   if(!user) {
  //     navigate('/login')
  //   }
  // }, [user, navigate])
  return (
    <div>
      <WardensTable/>
    </div>
  )
}

export default Wardens