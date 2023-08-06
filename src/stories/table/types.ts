import { TableLayout } from "./constant";

export interface IColumnType<IData> {
  accessor: string;
  title: string;
  width?: number;
  render?: (column: IColumnType<IData>, item: IData, itemIndex: number, activeRowHandler: (isChecked: boolean, ind: number) => void, tableLayout: TableLayout) => void;
  sortable: boolean;
  sortbyOrder?: string;
}

export interface IData {
  operator: string;
  headsetDisplay: string;
  fieldType: string;
  availability: string;
}

export interface TableProps<T> {
  tableData: IData[];
  columns: IColumnType<IData>[];
}

export interface TableHeaderProps<T> {
  columns: IColumnType<IData>[];
  handleSorting : Function;
  tableLayout: TableLayout;
}

export interface TableRowCellProps<T> {
  item: T;
  column: IColumnType<T>;
  itemIndex: number;
  activeRowHandler: (isChecked: boolean, ind: number) => void;
  tableLayout: TableLayout;
}

export interface TableRowProps<T> {
  data: T[];
  columns: IColumnType<T>[];
  activeRowIndex: number[];
  activeRowHandler: (isChecked: boolean, ind: number) => void;
  tableLayout: TableLayout;
}

