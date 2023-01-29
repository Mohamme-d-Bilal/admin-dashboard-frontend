import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import CasesTable from '../components/CasesTable'

function Cases() {
    // const navigate = useNavigate()
  
  // const {user} = useSelector((state) => state.auth)

  // useEffect(() => {
  //   if(!user) {
  //     navigate('/login')
  //   }
  // }, [user, navigate])
  return (
    <div>
     <CasesTable/>
    </div>
  )
}

export default Cases
