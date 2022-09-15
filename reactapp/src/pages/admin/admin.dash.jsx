import { useEffect, useRef, useState } from 'react';
import ProductService from '../../services/product.service';
import { ProductSave } from '../../components/product-save';
import Product from '../../models/product';
import { ProductDelete } from '../../components/product-delete';
import UserService from '../../services/user.service';
import { Link } from 'react-router-dom';


const AdminDash = () => {

    const[userList,setUserList]=useState([]);
   

    useEffect(()=>{
        UserService.getUsers().then((response)=>{
            setUserList(response.data);
        });
    },[]);

   
   


    return (
        <div>
                    <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">

            <a class="navbar-brand ps-3" href="index.html">Start Bootstrap</a>
            <button class="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i class="fas fa-bars"></i></button>
            
            <form class="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                <div class="input-group">
                    <input class="form-control" type="text" placeholder="Search for..." aria-label="Search for..." aria-describedby="btnNavbarSearch" />
                    <button class="btn btn-primary" id="btnNavbarSearch" type="button"><i class="fas fa-search"></i></button>
                </div>
            </form>

            <ul class="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="fas fa-user fa-fw"></i></a>
                    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="#!">Settings</a></li>
                        <li><a class="dropdown-item" href="#!">Activity Log</a></li>
                        <li><hr class="dropdown-divider" /></li>
                        <li><a class="dropdown-item" href="#!">Logout</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
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
                                Project Templates
                                <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-right"></i></div>
                            </Link>
                            <div class="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                                <nav class="sb-sidenav-menu-nested nav">
                                    <a class="nav-link" href="layout-static.html">Static Navigation</a>
                                    <a class="nav-link" href="layout-sidenav-light.html">Light Sidenav</a>
                                </nav>
                            </div>
                            <Link  to="/prdsave"class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                                <div class="sb-nav-link-icon"><i class="fas fa-book-open"></i></div>
                                Quoted Projects Developed
                                <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-right"></i></div>
                            </Link>
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

                        </div>
                    </div>
                    <div class="sb-sidenav-footer">
                        <div class="small">Logged in as:</div>
                        ADMIN 
                    </div>
                </nav>
            </div>
            <div className='card-body'>
            <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Identity Number</th>
      <th scope="col">Username</th>
      <th scope="col">Name</th>
      <th scope="col">Password</th>
      <th scope="col">Time Created</th>
      <th scope="col">Role</th>
      
    </tr>
  </thead>
  <tbody>

{userList.map((item, ind) =>
    <tr key={item.id}>
        <th scope="row">{ind + 1}</th>
        <td>{item.name}</td>
        <td>{item.role}</td>
        <td>{new Date(item.create_time).toLocaleDateString()}</td>
        <td>
            <button className="btn btn-primary me-1" >
                Edit
            </button>
            <button className="btn btn-danger" >
                Delete
            </button>
        </td>
    </tr>
)}


</tbody>
</table>
</div>
            </div>
            
        </div>
    );
};

export {AdminDash};
