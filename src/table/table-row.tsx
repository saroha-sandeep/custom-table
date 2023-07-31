import React from 'react';

import { styled } from "@stitches/react";

import { TableRowProps } from "./types";
import { TableRowCell } from "./table-row-cell";



const TableRowItem = styled("tr", {
  cursor: "auto",
  position: "relative",
  
  "&:hover": {
    backgroundColor: "#efedfd",
  },
  "&:last-child": {
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    border: "0"
  },
  "&:not(:last-child):after": {
    content: "",
    position: "absolute",
    width: "96%",
    bottom: "0px",
    left: "2%",
    right: "2%",
    borderBottom: "1px solid #e1e1e1",
  },
});

export function TableRow<T>({ data, columns }: TableRowProps<T>): JSX.Element {

  return (
    <>
      {data.map((item, itemIndex) => (
        <TableRowItem 
          key={`table-row-${itemIndex}`}>
          {columns.map((column, columnIndex) => (
            <TableRowCell
              key={`table-row-cell-${columnIndex}`}
              item={item}
              column={column}
            />
          ))}
        </TableRowItem>
      ))}
    </>
  );
}