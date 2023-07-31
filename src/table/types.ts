export interface IColumnType<T> {
    accessor: string;
    title: string;
    width?: number;
    render?: (column: IColumnType<T>, item: T) => void;
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
  }

  export interface TableRowCellProps<T> {
    item: T;
    column: IColumnType<T>;
  }

  export interface TableRowProps<T> {
    data: T[];
    columns: IColumnType<T>[];
  }

  export interface IData {
    operator: string;
    headsetDisplay: string;
    fieldType: string;
    availability: string;
  }