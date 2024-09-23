import { useDispatch } from "react-redux";
import { deleteItem } from "./cartSlice";

export default function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => dispatch(deleteItem(pizzaId))}
      className="w-28 rounded-full bg-yellow-300 px-3 py-2 hover:bg-yellow-200"
    >
      Delete
    </button>
  );
}
