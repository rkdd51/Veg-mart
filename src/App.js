import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Veggie from "./components/Vegetable/Veggie.js";
import Contact from "./Contact";
import Footer from "./components/Footer";
import CustomerSignIn from "./components/Customer/CustomerSignIn";
import CustomerSignUp from "./components/Customer/CustomerSignUp";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Feedback from "./components/Feedback";

function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/veggie">
          <Veggie />
        </Route>
        <Route exact path="/signup">
          <CustomerSignUp />
        </Route>
        <Route exact path="/signin">
          <CustomerSignIn />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/feedback">
          <Feedback />
        </Route>
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
