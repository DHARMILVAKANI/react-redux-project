import { useDispatch, useSelector } from "react-redux"
import { remove } from "../store/cartSlice"

const Cart = () => {
  const dispatch = useDispatch()
  const items = useSelector((state) => state.cart)
  const handleRemove = (id) => {
      dispatch(remove(id))
  }
  return (
    <div>
      <h3>Cart</h3>
      <div className="cartWrapper">
        {
            items.map((product) => (
              <div className="cartCard" key={product.id}>
                <img src={product.image} alt="item" />
                <h5>{product.title}</h5>
                <h5>{product.price}</h5>  
                <button className="btn" onClick={() => handleRemove(product.id)}>Remove</button>
              </div>
            ))
        }
      </div>
    </div>
  )
}

export default Cart