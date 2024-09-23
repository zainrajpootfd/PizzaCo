import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart } from "./cartSlice";
import EmptyCart from "./EmptyCart";

// const fakeCart = [
//   {
//     pizzaId: 12,
//     name: "Mediterranean",
//     quantity: 2,
//     unitPrice: 16,
//     totalPrice: 32,
//   },
//   {
//     pizzaId: 6,
//     name: "Vegetale",
//     quantity: 1,
//     unitPrice: 13,
//     totalPrice: 13,
//   },
//   {
//     pizzaId: 11,
//     name: "Spinach and Mushroom",
//     quantity: 1,
//     unitPrice: 15,
//     totalPrice: 15,
//   },
// ];

function Cart() {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.user.username);

  const cart = useSelector(getCart);
  if (!cart.length) return <EmptyCart />;
  return (
    <div className="text-left">
      <Link
        to="/menu"
        className="text-blue-500 hover:text-blue-600 hover:underline"
      >
        &larr; Back to menu
      </Link>

      <h2 className="mb-8 mt-6 font-semibold">Your cart, {username}</h2>
      <ul className="divide-stone-2 00 mb-8 mt-4 divide-y border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </ul>
      <div className="space-x-4">
        <Link
          to="/order/new"
          className="rounded-full bg-yellow-300 px-4 py-4 uppercase transition-all duration-300 ease-in hover:bg-yellow-200"
        >
          Order pizzas
        </Link>
        <button
          onClick={() => dispatch(clearCart())}
          className="fort-bold w-32 rounded-full border border-slate-950 bg-slate-100 px-3 py-4 text-sm uppercase hover:bg-slate-200"
        >
          Clear cart
        </button>
      </div>
    </div>
  );
}

export default Cart;
