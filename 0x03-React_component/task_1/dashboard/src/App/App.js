// ... (existing imports)

class App extends React.Component {
  // ... (existing code)

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
        {/* ... (existing JSX structure) */}
      </React.Fragment>
    );
  }
}

export default App;
