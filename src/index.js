import React from "react";
import ReactDOM from "react-dom";
import Client from "./Client";
import "./styles.css";

class App extends React.Component {
  state = {
    clients: [
      { id: 1, nom: "Florent" },
      { id: 2, nom: "Saurel" }
    ],
    conteur: 0
  };

  handleClick = () => {
    this.setState({ conteur: this.state.conteur + 1 });

    const client = this.state.clients.slice();
    client.push({ id: 3, nom: "Chanceline" });
    this.state.clients = client;
    console.log(this.state);
  };

  handeDelete = (id) => {
    console.log(id);

    const clients = this.state.clients.slice();

    const index = clients.findIndex(function (client) {
      return client.id === id;
    });

    clients.splice(index, 1);

    this.setState({ clients: clients });
  };

  render() {
    const title = "Liste des Clients";

    return (
      <div>
        <h1> {title}</h1>
        {this.state.conteur}
        <button onClick={this.handleClick.bind(this)}> Click me </button>
        <ul>
          {this.state.clients.map((client) => (
           <Client details={client} onDelete={this.handeDelete} />
          ))}
        </ul>
        <form>
          <input type="text" placeholder="Ajouter un client" />
          <button>Confirmer</button>
        </form>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
