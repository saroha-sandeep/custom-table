/* eslint-disable no-lone-blocks */
import React, { ReactNode } from "react";
import { IData, IColumnType } from "../types";
import { styled } from "@stitches/react";
import { TableLayout } from "../constant";

const TableCell = styled("td", {
  padding: 12,
  paddingBottom: "13px",
  fontSize: 14,
  color: "#000",
  textAlign: "left",
  textTransform: "capitalize"
});

  
  
  export const columns: IColumnType<IData>[] = [
    {
      accessor: "operator",
      title: "Operator",
      width: 200,
      render: (column, { fieldType, operator }, itemIndex, activeRowHandler, tableLayout) => (
        <>
        {tableLayout === TableLayout.Desktop && (
          <>
         { fieldType === 'checkbox' ? 
          <>
            <input name={`row-${itemIndex}`} type="checkbox" onChange={(event) => {activeRowHandler(event.currentTarget.checked, itemIndex)}} /> {operator} 
          </> : 
          <>
            <input type="radio" onChange={(event) => {activeRowHandler(event.currentTarget.checked, itemIndex)}} /> {operator} 
          </> 
          }
        </>
        )}
        { tableLayout === TableLayout.Mobile && (
            <>
              { fieldType === 'checkbox' ? 
                <>
                  <TableCell><input name={`row-${itemIndex}`} type="checkbox" onChange={(event) => {activeRowHandler(event.currentTarget.checked, itemIndex)}} /></TableCell>
                  <TableCell> {column.title}</TableCell><TableCell>{operator}</TableCell>
                </> : 
                <>
                  <TableCell><input type="radio" onChange={(event) => {activeRowHandler(event.currentTarget.checked, itemIndex)}} /></TableCell>
                  <TableCell> {column.title} </TableCell><TableCell>{operator}</TableCell>
                </> 
              }
            </>
          )
        }
      </>
      ),
      sortable: true,
      sortbyOrder: "asc",
    },
    {
      accessor: "headsetDisplay",
      title: "Headset Display",
      width: 200,
      sortable: true,
    },
    {
      accessor: "availability",
      title: "3G Availability",
      width: 200,
      sortable: true,
    },
  ];
  
  export const data: IData[] = [
    {
      operator: "*Celcom Axiata (LTE)",
      headsetDisplay: "CELCOM / My Celcom / 502 19",
      fieldType: "checkbox",
      availability: ""
    },
    {
      operator: "*DiGi Telecom (LTE)",
      headsetDisplay: "DiGi 1800 / DiGi /  MYMY18",
      fieldType: "checkbox",
      availability: "yes",
    },
    {
      operator: "*Maxis (LTE)",
      headsetDisplay: "U Mobile / MYS 18 / MY 18",
      fieldType: "checkbox",
      availability: "yes"
    },
    {
      operator: "U Mobile (LTE)",
      headsetDisplay: "U Mobile / MYS 18 / MY 18",
      fieldType: "checkbox",
      availability: "yes",
    },
  ];

  export const TEST_COLUMNS: IColumnType<IData>[] = [
    {
      accessor: "operator",
      title: "Col 1",
      width: 200,
      render: (column, { fieldType, operator }, itemIndex, activeRowHandler, tableLayout) => (
        <>
        {tableLayout === TableLayout.Desktop && (
          <>
         { fieldType === 'checkbox' ? 
          <>
            <input name={`row-${itemIndex}`} type="checkbox" onChange={(event) => {activeRowHandler(event.currentTarget.checked, itemIndex)}} /> {operator} 
          </> : 
          <>
            <input type="radio" onChange={(event) => {activeRowHandler(event.currentTarget.checked, itemIndex)}} /> {operator} 
          </> 
          }
        </>
        )}
        { tableLayout === TableLayout.Mobile && (
            <>
              { fieldType === 'checkbox' ? 
                <>
                  <TableCell><input name={`row-${itemIndex}`} type="checkbox" onChange={(event) => {activeRowHandler(event.currentTarget.checked, itemIndex)}} /></TableCell>
                  <TableCell> {column.title}</TableCell><TableCell>{operator}</TableCell>
                </> : 
                <>
                  <TableCell><input type="radio" onChange={(event) => {activeRowHandler(event.currentTarget.checked, itemIndex)}} /></TableCell>
                  <TableCell> {column.title} </TableCell><TableCell>{operator}</TableCell>
                </> 
              }
            </>
          )
        }
      </>
      ),
      sortable: true,
      sortbyOrder: "asc",
    },
    {
      accessor: "headsetDisplay",
      title: "Col 2",
      width: 200,
      sortable: true,
    },
    {
      accessor: "availability",
      title: "Column 3",
      width: 200,
      sortable: true,
    },
  ];

  export const TEST_DATA: IData[] = [
    {
      operator: "Row 1 Col 1",
      headsetDisplay: "Row 1 Col 2",
      fieldType: "radio",
      availability: ""
    },
    {
      operator: "Row 2 Col 1",
      headsetDisplay: "Row 2 Col 2",
      fieldType: "radio",
      availability: "yes",
    },
    {
      operator: "Row 3 Col 1",
      headsetDisplay: "Row 3 Col 2",
      fieldType: "radio",
      availability: "yes"
    },
    {
      operator: "Row 4 Col 1",
      headsetDisplay: "Row 4 Col 2",
      fieldType: "radio",
      availability: "yes",
    },
  ];
  