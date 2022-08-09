import React from "react";
import { useContext } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context";
import { ApolloProvider } from "@apollo/react-hooks";
import client from "./components/product/client"
import { Repository } from "./components/product/Repository";
import { Experience } from "./components/experience/Experience";


const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#0D0D0D" : "#D9D9D9",
        color: darkMode && "white",
      }}
    >
    <Toggle />
      <Intro />
      <About />
      <ApolloProvider client={client}>
        <Repository/>
      </ApolloProvider>
      {/*<Experience/>*/}
      <Contact />
    </div>
  );
};

export default App;
