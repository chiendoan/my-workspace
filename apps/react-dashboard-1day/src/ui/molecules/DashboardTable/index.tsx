import { Flex, Space } from 'antd';
import BaseInput from '../../atoms/BaseInput';
import BaseButton from '../../atoms/BaseButton';
import BaseTable from '../../atoms/BaseTable';
import { ColumnsType, TableRowSelection } from 'antd/es/table/interface';
import { useState } from 'react';

import { ReactComponent as ExcelDownloadIcon } from '@/assets/icons/excel-download.svg';
import { ReactComponent as ReloadIcon } from '@/assets/icons/reload.svg';
import { ReactComponent as SearchIcon } from '@/assets/icons/search_input.svg';
import { AnyObject } from 'antd/es/_util/type';

interface DashboardTableProps {
  currentRecord: number;
  dataSource: AnyObject[] | undefined;
  columns: ColumnsType<AnyObject> | undefined;
  totalRecord: number;
}
const DashboardTable = (props: DashboardTableProps) => {
  const { columns, dataSource, currentRecord = 21, totalRecord = 23 } = props;
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  // Handle select row actions
  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection: TableRowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <Flex vertical className="mt-[12px]">
      <Flex className="sub-title-area" justify="space-between">
        {/* Left Container */}
        <Space className="left-container">
          <div className="text-[16px] font-bold leading-[24px] text-[var(--table-title-color)]">
            서브타이틀(h3)
          </div>
          <div>
            <span className="text-[13px] font-normal leading-[19.5px]">총</span>
            <span className="text-[13px] font-normal leading-[19.5px] text-[var(--header-menu-button-color)]">
              {currentRecord}
            </span>
            /
            <span className="text-[13px] font-normal leading-[19.5px]">
              {totalRecord}
            </span>
          </div>
        </Space>
        {/* Right Container */}
        <Space className="right-container">
          <BaseInput
            placeholder="Placeholder"
            prefix={<SearchIcon />}
            className="h-[28px]"
          />
          <Space className="button-container gap-x-[4px]">
            <BaseButton
              text={
                <span className="text-[12px] font-bold leading-[18px]">
                  다운로드
                </span>
              }
              className="h-[28px] px-[6px]"
              icon={<ExcelDownloadIcon />}
            />
            <BaseButton
              text={
                <span className="text-[12px] font-bold leading-[18px]">
                  새로고침
                </span>
              }
              className="h-[28px] px-[6px]"
              icon={<ReloadIcon />}
            />
          </Space>
        </Space>
      </Flex>
      <Flex className="dashboard-table-area mt-[4px]">
        <BaseTable
          rowSelection={rowSelection}
          columns={columns}
          dataSource={dataSource}
          pagination={false}
          scroll={{ y: 600 }}
          bordered
        />
      </Flex>
    </Flex>
  );
};

export default DashboardTable;
