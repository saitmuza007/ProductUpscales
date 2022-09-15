import React, { Component } from 'react'
import quotationService from '../../services/quotation.service';
import { Link } from 'react-router-dom';


class QuotationsDisplay extends Component {
    constructor(props) {
        super(props)

        this.state = {
                quotations: []
        }
       
    }



    componentDidMount(){
        quotationService.getAllQuotation().then((res) => {
            this.setState({ quotations: res.data});
        });
    }

  

    render() {
        return (
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
            <div className='container'>
                <marquee behavior="" direction=""><h3 style={{color:"red"}}>List Of Personal Projects Under Queue !!</h3></marquee>
            
                 <h2 className="text-center">Employees List</h2>
                
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th> Product Name</th>
                                    <th> Quoted Price</th>
                                    <th> Product Type</th>
                                    <th> Product Description</th>
                                    <th> Product Delivery</th>
                                    <th>Client Name</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.quotations.map(
                                        quotations => 
                                        <tr key = {quotations.id}>
                                            <td>{quotations.id}</td>
                                             <td> { quotations.name} </td>   
                                             <td> $ {quotations.price}</td>
                                             <td> {quotations.type}</td>
                                             <td> {quotations.desc}</td>
                                             <td> {quotations.tdelivery}months</td>
                                             <td>{quotations.cname}</td>
                                            
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
            </div>
        )
    }
}

export default QuotationsDisplay