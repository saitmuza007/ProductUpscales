import React, { Component } from 'react'

import { Link, Route, Routes } from 'react-router-dom';
import productService from '../../services/product.service';
import AddDetails from './AddDetails';

class DisplayDetails extends Component {
    constructor(props) {
        super(props)
        this.state={
            products:[]
        }
        this.addon=this.addon.bind(this);
      

    }
    

    componentDidMount()
    {
      productService.getAllProducts().then((res)=>
      {
          this.setState({products:res.data});
      })
      
    }
    addon()
    {
       <Routes>
           <Route path="/add" element={<AddDetails/>}></Route>
       </Routes>
    }
 
    render() {
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
                           <Link  to="/prdsave"class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                               <div class="sb-nav-link-icon"><i class="fas fa-book-open"></i></div>
                               Product Description
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
   
               <div className='card-body'>

                 
                   <div className="card">
                       <div className="card-header">

                           <div className="row">
                               <div className="col-6">
                                   <h3>All Products</h3>
                               </div>

                               <div className="col-6 text-end">
                                   <button className="btn btn-primary"  onClick={this.addon}>
                                       Create Product
                                   </button>
                               </div>

                           </div>

                       </div>
                       <div className="card-body">
                           <table className="table table-striped table-striped table-dark">

                               <thead>
                               <tr>
                                   <th scope="col">#</th>
                                   <th scope="col">Name</th>
                                   <th scope="col">Price</th>
                                   <th scope="col">Description</th>
                                   <th scope="col">Date</th>
                                   <th scope="col">Action</th>
                                   <th scope="col"></th>
                               </tr>
                               </thead>
                               <tbody>
                                   {
                                       this.state.products.map(
                                        product=>
                                        <tr key={product.id}>
                                            <td>{product.id}</td>
                                            <td>{product.name}</td>
                                            <td>{`$ ${product.price}`}</td>
                                            <td>{product.description}</td>
                                            <td>{new Date(product.create_time).toLocaleDateString()}</td>
                                          
                                            <td><button className='btn btn-primary'>Edit</button></td>
                                            <td><button className='btn btn-danger'>Delete</button></td>
                             
                                        </tr>
                                       )}


                               </tbody>

                           </table>
                       </div>
                   </div>

               </div>
       
       </div>
           

       </div>
       
        )
    }
}

export default DisplayDetails