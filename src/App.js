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
      <table border="1">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>quantity</th>
            <th>price</th>
            <th>expiry</th>
            <th>status</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {filteredMedicine.map(
            ({ id, name, quantity, price, expiry, status }, i) => (
              <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{quantity}</td>
                <td>{price}</td>
                <td>{expiry}</td>
                <td>{status.toString()}</td>
                {i === 0 && <td rowSpan={filteredMedicine.length}>{totalPrice}</td>}
              </tr>
            )
          )}
        </tbody>
      </table>
      <br />
      <br />
      <table border="1">
        <tr>
          <th>name</th>
          <th>age</th>
          <th>salary</th>
          <th>bonus</th>
          <th>status</th>
          <th>Total Salary</th>
          <th>Total Expense</th>
        </tr>
        {filteredEmployee.map(({ name, salary, age, bonus, status }, i) => (
          <tr key={i}>
            <td>{name}</td>
            <td>{age}</td>
            <td>{salary}</td>
            <td>{bonus}</td>
            <td>{status.toString()}</td>
            <td>{salary + bonus}</td>
            {i === 0 && <td rowSpan={employee.length}>{totalExpense}</td>}
          </tr>
        ))}
      </table>
    </div>
  );
}

export default App;
