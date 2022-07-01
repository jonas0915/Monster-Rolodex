import React, { useState, useEffect } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
// import { Component } from "react";

const App = () => {
  console.log("render");
  const [searchField, setSearchField] = useState("");
  const [title, setTitle] = useState("Monster Rolodex");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  //this will only run again when the if the value in the array changes
  useEffect(() => {
    // fetch call is a sideEffect
    // API where we fetch data from.Once fetch it is now a promise.
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  const onTitleChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setTitle(searchFieldString);
  };
  return (
    <div className="App">
      <h1 className="app-title">{title}</h1>
      <SearchBox
        className="monsters search-box"
        onChangeHandler={onSearchChange}
        placeholder="Search Monster"
      />
      <br />
      <SearchBox
        className="monsters search-box"
        onChangeHandler={onTitleChange}
        placeholder=" Title Search Box"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

//  class App extends Component {
// constructor() {
//   super();

//   this.state = {
//     monsters: [],
//     searchField: ""
//   };
// runs 1st
// }

// componentDidMount() {
// runs 3rd

// API where we fetch data from.Once fetch it is now a promise.
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json())
//     .then((users) =>
//       this.setState(() => {
//         return { monsters: users };
//       })
//     );
// }

// onSearchChange = (event) => {
//   const searchField = event.target.value.toLocaleLowerCase();
//   this.setState(() => {
//     return { searchField };
//   });
// };

// render() {
// console.log("render from");
// ES6 object destructuring extracting the data from state and this and turn into variables
// const { monsters, searchField } = this.state;
// const { onSearchChange } = this;

// const filteredMonsters = monsters.filter((monster) => {
//   return monster.name.toLocaleLowerCase().includes(searchField);
// });
// return (
// <div className="App">
//   <h1 className="app-title">Monster Rolodex</h1>
//   <SearchBox
//     className="monsters search-box"
//     onChangeHandler={onSearchChange}
//     placeholder="Search Monster"
//   />
//   <CardList monsters={filteredMonsters} />
// </div>
//     );
//   }
// }

export default App;
