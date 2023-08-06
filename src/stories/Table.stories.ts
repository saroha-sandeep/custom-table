import type { Meta, StoryObj } from '@storybook/react';

import { Table, data, columns, TEST_DATA, TEST_COLUMNS, IColumnType, IData } from './table';


// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/Table',
  component: Table,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TableWithCheckbox: Story = {
  args: { 
    tableData: data,
    columns: columns as IColumnType<IData>[],
  }
};

export const TableWithRadio: Story = {
  args: { 
    tableData: TEST_DATA,
    columns: TEST_COLUMNS  as IColumnType<IData>[],
  }
};
