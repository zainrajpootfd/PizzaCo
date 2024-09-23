import { formatCurrency } from "../../utils/helpers";
import DeleteItem from "./DeleteItem";
import UpdateItemQuantity from "./UpdateItemQuantity";
function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="py-3">
      <p>
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between">
        <p>{formatCurrency(totalPrice)}</p>
        <UpdateItemQuantity pizzaId={pizzaId} />
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
