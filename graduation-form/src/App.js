import React from "react";
import "./App.css";
import { client } from "./ApolloClient/client";
import { ApolloProvider } from "@apollo/client";

function App({ element }) {
  const graphqlURL = element.getAttribute("data-graphql-url");
  return (
    <div className="graduation-form">
      <ApolloProvider client={client(graphqlURL)}>
        TEST
      </ApolloProvider>
    </div>
  );
}

export default App;
