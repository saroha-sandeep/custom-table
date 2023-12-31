import React from 'react';

import { styled } from "@stitches/react";
import { get } from "lodash";

import { TableRowCellProps } from "./types";



const TableRow = styled("tr", {
  fontSize: 14,
  color: "#000",
  textAlign: "left",

});

const TableCell = styled("td", {
  padding: 12,
  paddingBottom: "13px",
  fontSize: 14,
  color: "#000",
  textAlign: "left",
  textTransform: "capitalize"
});

export function TableRowCellTableRow<T>({ item, column, itemIndex, activeRowHandler, tableLayout }: TableRowCellProps<T>){
  const val = get(item, column.accessor);
  const value = !!val ? val : '-';
  return (
    <TableRow>
      {!column.render && (
         <>
          <TableCell></TableCell>
          <TableCell>{column.title}</TableCell>
          <TableCell>{value}</TableCell>
        </>
      )}
      {column.render && (
        <>
          { column.render(column, item, itemIndex, activeRowHandler, tableLayout) }
        </>
      )}
    </TableRow>
  );
}