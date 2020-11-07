import React, { Component } from 'react'

import {Link} from "react-router-dom"
import {ProductConsumer} from "./context"


export default class Product extends Component {

    render() {
        const {id,title,img}=this.props.product
      
       
         return (
            <div className="col-9 mx-auto col-md-6 col-lg-3 my-3" >
                <div className="card">
                <ProductConsumer>
                {(value) => (
                    <div className="img-container p-5" 
                onClick={() => 
                value.handleDetail(id)
                }>
                

                    <Link to="/room">
                    <img  src={img} alt="product" className="card-img-top"/>

                    </Link>
                         </div>
                )}
                
                </ProductConsumer>
                
                         {/* card footer */}
                         <div className="card-footer d-flex justify-content-between" >
                             <p className="align-self-center mb-0" >
                                 {title}
                             </p>
                         </div>
                </div>
                        
            </div>
                
            
        )
    }
}

