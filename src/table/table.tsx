
import React from 'react';
import { styled } from "@stitches/react";

import { TableHeader } from "./table-header";
import { TableRow } from "./table-row";
import { TableProps } from "./types";

import { useSortableTable } from './hooks/useSortableTable';
import { getDefaultSorting } from './utils/table-utils';

const TableWrapper = styled("table", {
  borderCollapse: "collapse",
  borderRadius: "16px",
  background: "#fff",
  boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.12)",
});

export function Table<T>({ tableData, columns }: TableProps<T>): JSX.Element {
  const [data, handleSorting] = useSortableTable(getDefaultSorting(tableData, columns));  
  
  return (
    <TableWrapper>
        <thead>
          <TableHeader {...{ columns, handleSorting }} />
        </thead>
        <tbody>
          <TableRow {...{ data, columns }} />
        </tbody>
    </TableWrapper>
  );
}