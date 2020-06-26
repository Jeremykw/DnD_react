import React from "react";
import { ThemeProvider } from "styled-components";
import Theme from "./styles/Theme"
import Styles from "./styles/Styles";
import Head from "./Head";
import Nav from "./Nav";


class App extends React.Component {
render() {
    return (
      <ThemeProvider theme={Theme}>
        <div>
          <Head />
          <Nav />
          <div>Home</div>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
