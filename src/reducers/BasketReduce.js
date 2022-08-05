import { Types } from "../actions/BasketActions";

export const BasketInit={
    products:[
        {id:1,name:"Kalyptio Pen",price:5.00,code:"PEN",free:"0"},
        {id:2,name:"Kalyptio T-Shirt",price:20.00,code:"TSHIRT"},
        {id:3,name:"Kalyptio Coffee Mug",price:7.50,code:"MUG"}
    ],
    basket:[]
}

export function basketReducer(state, action){
    switch (action.type) {
        case Types.add_to_basket:{
            let newItem = state.products.find(product=>product.id === action.payload);
            let iteminBasket = state.basket.find((item)=>item.id===newItem.id); 
            return iteminBasket ?{...state,basket:state.basket.map((item)=>item.id === newItem.id && item.code === 'PEN' && item.quantity % 3 === 0 ?
            {...item,quantity: item.quantity +1,freeitem:item.freeitem+1}:{...state,basket:state.basket.map((item)=>item.id === newItem.id ?
                {...state,quantity:item.quantity+1,Tprice:item.Tprice + iteminBasket.Tprice,totalPrice:item.totalPrice + iteminBasket.Tprice}:
                {...state,quantity:item.quantity+10})})}
        :{...state,basket:[...state.basket,{...newItem,quantity:1,freeitem:0,Tprice:newItem.price,totalPrice:newItem.price}]};


        }
        case Types.rm_oneTo_basket:{
            let itemTodelete = state.basket.find((item)=>item.id===action.payload);
            return itemTodelete.quantity > 1 ?
            {...state,basket:state.basket.map((item)=>item.id===action.payload ?{...item, quantity:item.quantity-1}:
            item)}
            :{...state,basket:state.basket.filter((item)=>item.id !== action.payload)};
        }
        case Types.rm_allTo_basket:{
            return{...state,basket:state.basket.filter((item)=>item.id !== action.payload)}
        }
        case Types.clear_basket:
            return BasketInit;
        default:
            return state;
    }
}