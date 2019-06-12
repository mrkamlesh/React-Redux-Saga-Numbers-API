import React from "react";

export default function Form(props) {
  return (
    <>
      <div>
        <input
          type="text"
          ref={props.inputField}
          placeholder="Please provide a number or type random"
        />
      </div>
      <div>
        {props.fetching ? (
          <button className="btn btn-warning" disabled>
            Fetching...
          </button>
        ) : (
          <button className="btn btn-primary" onClick={props.fetchMessage}>
            Click to get info
          </button>
        )}
      </div>
    </>
  );
}
