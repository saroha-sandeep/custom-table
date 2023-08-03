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

export function TableRow<T>({ data, columns, activeRowIndex, activeRowHandler }: TableRowProps<T>): JSX.Element {
  return (
    <>
      {data.map((item, itemIndex) => {
        let rowClasses = `table-row-${itemIndex} row-default`;
        activeRowIndex.forEach((val) => {
          if (itemIndex === val) {
            rowClasses = `table-row-${itemIndex} row-selected`;
          }
        } )
        return (
          <TableRowItem 
            key={`table-row-${itemIndex}`}
            className={rowClasses}
            >
            {columns.map((column, columnIndex) => (
              <TableRowCell
                key={`table-row-cell-${columnIndex}`}
                item={item}
                column={column}
                activeRowHandler={activeRowHandler}
                itemIndex={itemIndex}
                
              />
            ))}
          </TableRowItem>
        )
      })}
    </>
  );
}