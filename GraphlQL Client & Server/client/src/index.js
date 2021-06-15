import React from "react";
import { render } from "react-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

import { GlobalProvider } from './globalContext';
import Posts from './Posts/Posts';
import CreatePosts from './CreatePosts/CreatePosts';

const client = new ApolloClient({
  uri: "http://localhost:8000/graphql",
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <GlobalProvider>
        <div>
          <CreatePosts />
          <Posts />
        </div>
      </GlobalProvider>
    </ApolloProvider>
  );
}

render(<App />, document.getElementById("root"));
