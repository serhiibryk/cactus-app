import { ApolloProvider } from "@apollo/client";

import CharactersList from "./components/CharactersList";
import { client } from "./GraphQL/apollo/client";
import "./App.css";

// import logo from "./logo.svg"

const App = () => {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <CharactersList />
      </ApolloProvider>
    </div>
  );
};

export default App;
