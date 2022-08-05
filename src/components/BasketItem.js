import React from 'react'

const basketItem = ({data,rmToBasket}) => {
  let {id,name,price,code,quantity,Tprice,freeitem,totalPrice}=data;
  /*if(code === 'PEN' && quantity % 3 === 0){
    Tprice = Tprice - price
  }else{
    Tprice = price*quantity
  }
  if(code === 'TSHIRT' && quantity>=3){
    Tprice = Tprice - ((25/100)*price)*quantity
  }*/

  return (
    <div className='container'>
      <div className="card">
      <h5 className="card-header">Ar</h5>
        <div className="card-body">
          <h5 className="card-title">{name} {freeitem} {totalPrice}</h5>
          <p className="card-text">${price} x {quantity} =<strong>{Tprice}</strong></p>
          <p className="card-text">{code}</p>
        </div>
      </div>
        <button className='btn btn-warning ' onClick={()=> rmToBasket(id)}>Remove one</button>
        <button className='btn btn-danger' onClick={()=> rmToBasket(id,true)}>Remove all</button>
  
    </div>
  )
}

export default basketItem