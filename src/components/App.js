import React from "react";
import "../styles/App.scss";
import Form from "./Form";
import { connect } from "react-redux";
import { API_CALL_REQUEST } from "../actions/actionTypes";
import Message from "./Message";
import Error from "./Error";
import Fetching from "./Fetching";
import Init from "./Init";
import Header from "./Header";

function App(props) {
  const { message, error, fetching, getData } = props;
  const inputField = React.useRef(null);
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        {message && <Message message={message} />}
        {error && <Error error={error} />}
        {fetching && <Fetching />}
        {!message && !error && !fetching && <Init />}
        <Form
          fetchMessage={getData}
          inputField={inputField}
          fetching={fetching}
        />
      </header>
    </div>
  );
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
