import React from 'react';

import { styled } from "@stitches/react";
import { get } from "lodash";

import { TableRowCellProps } from "./types";



const TableCell = styled("td", {
  padding: 12,
  paddingBottom: "13px",
  fontSize: 14,
  color: "#000",
  textAlign: "left",
  textTransform: "capitalize"
});

export function TableRowCell<T>({ item, column, itemIndex, activeRowHandler }: TableRowCellProps<T>): JSX.Element {
  const val = get(item, column.accessor);
  const value = !!val ? val : '-';
  return (
    <TableCell>{column.render ? column.render(column, item, itemIndex, activeRowHandler) : value}</TableCell>
  );
}