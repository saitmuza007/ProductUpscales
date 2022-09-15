import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import userService from '../../services/user.service';
import UserService from '../../services/product.service';
import authenticationService from '../../services/authentication.service';

export default class Dash extends Component {
  constructor(props)
  {
      super(props)
      this.state={

        users:[]
        
      }
      this.deleteUser=this.deleteUser.bind(this);
  }


  componentDidMount()
  {
    authenticationService.getUsers().then((res) =>
    {
   this.setState({users:res.data});
    });
  }
  deleteUser(id)
  {
    authenticationService.deleteUser(id).then(res=>{
        this.setState({users:this.state.users.filter(user=>user.id !==id)});
    }) ;
  }

  

  

  render() {
    return (
      <div>
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
            <table class="table table-striped table-striped table-dark">
  <thead>
    <tr>
      <th scope="col">Identity Number</th>
      <th scope="col">Username</th>
      <th scope="col">Name</th>
      <th scope="col">Password</th>
      <th scope="col">Time Created</th>
      <th scope="col">Role</th>
      <th scope="col">Actions</th>
      
      <th scope="col"></th>
      
    </tr>
  </thead>
  <tbody>
   {
       this.state.users.map(
           user=>
           <tr key={user.id}>
               <td>{user.id}</td>
               <td>{user.name}</td>
               <td>{user.username}</td>
               <td>{user.password}</td>
               <td>{new Date(user.create_time).toLocaleDateString()}</td>
               <td>{user.role}</td>
               <td><button className='btn btn-primary'>Edit</button></td>
               <td><button className='btn btn-danger' onClick={()=>this.deleteUser(user.id)}>Delete</button></td>

           </tr>
       )
   }
  </tbody>
</table>
</div>
            </div>
            
        </div>
        
      </div>
    )
  }
}
