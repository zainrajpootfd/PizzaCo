import { Link } from "react-router-dom";

function EmptyCart() {
  return (
    <div className="mt-2">
      <Link
        to="/menu"
        className="text-blue-500 hover:text-blue-600 hover:underline"
      >
        &larr; Back to menu
      </Link>

      <p className="mt-10 font-semibold">
        Your cart is still empty. Start adding some pizzas :)
      </p>
    </div>
  );
}

export default EmptyCart;
