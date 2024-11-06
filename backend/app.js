import fs from "fs/promises";
import express from "express";
import { v4 as uuidv4 } from "uuid";

const app = express();

app.use(express.json());
app.use(express.static("public"));

// CORS middleware
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// route for getting meals
app.get("/meals", async (req, res) => {
  try {
    const meals = await fs.readFile("./data/sample-meals.json", "utf-8");
    res.json(JSON.parse(meals));
  } catch (error) {
    res.status(500).json({ message: "Error reading meals data." });
  }
});

// route for posting orders
app.post("/orders", async (req, res) => {
  const orderData = req.body.order;

  if (!orderData || !orderData.items || orderData.items.length === 0) {
    return res.status(400).json({ message: "Missing data." });
  }

  const { customer } = orderData;
  if (
    !customer ||
    !customer.email ||
    !customer.name ||
    !customer.street ||
    !customer["postal-code"] ||
    !customer.city ||
    !customer.email.includes("@") ||
    !customer.name.trim() ||
    !customer.street.trim() ||
    !customer["postal-code"].trim() ||
    !customer.city.trim()
  ) {
    return res.status(400).json({ message: "Missing some data." });
  }

  const newOrder = {
    ...orderData,
    id: uuidv4(),
  };

  try {
    const orders = await fs.readFile("./data/orders.json", "utf-8");
    const allOrders = JSON.parse(orders);
    allOrders.push(newOrder);

    await fs.writeFile(
      "./data/orders.json",
      JSON.stringify(allOrders, null, 2)
    );

    res.status(201).json({ message: "Order created." });
  } catch (error) {
    res.status(500).json({ message: "Error processing the order." });
  }
});

// handle OPTIONS method
app.use((req, res) => {
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

  res.status(404).json({ message: "Not found." });
});

// start the server
app.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});
