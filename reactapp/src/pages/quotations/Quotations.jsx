import React, { Component } from 'react'
import quotationService from '../../services/quotation.service';

class Quotations extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            desc: '',
            price: '',
            type:'',
            tdelivery:'',
            cname:''
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeClientHandler = this.changeClientHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.changePriceHandler=this.changePriceHandler.bind(this);
        this.changeTypeHandler=this.changeTypeHandler.bind(this);
        this.changeTimeOfDeliveryHandler=this.changeTimeOfDeliveryHandler.bind(this);
        this.saveOrUpdateEmployee = this.saveOrUpdateEmployee.bind(this);
        

        
    }
    componentDidMount(){

        quotationService.saveQuotation(this.state.id).then( (res) =>{
                let quotation = res.data;
                this.setState({name: quotation.name,
                    desc: quotation.desc,
                    price : quotation.price,
                    type:quotation.type,
                    tdelivery:quotation.tdelivery,
                    cname:quotation.cname
                });
            });
       
    }
    saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        let quotation = {name: this.state.name, desc: this.state.desc, price: this.state.price,type:this.state.type,tdelivery:this.state.tdelivery,cname:this.state.cname};
        console.log('quotation => ' + JSON.stringify(quotation));
            quotationService.saveQuotation(quotation).then(res =>{
                alert("Quotation Sent Successfully")
            });
        }
        changeNameHandler= (event) => {
            this.setState({name: event.target.value});
        }
    
        changePriceHandler= (event) => {
            this.setState({price: event.target.value});
        }
    
        changeTypeHandler= (event) => {
            this.setState({type: event.target.value});
        }
        changeDescriptionHandler= (event) => {
            this.setState({desc: event.target.value});
        }
    
        changeTimeOfDeliveryHandler=(event)=>
        {
            this.setState({tdelivery:event.target.value})
        }
        changeClientHandler=(event)=>
        {
            this.setState({cname:event.target.value})
        }
    

  
    render() {
        return (
            <div className='container'>
                <br></br>
                <div className = "card-body">
                   <div className = "container">
                       <h4 style={{color:"red",textAlign:"center"}}>Raise a Quotation for Personal Product Development By Our Agency</h4>
                        <br />
                        <div className = "row">
                        
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Product Name: </label>
                                            <input placeholder="Product Name" name="Product Name" className="form-control" 
                                            value={this.state.name} onChange={this.changeNameHandler}
                                              />
                                        </div>
                                        <div className = "form-group">
                                            <label> Product Type: </label>
                                            <input placeholder="Product Type" name="Product Type" className="form-control" 
                                            value={this.state.type}  onChange={this.changeTypeHandler}
                                                />
                                        </div>
                                        <div className = "form-group">
                                            <label> Product Delivery Time: </label>
                                            <input placeholder="Product Delivery Time" name="Product Delivery  Time" className="form-control" 
                                                 value={this.state.tdelivery} onChange={this.changeTimeOfDeliveryHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Description: </label>
                                            <input placeholder="Description" name="Description" className="form-control" 
                                            value={this.state.desc} onChange={this.changeDescriptionHandler}
                                                />
                                        </div>

                                        <div className = "form-group">
                                            <label> Client Name </label>
                                            <input placeholder="Client Name" name="Client Name" className="form-control" 
                                             value={this.state.cname} onChange={this.changeClientHandler}
                                                />
                                        </div>
                                        <div className = "form-group">
                                            <label> Quoted Price </label>
                                            <input placeholder="Quoted Price" name="Quoted Price" className="form-control" 
                                             value={this.state.price} onChange={this.changePriceHandler}
                                                />
                                        </div>
<br />
<br />
                                        <button className="btn btn-success" onClick={this.saveOrUpdateEmployee} >Save</button>
                                        <button className="btn btn-danger"  style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
                   </div>
        )
        
    }
}


export default Quotations