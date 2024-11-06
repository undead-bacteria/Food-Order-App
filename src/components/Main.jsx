import React, { useEffect, useState } from "react";
import { fetchAvailableMeals } from "../http.js";
import MealCard from "./MealCard.jsx";

function Main() {
  const [availableMeals, setAvailableMeals] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
      setIsFetching(true);
      try {
        const meals = await fetchAvailableMeals();
        setAvailableMeals(meals);
      } catch (error) {
        setError({
          message: error.message || "Failed to fetch meals",
        });
      }

      setIsFetching(false);
    };

    fetchMeals();
  }, []);

  if (error) {
    return (
      <div className="container grid grid-cols-1 mx-auto justify-center text-center">
        <p>{error.message}</p>
      </div>
    );
  }
  return (
    <>
      {isFetching ? (
        <div className="container grid grid-cols-1 mx-auto justify-center text-center">
          <p>Meals are loading...</p>
        </div>
      ) : (
        <div className="container grid lg:grid-cols-2 xl:grid-cols-3 mx-auto gap-10 py-10 px-36">
          {availableMeals.map((meal) => (
            <MealCard key={meal.id} meal={meal} />
          ))}
        </div>
      )}
    </>
  );
}

export default Main;
