import { useEffect, useRef, useState } from 'react';
import ProductService from '../../services/product.service';
import { ProductSave } from '../../components/product-save';
import Product from '../../models/product';
import { ProductDelete } from '../../components/product-delete';
import { Link } from 'react-router-dom';


const AdminPage = () => {

    const [productList, setProductList] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(new Product('', '', 0));
    const [errorMessage, setErrorMessage] = useState('');

    const saveComponent = useRef();
    const deleteComponent = useRef();

    useEffect(() => {
        ProductService.getAllProducts().then((response) => {
            setProductList(response.data);
        });
    }, []);

    const createProductRequest = () => {
        setSelectedProduct(new Product('', '', 0));
        saveComponent.current?.showProductModal();
    };

    const editProductRequest = (item) => {
      setSelectedProduct(Object.assign({}, item));
        saveComponent.current?.showProductModal();
    };

    const deleteProductRequest = (product) => {
        setSelectedProduct(product);
        deleteComponent.current?.showDeleteModal();
    };

    const saveProductWatcher = (product) => {
        let itemIndex = productList.findIndex(item => item.id === product.id);

        if (itemIndex !== -1) {
            const newList = productList.map((item) => {
                if (item.id === product.id) {
                    return product;
                }
                return item;
            });
            setProductList(newList);
        } else {
            const newList = productList.concat(product);
            setProductList(newList);
        }
    };

    const deleteProduct = () => {
      ProductService.deleteProduct(selectedProduct).then(_ => {
          setProductList(productList.filter(x => x.id !== selectedProduct.id));
      }).catch(err => {
          setErrorMessage('Unexpected error occurred.');
          console.log(err);
      });

    };

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
            <div className="container">
                <div className="pt-5">

                    {errorMessage &&
                    <div className="alert alert-danger">
                        {errorMessage}
                    </div>
                    }

                    <div className="card">
                        <div className="card-header">

                            <div className="row">
                                <div className="col-6">
                                    <h3 style={{color:"blue"}}>All Products</h3>
                                </div>

                                <div className="col-6 text-end">
                                    <button className="btn btn-primary" onClick={() => createProductRequest()}>
                                        Create Product Template
                                    </button>
                                </div>

                            </div>

                        </div>
                        <div className="card-body">
                            <table className="table table-striped">

                                <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Type</th>
                                    <th scope="col">Link</th>
                                    <th scope="col">Action</th>
                                </tr>
                                </thead>
                                <tbody>

                                {productList.map((item, ind) =>
                                
                                    <tr key={item.id}>
                                        <th scope="row">{ind + 1}</th>
                                        <td>{item.name}</td>
                                        <td>{`$ ${item.price}`}</td>
                                        <td>{new Date(item.createTime).toLocaleDateString()}</td>
                                        <td>{item.type}</td>
                                        <td>{item.link}</td>
                                        <td>
                                            
                                            <button className="btn btn-primary me-1" onClick={() => editProductRequest(item)}>
                                                Edit
                                            </button>
                                            <button className="btn btn-danger" onClick={() => deleteProductRequest(item)}>
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
            </div>

            <ProductSave ref={saveComponent} product={selectedProduct} onSaved={(p) => saveProductWatcher(p)}/>
            <ProductDelete ref={deleteComponent} onConfirmed={() => deleteProduct()}/>

        </div>
    );
};

export {AdminPage};
