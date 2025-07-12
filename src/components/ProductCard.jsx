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
   <div className="border rounded-xl shadow-md bg-white flex flex-col items-center gap-3 p-4 transition-transform duration-300 hover:scale-105 hover:shadow-lg">
  <img
    src={product.thumbnail || product.images[0]}
    alt="product-img"
    className="w-full h-48 object-cover rounded-md"
  />
  <h2 className="font-semibold text-lg text-center">{product.title}</h2>
  <p className="text-sm text-gray-600 text-center line-clamp-2">{product.description}</p>
  <button
    className="mt-auto w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition duration-300"
    onClick={handleAddToCart}
  >
    Add to Cart
  </button>
</div>

  );
};

export default ProductCard;
