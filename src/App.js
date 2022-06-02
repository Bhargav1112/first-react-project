import logo from "./logo.svg";
import "./App.css";

function App() {
  const medicine = [
    {
      id: 101,
      name: "Abacavir",
      quantity: 25,
      price: 150,
      expiry: 2022,
      status: true,
    },
    {
      id: 102,
      name: "Eltrombopag",
      quantity: 90,
      price: 550,
      expiry: 2021,
      status: true,
    },
    {
      id: 103,
      name: "Meloxicam",
      quantity: 85,
      price: 450,
      expiry: 2025,
      status: false,
    },
    {
      id: 104,
      name: "Allopurinol",
      quantity: 50,
      price: 600,
      expiry: 2023,
      status: true,
    },
    {
      id: 105,
      name: "Phenytoin",
      quantity: 63,
      price: 250,
      expiry: 2021,
      status: false,
    },
  ];

  const employee = [
    {
      name: "amit",
      age: 35,
      salary: 40000,
      bonus: 1000,
      status: true,
    },
    {
      name: "ajay",
      age: 25,
      salary: 38000,
      bonus: 2000,
      status: false,
    },
    {
      name: "mayur",
      age: 23,
      salary: 50000,
      bonus: 500,
      status: true,
    },
    {
      name: "jay",
      age: 29,
      salary: 35000,
      bonus: 600,
      status: true,
    },
    {
      name: "raj",
      age: 33,
      salary: 22000,
      bonus: 2000,
      status: true,
    },
  ];

  const filteredMedicine = medicine.filter(medicine => medicine.status && medicine.expiry >= 2022)
  const totalPrice = filteredMedicine.reduce((acc, cur) => acc + cur.price, 0)

  const filteredEmployee = employee.filter(emp => emp.status)
  const totalExpense = filteredEmployee.reduce((acc, cur) => acc + (cur.bonus + cur.salary), 0)

  return (
    <div>
      <h1>hello</h1>
    </div>
  );
}

export default App;
