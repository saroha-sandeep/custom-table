export interface IColumnType<T> {
  accessor: string;
  title: string;
  width?: number;
  render?: (column: IColumnType<T>, item: T, itemIndex: number, activeRowHandler: (isChecked: boolean, ind: number) => void, tableLayout: string) => void;
  sortable: boolean;
  sortbyOrder?: string;
}

export interface TableProps<T> {
  tableData: T[];
  columns: IColumnType<T>[];
}

export interface TableHeaderProps<T> {
  columns: IColumnType<T>[];
  handleSorting : Function;
  tableLayout: string;
}

export interface TableRowCellProps<T> {
  item: T;
  column: IColumnType<T>;
  itemIndex: number;
  activeRowHandler: (isChecked: boolean, ind: number) => void;
  tableLayout: string;
}

export interface TableRowProps<T> {
  data: T[];
  columns: IColumnType<T>[];
  activeRowIndex: number[];
  activeRowHandler: (isChecked: boolean, ind: number) => void;
  tableLayout: string;
}

export interface IData {
  operator: string;
  headsetDisplay: string;
  fieldType: string;
  availability: string;
}
