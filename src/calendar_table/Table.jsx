import React, { Component } from "react";
import Times from "./Times";
import { generateNumbersRange } from "../utilites";
import TableSection from "./TableSection";
import "./table.scss";
import Lines from "./Lines";

class Table extends Component {
  render() {
    return (
      <div className="table">
        <div className="times">
          {generateNumbersRange(0, 23).map(time => (
            <Times key={time} time={time} />
          ))}
        </div>
        <div className="lines">
          {generateNumbersRange(1,24).map(line =>(
            <Lines/>
          ))}
        </div>
        <div className="table-sections">
          {generateNumbersRange(1, 24).map(block => (
            <TableSection key={block} test={block} />
          ))}
        </div>
      </div>
    );
  }
}

export default Table;
