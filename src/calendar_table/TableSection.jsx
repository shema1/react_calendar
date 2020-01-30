import React from "react";
import TableSectionLine from "./TableSectionLine";
import { generateNumbersRange } from "../utilites";


const TableSection = ({ test }) => {
  return (
    <div className="table-sections__line">
        {/* { test } */}
      {generateNumbersRange(1, 7).map(line => (
        <TableSectionLine key={line} line={line}/>
      ))}
    </div>
  );
};

export default TableSection;
