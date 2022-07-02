export const CartReducer = (state ={ items: [],open:true, shippingAddress: {} }, action) => {
  switch (action.type) {
    case "open":
      return {
        ...state,
        open: action.payload
      };
    case "Remove_SUCCESS":

      return {
        ...state,
      items: state.items.filter((item) =>item.product !== action.payload) ,
        totalAmount:
          state.totalAmount - (state.items.filter((item) =>item.product == action.payload))[0].all
      };
    case "Add_SUCCESS":
    

      const existingCartItemIndex = state.items.findIndex(
        (item) => item.product === action.payload.product
      );
console.log(existingCartItemIndex)
      const existingCartItem = state.items[existingCartItemIndex];

      let updatedItems;

      if (existingCartItem  ) {
        const updatedItem = {
          ...existingCartItem,
          all:action.payload.all,
          amount: action.payload.amount,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(action.payload);
      }
      const totalAmount =
     updatedItems?.length<=1?updatedItems?.[0].all:
     
     updatedItems.reduce((sum, number)=> {
     return  (sum + Number(number.all)).toFixed(1);
      
    },0);
      return {
        ...state,
        items: updatedItems,
        totalAmount
      };
    case "Clear_SUCCESS":
      return {
        ...state,
        items: [],
        totalAmount:0
      };
    case "CART_SAVE_SHIPPING_ADDRESS":
      return {
        ...state,
        shippingAddress: action.payload,
      };
    case "CART_SAVE_PAYMENT_METHOD":
      return {
        ...state,
        paymentMethod: action.payload,
      };
    default:
      return state;
  }
};
