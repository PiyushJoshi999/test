//import logo from './logo.svg';

import ExpenseItem from "./Components/ExpenseItem";

//import './App.css';


function App() {
  const expenses = [
    {title: 'Car Insurance', amount: 399, date: new Date(2023, 4, 24)},
    {title: 'Toilet paper', amount: 100, date: new Date(2023, 4, 23)},
    {title: 'Toothpaste', amount: 150, date: new Date(2023, 4, 22)},
    {title: 'Dryfruits', amount: 500, date: new Date(2023, 4, 20)}
  ];
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <div>
      <h2>Lets get started</h2>
      <ExpenseItem title = {expenses[0].title} amount = {expenses[0].amount} date = {expenses[0].date}></ExpenseItem>
      <ExpenseItem title = {expenses[1].title} amount = {expenses[1].amount} date = {expenses[1].date}></ExpenseItem>
      <ExpenseItem title = {expenses[2].title} amount = {expenses[2].amount} date = {expenses[2].date}></ExpenseItem>
      <ExpenseItem title = {expenses[3].title} amount = {expenses[3].amount} date = {expenses[3].date}></ExpenseItem>
    </div>

  );
}

export default App;
