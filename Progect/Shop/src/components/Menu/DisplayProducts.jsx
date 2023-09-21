import React from 'react'
import {ProductElement} from './ProductElemets/ProductElement'
export function DisplayProducts(props){
        const {products} = props;
        
        if(products.lenght > 0){
          return (
            products.map( (product, index) =>
              <ProductElement name={product.Name} price={product.RetailPrice} img={product.Image}/>
            )
          )
        }
}