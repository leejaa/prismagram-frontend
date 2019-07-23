import ApolloClient from "apollo-boost";
import { defaults, resolvers } from "./LocalState";
import { backendURL } from "../env";

export default new ApolloClient({
  uri: backendURL,
  clientState: {
    defaults,
    resolvers
  },
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`
  }
});
