import React from 'react'

const ProductItem = ({data,addToBasket}) => {
  let{id,name,price,code} = data;  
  return (
    <div className='container'>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Code</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">{id}</th>
              <td>{code}</td>
              <td>{name}</td>
              <td>${price}</td>
            </tr>
            
          </tbody>
        </table>
 
        <button className='btn btn-success' onClick={()=>addToBasket(id)}>Add</button>
    </div>
  )
}

export default ProductItem