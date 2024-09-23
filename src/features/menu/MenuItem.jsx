import { useDispatch, useSelector } from "react-redux";
import { formatCurrency } from "../../utils/helpers";
import { addItem, getCurrentQuantityById } from "../cart/cartSlice";
import DeleteItem from "../cart/DeleteItem";

function MenuItem({ pizza }) {
  const dispatch = useDispatch();
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  const currentQuantity = useSelector(getCurrentQuantityById(id));
  const isInCart = currentQuantity > 0;

  function handleAddToCart() {
    const newItem = {
      pizzaId: id,
      name: "Mediterranean",
      quantity: 1,
      unitPrice: 16,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
  }

  return (
    <li className="flex flex-col gap-4 py-2 sm:flex-row">
      <img className="w-80" src={imageUrl} alt={name} />
      <div className="flex grow flex-col pt-0.5">
        <p className="text-left font-medium">{name}</p>
        <p className="text-left text-sm capitalize italic text-stone-500">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p>{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}
          {isInCart && <DeleteItem pizzaId={id} />}
          <button
            onClick={handleAddToCart}
            className="rounded-full bg-yellow-300 px-3 py-2 hover:bg-yellow-200"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
