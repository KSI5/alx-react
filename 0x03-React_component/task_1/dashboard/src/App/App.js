// App.js

import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import CourseList from "../CourseList/CourseList";
import Notifications from "../Notifications/Notifications";
import "./App.css";
import PropTypes from "prop-types";

class App extends React.Component {
  static defaultProps = {
    isLoggedIn: false,
    logOut: () => {},
  };

  static propTypes = {
    isLoggedIn: PropTypes.bool,
    logOut: PropTypes.func,
  };

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  handleKeyPress = (e) => {
    const { logOut } = this.props;

    if (e.ctrlKey && e.key === "h") {
      alert("Logging you out");
      logOut();
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="App">
          <div className="heading-section">
            <Notifications />
            <Header />
          </div>
          {this.props.isLoggedIn ? <CourseList /> : <Login />}
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
