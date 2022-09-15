import logo from '../logo.svg';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearCurrentUser } from '../store/actions/user';
import { Role } from '../models/role';


const NavBar = () => {

    const currentUser = useSelector(state => state.user);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logout = () => {
        dispatch(clearCurrentUser());
        navigate('/login');
    };

    return (
        <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <a href="" className="navbar-brand ms-1">
                <img src="assets/images/upscale_logo_new@2x.png" className="App-logo" alt="logo" />
            
            </a>

            <div className="navbar-nav me-auto">
                {currentUser?.role === Role.ADMIN &&
                <li className="nav-item">
                    <NavLink to="/admin" className="nav-link">
                        List of Project Page
                    </NavLink>
                </li>
                


                }
                {currentUser?.role === Role.ADMIN &&
                <li className="nav-item">
                    <NavLink to="/dashboard" className="nav-link">
                        Users Dashboard
                    </NavLink>
                </li>
                


                }
                {currentUser?.role === Role.USER &&
                <li className="nav-item">
                    <NavLink to="/homepage" className="nav-link">
                        Projects
                    </NavLink>
                </li>
                


                }

                {currentUser?.role === Role.USER &&
                <li className="nav-item">
                    <NavLink to="/quotations" className="nav-link">
                        Request a Quoatation
                    </NavLink>
                </li>
                


                }   
                {currentUser?.role === Role.ADMIN &&
                <li className="nav-item">
                    <NavLink to="/homepage" className="nav-link">
                        Project Display
                    </NavLink>
                </li>
                


                }
                {currentUser?.role === Role.ADMIN &&
                <li className="nav-item">
                    <NavLink to="/displayQuotes" className="nav-link">
                        Quoatation Display 
                    </NavLink>
                </li>
                


                }


                <li className="nav-item">
                    <NavLink to="/home" className="nav-link">
                        Home
                    </NavLink>
                </li>
            </div>

            {!currentUser &&
            <div className="navbar-nav ms-auto">
                <li className="nav-item">
                    <NavLink to="/register" className="nav-link">
                        Sign Up
                    </NavLink>
                </li>
                <li className="nav-item" >
                    <NavLink to="/login" className="nav-link" target="_blank">
                        Sign In
                    </NavLink>
                </li>
                <li className="nav-item" >
                    <NavLink to="/homepage" className="nav-link" target="_blank">
                        Projects
                    </NavLink>
                </li>
            </div>
            }

            {currentUser &&
            <div className="navbar-nav ms-auto">
                <li className="nav-item">
                    <NavLink to="/profile" className="nav-link">
                        {currentUser.name}
                    </NavLink>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link btn btn-danger" onClick={() => logout()} >
                        Sign Out
                    </a>
                </li>
            </div>
            }


        </nav>
        
        </div>
    );
};

export {NavBar};
