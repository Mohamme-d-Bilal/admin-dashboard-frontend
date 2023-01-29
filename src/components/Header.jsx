import { FaSignInAlt, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Burger from './Burger';
import logo from '../assests/images/logo.png';

function Header() {
    const { user } = useSelector((state) => state.auth)


    return (
        <header className='header'>
            <div className='logo'>
                <Link to='/'>
                    <img src={logo} alt="" />
                </Link>
            </div>

            <ul>
                {user ? 
                    (<>
                    <Burger/>

                    </>) : 
                    (<>
                    <li>
                        <Link to='/login'>
                            <FaSignInAlt /> Login
                        </Link>
                    </li>
                    <li>
                        <Link to='/register'>
                            <FaUser /> Register
                        </Link>
                    </li>
                    </>)
                }
            </ul>

        </header>
    )
}

export default Header
