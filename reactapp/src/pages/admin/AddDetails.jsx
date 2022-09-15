import React, { Component } from 'react'

import { Link } from 'react-router-dom';
import productService from '../../services/product.service';

class AddDetails extends Component {
    constructor(props) {
        super(props)
        this.state={
            id: '',
            name: '',
            type: '',
            price: '',
            description:''

        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeDescriptionHandler=this.changeDescriptionHandler.bind(this);
        this.changeLinkHandler=this.changeLinkHandler.bind(this);       
        this.changePriceHandler=this.changePriceHandler.bind(this);
        this.changeTypeHandler=this.changeTypeHandler.bind(this); 
           
        }
        componentDidMount(){

                productService.saveProducts(this.state.id).then( (res) =>{
                    let product = res.data;
                    this.setState({name: product.name,
                        type: product.type,
                        price:product.price,
                        description:product.description,
                        
                    });
                });
                  
        }

        changeNameHandler= (event) => {
            this.setState({name: event.target.value});
        }
    
        changeTypeHandler= (event) => {
            this.setState({type: event.target.value});
        }

        changeDescriptionHandler= (event) => {
            this.setState({description: event.target.value});
        }
        
        changePriceHandler= (event) => {
            this.setState({price: event.target.value});
        }
        changeLinkHandler= (event) => {
            this.setState({link: event.target.value});
        }
         
        
        saveOrUpdateProduct= (e) => {
            e.preventDefault();
            let product = {name: this.state.name,price: this.state.price,description: this.state.description,link:this.state.link,type:this.state.type};
            console.log('products => ' + JSON.stringify(product));
    
            
                productService.saveProducts(product).then(res =>{
                    this.props.history.push('/display');
                });
            
                
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
                <a class="nav-link" href="index.html">
                    <div class="sb-nav-link-icon"><i class="fas fa-tachometer-alt"></i></div>
                    Dashboard
                </a>
                <div class="sb-sidenav-menu-heading">Interface</div>
                <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                    <div class="sb-nav-link-icon"><i class="fas fa-columns"></i></div>
                    Layouts
                    <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                </a>
                <div class="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                    <nav class="sb-sidenav-menu-nested nav">
                        <a class="nav-link" href="layout-static.html">Static Navigation</a>
                        <a class="nav-link" href="layout-sidenav-light.html">Light Sidenav</a>
                    </nav>
                </div>
                <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                    <div class="sb-nav-link-icon"><i class="fas fa-book-open"></i></div>
                    Pages
                    <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
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
    <br />

</div>
                 <br></br>
                 
                   <div className = "container">
                        <div className = "row">
                            
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <br />
                                
                               <h1 style={{color:"black",textAlign:"center"}}>Add Details</h1>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Product Name </label>
                                            <input placeholder="Product Name" name="firstName" className="form-control" value={this.state.name} onChange={this.changeNameHandler}
                                               />
                                        </div>
                                        <div className = "form-group">
                                            <label> Product Type </label>
                                            <input placeholder="Product Type" name="lastName" className="form-control" value={this.state.type} onChange={this.changeTypeHandler}
                                                />
                                        </div>
                                        <div className = "form-group">
                                            <label>Quoted Price</label>
                                            <input placeholder="Quoted Price" name="emailId" className="form-control"  value={this.state.price} onChange={this.changePriceHandler}
                                               />
                                        </div>
                                        <div className = "form-group">
                                            <label>Product Description </label>
                                            <textarea placeholder="Product Description" name="emailId" className="form-control"  value={this.state.description} onChange={this.changeDescriptionHandler}
                                               />
                                        </div>
                                        <div className = "form-group">
                                            <label>Link for UML,DFD etc</label>
                                            <input placeholder="Link for UML,DFD etc" name="emailId" className="form-control"  value={this.state.link} onChange={this.changeLinkHandler}
                                               />
                                        </div>
                                        <br />
                                    

                                        <button className="btn btn-success"  onClick={this.saveOrUpdateProduct}>Save</button>
                                        <button className="btn btn-danger"  style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            

       </div>
       </div>
       
        )
    }
}

export default AddDetails