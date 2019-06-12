import React from "react";

export default function Header(props) {
  return (
    <>
      <div className="header">
        <section className="number" id="no-a">
          13
        </section>
        <section className="number" id="no-b">
          147
        </section>
        <section className="number" id="no-c">
          42
        </section>
        <section className="number" id="no-d">
          27
        </section>
      </div>
      <div className="subheader">Numbers</div>
    </>
  );
}
