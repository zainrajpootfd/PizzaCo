import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartQuantity, getTotalCartPrice } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";
function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);
  return (
    <div className="mb-10 flex items-center justify-between bg-stone-900 p-4 text-left uppercase md:p-5">
      <p className="space-x-3 text-stone-200">
        <span>{totalCartQuantity} pizzas</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <Link to="/cart" className="text-stone-200">
        Open cart &rarr;
      </Link>
    </div>
  );
}

export default CartOverview;
