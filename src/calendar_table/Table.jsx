import React, { Component, PureComponent } from "react";
import Times from "./Times";
import TableSection from "./TableSection";
import Lines from "./Lines";
import { generateNumbersRange } from "../utilites";
import "./table.scss";

class Table extends PureComponent {
  render() {
    return (
      <>
        <section className="table">
          <div className="times">
            {generateNumbersRange(1, 23).map(time => (
              <Times key={time} time={time} />
            ))}
          </div>
          <div className="lines">
            {generateNumbersRange(1, 24).map(line => (
              <Lines key={line} />
            ))}
          </div>
          <div className="table-sections">
            {generateNumbersRange(0, 23).map(block => (
              <TableSection
                key={Math.random()}
                id={Math.random()}
                onPopup={this.props.onPopup}
                firstMonday={this.props.firstMonday}
                time={block}
                events={this.props.events}
                popupForUpdate={this.props.popupForUpdate}
              />
            ))}
          </div>
        </section>
      </>
    );
  }
}

export default Table;
