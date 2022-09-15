import { useEffect, useState } from 'react';
import PurchaseService from '../../services/purchase.service';
import { useDispatch, useSelector } from 'react-redux';
import { Role } from '../../models/role';
import UserService from '../../services/user.service';
import { clearCurrentUser } from '../../store/actions/user';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Profile = () => {

    const [purchaseList, setPurchaseList] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const currentUser = useSelector(state => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        PurchaseService.getAllPurchaseItems().then((response) => {
            setPurchaseList(response.data);
        });
    }, []);

    const changeRole = () => {

        const newRole = currentUser.role === Role.ADMIN ? Role.USER : Role.ADMIN;

        UserService.changeRole(newRole).then(() => {
           //clear session
            dispatch(clearCurrentUser());
            navigate('/login');
        }).catch((err) => {
            setErrorMessage('Unexpected error occurred.');
            console.log(err);
        });
    };

    return (
        <div>
            <div id="layoutSidenav">
            <div id="layoutSidenav_nav">
                <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                    <div class="sb-sidenav-menu">
                        <div class="nav">
                            <div class="sb-sidenav-menu-heading">Core</div>
                            <Link to='/dashboard' class="nav-link">
                                <div class="sb-nav-link-icon"><i class="fas fa-tachometer-alt"></i></div>
                                User Details
                            </Link>
                            <div class="sb-sidenav-menu-heading">Interface</div>
                            <Link to='/profile' class="nav-link collapsed">
                                <div class="sb-nav-link-icon"><i class="fas fa-columns"></i></div>
                                Hired Products 
                                <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-right"></i></div>
                            </Link>
                            <div class="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                                <nav class="sb-sidenav-menu-nested nav">
                                    <a class="nav-link" href="layout-static.html">Static Navigation</a>
                                    <a class="nav-link" href="layout-sidenav-light.html">Light Sidenav</a>
                                </nav>
                            </div>
                            <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                                <div class="sb-nav-link-icon"><i class="fas fa-book-open"></i></div>
                                Pages
                                <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-right"></i></div>
                            </a>
                            <div class="collapse" id="collapsePages" aria-labelledby="headingTwo" data-bs-parent="#sidenavAccordion">
                                <nav class="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                                    <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseAuth" aria-expanded="false" aria-controls="pagesCollapseAuth">
                                        Authentication
                                        <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                                    </a>
                                    <div class="collapse" id="pagesCollapseAuth" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                                        <nav class="sb-sidenav-menu-nested nav">
                                            <a class="nav-link" href="login.html">Login</a>
                                            <a class="nav-link" href="register.html">Register</a>
                                            <a class="nav-link" href="password.html">Forgot Password</a>
                                        </nav>
                                    </div>
                                    <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseError" aria-expanded="false" aria-controls="pagesCollapseError">
                                        Error
                                        <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                                    </a>
                                    <div class="collapse" id="pagesCollapseError" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                                        <nav class="sb-sidenav-menu-nested nav">
                                            <a class="nav-link" href="401.html">401 Page</a>
                                            <a class="nav-link" href="404.html">404 Page</a>
                                            <a class="nav-link" href="500.html">500 Page</a>
                                        </nav>
                                    </div>
                                </nav>
                            </div>
                            <div class="sb-sidenav-menu-heading">Addons</div>
                            <a class="nav-link" href="charts.html">
                                <div class="sb-nav-link-icon"><i class="fas fa-chart-area"></i></div>
                                Charts
                            </a>
                            <a class="nav-link" href="tables.html">
                                <div class="sb-nav-link-icon"><i class="fas fa-table"></i></div>
                                Tables
                            </a>
                        </div>
                    </div>
                    <div class="sb-sidenav-footer">
                        <div class="small">Logged in as:</div>
                        ADMIN 
                    </div>
                </nav>
            </div>
            

            <div className='container'>
            <br />
            <br />
                {errorMessage &&
                <div className="alert alert-danger">
                    {errorMessage}
                </div>
                }

                <div className="card">
                    <div className="card-header">

                        <div className="row">
                            <div className="col-6">
                                <h3 style={{color:'red'}}>Products for development </h3>
                            </div>
                            <div className="col-6 text-end">
                                <strong style={{color:"black"}}>Current role is </strong><strong  style={{color:"red"}}>{currentUser?.role} </strong>
                                <button className="btn btn-info" onClick={() => changeRole()}>
                                    Log out 
                                </button>
                            </div>
                        </div>

                    </div>
                    <div className="card-body">
                        <table className="table table-striped">

                            <thead>
                            <tr>
                                <th scope="col">S.No</th>
                                <th scope="col">Product Name</th>
                                <th scope="col">Product Id </th>
                                <th scope="col">Quoted Price</th>
                                <th scope="col">User Id</th>
                            
                                <th scope="col">Date</th>
                            </tr>
                            </thead>
                            <tbody>

                            {purchaseList.map((item, ind) =>

                                <tr key={ind}>
                                    <th scope="row">{ind + 1}</th>
                                    <td>{item.name}</td>
                                    <td>{item.product_id}</td>
                                    <td>{`$ ${item.price}`}</td>
                                    <td>{item.user_id}</td>
                                    <td>{new Date(item.purchaseTime).toLocaleDateString()}</td>
                                </tr>

                            )}

                            </tbody>

                        </table>
                    </div>
                </div>

            </div>
        </div>
        </div>
    );
};

export {Profile};
