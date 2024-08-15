import { Link } from "react-router-dom";
function CartOverview() {
  return (
    <div className="flex items-center justify-between bg-stone-900 p-4 text-left uppercase md:p-5">
      <p className="space-x-3 text-stone-200">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to="/cart" className="text-stone-200">
        Open cart &rarr;
      </Link>
    </div>
  );
}

export default CartOverview;
