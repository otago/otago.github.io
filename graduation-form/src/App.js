import React from "react";
import { isExpired, decodeToken } from "react-jwt";
import "./App.css";
import { client } from "./ApolloClient/client";
import { ApolloProvider } from "@apollo/client";

function App({ element }) {
  const token = new URLSearchParams(window.location.search).get("token");
  const myDecodedToken = decodeToken(token);
  if (isExpired(token)) {
    return (window.location.href =
      "https://jeffrey.op.ac.nz/tokens/token?ignore-saml-redirect=1");
  }
  console.log(myDecodedToken);
  const graphqlURL = element.getAttribute("data-graphql-url");
  return (
    <div className="graduation-form">
      <ApolloProvider client={client(graphqlURL)}>
        Graduation Form
      </ApolloProvider>
    </div>
  );
}

export default App;
