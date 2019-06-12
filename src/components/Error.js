import React from "react";

export default function Error(props) {
  return (
    <div className="flex-container flex-row">
      <main className="error sm-10 lg-10 alert-danger">
        {props.error.message}
      </main>
    </div>
  );
}
