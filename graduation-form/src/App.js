import React from "react";
import { isExpired } from "react-jwt";
import "./App.css";
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import GraduationForm from "./components/GraduationForm";

function App({ element }) {
  const tokenURL = element.getAttribute("data-token-url");
  const graphqlURL = element.getAttribute("data-graphql-url");
  const token = new URLSearchParams(window.location.search).get("token");
  if (isExpired(token)) {
    return (window.location.href = `${tokenURL}&BackURL=${
      window.location.href.split("?")[0]
    }`);
  }
  const httpLink = createHttpLink({
    uri: graphqlURL,
  });
  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: token ? token : "",
      },
    };
  });
  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
  return (
    <div className="graduation-form">
      <ApolloProvider client={client}>
        <GraduationForm />
      </ApolloProvider>
    </div>
  );
}

export default App;
