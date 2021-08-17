import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";
import CreateScreen from "./screens/CreateScreen";

const App = () => {
  return (
    <>
      <Container>
        <Router>
          <Route path="/create" component={CreateScreen} />
          <Route path="/" component={HomeScreen} exact />
        </Router>
      </Container>
    </>
  );
};

export default App;
