import { useDispatch, useSelector } from "react-redux";
import { addToCart, calculateTotal } from "../app/cartSlice";
import toast from "react-hot-toast";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const handleAddToCart = () => {
    const IsAlreadyinCart = cartItems.find((item) => item.id === product.id);

    if (IsAlreadyinCart) {
      toast.error("Product is already in the Cart!");
    } else {
      toast.success("Product is added in Cart!");
        dispatch(addToCart({ ...product, quantity: 1 }));
        dispatch(calculateTotal())
    }
  };

  return (
    <div className="border rounded-lg shadow-m bg-white flex flex-col items-center gap-2 justify-center">
      <img src={product.image} alt="product-img" />
      <h2 className="font-semibold text-lg ">{product.title}</h2>
      <p>{product.description}</p>
      <button
        className="text-white bg-blue-500 p-4 font-bold text-md  "
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
