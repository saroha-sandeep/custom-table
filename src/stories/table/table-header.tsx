import React, { useState } from 'react';

import { styled } from "@stitches/react";

import { TableHeaderProps } from "./types";
import { TableLayout } from './constant';



const TableHeaderCell = styled("th", {
  backgroundColor: "#f7f7f7",
  padding: 24,
  fontWeight: 500,
  textAlign: "left",
  fontSize: 14,
  color: "#2c3e50",
  "&:first-child": {
    borderTopLeftRadius: 12,
  },
  "&:last-child": {
    borderTopRightRadius: 12,
  },
});

export function TableHeader<T>({ columns, handleSorting, tableLayout }: TableHeaderProps<T>): JSX.Element {
  const [sortField, setSortField] = useState("");
 const [order, setOrder] = useState("asc");

 const doNothing = () => {};

 const handleSortingChange = (accessor: string) => {
  const sortOrder =
  accessor === sortField && order === "asc" ? "desc" : "asc";
  setSortField(accessor);
  setOrder(sortOrder);
  handleSorting(accessor, sortOrder);
 };

  return (
    <tr>
      { tableLayout === TableLayout.Desktop && columns.map(({width, sortable, title, accessor}, columnIndex) => {
         const className = sortable
         ? sortField === accessor && order === "asc"
          ? "up"
          : sortField === accessor && order === "desc"
          ? "down"
          : "default"
         : "";
        return (
          <TableHeaderCell
            className={className}
            key={`table-head-cell-${columnIndex}`}
            style={{ width: width }}
            onClick={sortable ? () => handleSortingChange(accessor) : doNothing}
          >
            {title}
          </TableHeaderCell>
        )
      })}
      { tableLayout === TableLayout.Mobile && (<TableHeaderCell>Contact Details</TableHeaderCell>)}
    </tr>
  );
}