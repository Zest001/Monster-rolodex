import React from "react";
import { CardList } from "./componenet/card-List/card-List-Component";
import { SearchBox } from "./componenet/search-box/Search-Box-component";

class Event extends React.Component {
  constructor() {
    super();
    this.state = {
      monster: [],
      serachField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((user) => this.setState({ monster: user }));
  }

  handleChange = (e) => {
    this.setState({ serachField: e.target.value });
  };

  render() {
    const { monster, serachField } = this.state;
    const filteredMonsters = monster.filter((mons) =>
      mons.name.toLowerCase().includes(serachField.toLocaleLowerCase())
    );

    return (
      <div className="app">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="Serach Monster"
          handleChange={this.handleChange}
        />

        <CardList monster={filteredMonsters} />
      </div>
    );
  }
}

export default Event;
