import type { FC } from "react";

import { ApolloProvider } from "@apollo/client";

import { client } from "./GraphQL/apollo/client";
import AppRoutes from "./app/routes/AppRoutes";
import "./App.css";

const App: FC = () => (
  <ApolloProvider client={client}>
    <AppRoutes />
  </ApolloProvider>
);

export default App;
