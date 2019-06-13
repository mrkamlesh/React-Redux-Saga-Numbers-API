import React from "react";
import "../styles/Message.scss";

export default function Message(props) {
  return (
    <div className="flex-container flex-row">
      <aside className="quotation quotation-left left sm-1 lg-1 as-start">
        <i className="fas fa-quote-left" />
      </aside>
      <main className="message sm-10 lg-10">{props.message}</main>
      <aside className="quotation quotation-right right sm-1 lg-1 as-end">
        <i className="fas fa-quote-right" />
      </aside>
    </div>
  );
}
