import React from 'react';
import { Table, TEST_DATA, data, columns, TEST_COLUMNS } from './stories/table';
import './App.css';

function App() {
  return (
    <div className="App">
      <Table tableData={data} columns={columns}  />
      <br />
      <Table tableData={TEST_DATA} columns={TEST_COLUMNS}  />
    </div>
  );
}

export default App;
