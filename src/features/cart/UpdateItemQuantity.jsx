import React from "react";
import { useDispatch } from "react-redux";
import { decreaceItemQuantity, increaseItemQuantity } from "./cartSlice";

function UpdateItemQuantity({ pizzaId }) {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-1">
      <button
        onClick={() => dispatch(decreaceItemQuantity(pizzaId))}
        className="rounded-full bg-yellow-300 px-4 py-2"
      >
        -
      </button>
      <button
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
        className="rounded-full bg-yellow-300 px-4 py-2"
      >
        +
      </button>
    </div>
  );
}

export default UpdateItemQuantity;
