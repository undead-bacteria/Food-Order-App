import axios from "axios";

export const fetchAvailableMeals = async () => {
  try {
    const response = await axios.get("http://localhost:5000/meals");
    return response.data;
  } catch (error) {
    throw new Error("Couldn't fetch meals: " + error.message);
  }
};

export const submitOrder = async (order) => {
  try {
    const response = await axios.post("http://localhost:5000/orders", order, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    console.log("Error fetching meals:", error);
    throw new Error("Couldn't fetch meals: " + error.message);
  }
};
