import React, { Component } from "react";
import Times from "./Times";
import TableSection from "./TableSection";
import Lines from "./Lines";
import { generateNumbersRange } from "../utilites";
import "./table.scss";
import RedLine from "./RedLine";

class Table extends Component {
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
                key={block}
                id={Math.random()}
                onPopup={this.props.onPopup}
                firstMonday={this.props.firstMonday}
                time={block}
                events={this.props.events}
              />
            ))}
          </div>
          <RedLine />
        </section>
      </>
    );
  }
}

export default Table;
