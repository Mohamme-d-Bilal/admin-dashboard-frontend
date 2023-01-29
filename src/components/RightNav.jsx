import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { FaSignOutAlt } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../features/auth/authSlice';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
    margin: 18px 10px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: black;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    li a{
      color: white !important;
    }
    transition: transform 0.3s ease-in-out;    
  }
`;

const RightNav = ({ open }) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }
  return (
    <Ul open={open}>
      <li>
          <Link to='/cameras'>
            Cameras
          </Link>
      </li>
      <li>
        <Link to='/cases'>
            Cases
        </Link>        
      </li>
      <li>
        <Link to='/wardens'>
          Warden
        </Link>
      </li>
      <li>
        <button className='btn' onClick={onLogout}>
          <FaSignOutAlt /> Logout
        </button>
      </li>
    </Ul>
  )
} 

export default RightNav
