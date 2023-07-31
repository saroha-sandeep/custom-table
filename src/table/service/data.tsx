import React from "react";
import { IData, IColumnType } from "../types";

  
  
  export const columns: IColumnType<IData>[] = [
    {
      accessor: "operator",
      title: "Operator",
      width: 200,
      render: (_, { fieldType, operator }) => (
        <>
         {fieldType === 'checkbox' ? <><input type="checkbox" /> {operator} </> : <><input type="radio" /> {operator} </> }
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
      render: (_, { fieldType, operator }) => (
        <>
         {fieldType === 'checkbox' ? <><input type="checkbox" /> {operator} </> : <><input type="radio" /> {operator} </> }
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
      fieldType: "checkbox",
      availability: ""
    },
    {
      operator: "Row 2 Col 1",
      headsetDisplay: "Row 2 Col 2",
      fieldType: "checkbox",
      availability: "yes",
    },
    {
      operator: "Row 3 Col 1",
      headsetDisplay: "Row 3 Col 2",
      fieldType: "checkbox",
      availability: "yes"
    },
    {
      operator: "Row 4 Col 1",
      headsetDisplay: "Row 4 Col 2",
      fieldType: "checkbox",
      availability: "yes",
    },
  ];
  