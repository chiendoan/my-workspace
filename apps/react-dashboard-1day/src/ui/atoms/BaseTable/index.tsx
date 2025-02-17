import { Table, TableProps } from "antd";
import { TableRowSelection } from "antd/es/table/interface";

interface BaseTableProps extends TableProps {
  type?: string;
  rowSelection?: TableRowSelection;
}

const BaseTable = (props: BaseTableProps) => {
  const { rowSelection, ...otherProps } = props;
  return (
    <Table
      {...otherProps}
      rowSelection={rowSelection}
      className="w-full"
      rowClassName={(_, index) =>
        index % 2 !== 0
          ? "bg-[var(--table-even-row-color)]"
          : "bg-[var(--table-odd-row-color)]"
      }
    ></Table>
  );
};

export default BaseTable;
