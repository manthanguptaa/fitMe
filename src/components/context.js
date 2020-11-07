import React, { Component } from 'react'
import { Imagesdata } from '../data';

const ProductContext = React.createContext();
// provider
// consumer
 class ProductProvider extends Component {
     state={
         products:Imagesdata,
         detailProduct:Imagesdata
     }
     getItem = id =>{
        const product = this.state.products.find(item=>item.id===id);
        return product;
    }
     handleDetail = (id) => {
        const product = this.getItem(id);
        this.setState(()=> {
            return {detailProduct : product}
        })
       
    }
     
    render() {
        return (
            <ProductContext.Provider 
            value={{
                ...this.state   ,
                handleDetail:this.handleDetail
            }}
            >
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}
const ProductConsumer = ProductContext.Consumer;
export {ProductProvider , ProductConsumer}
