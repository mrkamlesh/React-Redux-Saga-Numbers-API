import React from "react";
import "../styles/App.css";
import Form from "./Form";
import { connect } from "react-redux";
import { API_CALL_REQUEST } from "../actions/actionTypes";
import Message from "./Message";
import Error from "./Error";
import Fetching from "./Fetching";
import Init from "./Init";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.inputField = React.createRef();
  }
  fetchMessage = () => {
    const inputValue = this.inputField.current.value;
    this.props.getData(inputValue);
  };
  render() {
    const { message, error, fetching } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          {message && <Message message={message} />}
          {error && <Error error={error} />}
          {fetching && <Fetching />}
          {!message && !error && !fetching && <Init />}
          <Form
            fetchMessage={this.fetchMessage}
            inputField={this.inputField}
            fetching={fetching}
          />
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetching: state.fetching,
    message: state.message,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getData: number => dispatch({ type: API_CALL_REQUEST, number })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
