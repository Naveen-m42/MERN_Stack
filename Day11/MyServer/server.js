const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors({
  origin: "http://localhost:5173"
}));

const salesData = {
  shopName: "Rajesh Electronics",
  date: "2026-02-24",
  items: [
    { id: 1, name: "Laptop", price: 50000, quantity: 2 },
    { id: 2, name: "Mobile Phone", price: 20000, quantity: 3 },
    { id: 3, name: "Headphones", price: 1500, quantity: 5 },
    { id: 4, name: "Keyboard", price: 800, quantity: 4 },
    { id: 5, name: "Mouse", price: 600, quantity: 6 },
    { id: 6, name: "Monitor", price: 12000, quantity: 2 },
    { id: 7, name: "Printer", price: 9000, quantity: 1 },
    { id: 8, name: "Smart Watch", price: 7000, quantity: 3 },
    { id: 9, name: "Tablet", price: 25000, quantity: 2 },
    { id: 10, name: "Bluetooth Speaker", price: 3000, quantity: 4 },
    { id: 11, name: "External Hard Drive", price: 4500, quantity: 3 },
    { id: 12, name: "Power Bank", price: 1200, quantity: 7 },
    { id: 13, name: "USB Drive", price: 700, quantity: 10 },
    { id: 14, name: "Gaming Console", price: 40000, quantity: 1 },
    { id: 15, name: "Webcam", price: 2500, quantity: 3 },
    { id: 16, name: "Router", price: 3500, quantity: 2 },
    { id: 17, name: "Graphics Card", price: 55000, quantity: 1 },
    { id: 18, name: "RAM 16GB", price: 6000, quantity: 4 },
    { id: 19, name: "SSD 1TB", price: 8500, quantity: 2 },
    { id: 20, name: "Microphone", price: 2800, quantity: 3 }
  ]
};

app.get("/", (req, res) => {
  res.send("Welcome to Naveen Electronics Sales API!");
});

app.get("/sales", (req, res) => {
  const total = salesData.items.reduce((sum, item) => {
    return sum + (item.price * item.quantity);
  }, 0);

  res.json({
    ...salesData,
    totalSales: total
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});