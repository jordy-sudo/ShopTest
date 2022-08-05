import React, { useReducer } from 'react'
import { BasketInit, basketReducer } from '../reducers/BasketReduce'
import ProductItem from './ProductItem';
import BasketItem from './BasketItem';
import { Types } from '../actions/BasketActions';

const BasketCar = () => {
  const [state, dispatch] = useReducer(basketReducer, BasketInit);
  const {products,basket}=state;
  const addToBasket=(id)=>{
    dispatch({type:Types.add_to_basket, payload:id});
  };
  const rmToBasket=(id,all= false)=>{
    console.log(id,all);
    if(all){
      dispatch({type:Types.clear_basket, payload:id})
    }else{
      dispatch({type:Types.rm_oneTo_basket, payload:id})
    }
  };
  const clearBasket=()=>{
    dispatch({type:Types.clear_basket})
  };
  return (
    <div className='container'>
        <h2 className='row'>Basket</h2>
        <h3>Products</h3>
        <article className='box'>
            {products.map((product)=><ProductItem key={product.id} data={product} addToBasket={addToBasket}/>)}
        </article>
        <div className='mt-5'><h2>Basket</h2></div>
        <article className='box'>
            <button className='btn btn-warning' onClick={clearBasket}>Clear Basket</button>
            {
                basket.map((item,index)=> <BasketItem key={index} data={item} rmToBasket={rmToBasket}/>)
            }
        </article>

    </div>
  )
}

export default BasketCar