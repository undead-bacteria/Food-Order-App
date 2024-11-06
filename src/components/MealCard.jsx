import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/actions/cartActions";

function MealCard({ meal }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(meal));
  };

  return (
    <div className="bg-mealCard flex flex-col gap-5 items-center w-full rounded-xl shadow-2xl overflow-hidden">
      <img
        src={`http://localhost:5000/${meal.image}`}
        alt={meal.name}
        className="h-60 w-full"
      />
      <div className="flex flex-col gap-3 items-center px-5 pb-5">
        <h2 className="font-bold text-xl">{meal.name}</h2>
        <h2 className="bg-mealPrice px-8 py-1 rounded-md text-yellow-400">
          {meal.price}
        </h2>
        <p className="text-center px-3">{meal.description}</p>
        <button
          onClick={handleAddToCart}
          className="p-5 py-2 text-center  text-gray-900 bg-yellow-500 rounded-md font-semibold"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default MealCard;
