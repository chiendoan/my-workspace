import { Flex, TableColumnsType } from 'antd';
import PageTitle from '../../molecules/PageTitle';
import SearchForm from '../../molecules/SearchForm';
import ButtonRow from '../../molecules/ButtonRow';
import DashboardTable from '../../molecules/DashboardTable';
import { DashboardTableDataType } from '../../../libs/interfaces';
import { formatNumberWithComma, getRandomNumber } from '../../../libs/utils';
import { MAX_MONEY_AMOUNT, MIN_MONEY_AMOUNT } from '../../../libs/contants';

import { ReactComponent as SortIcon } from '@/assets/icons/sort.svg';
import { AnyObject } from 'antd/es/_util/type';

const BaseContent = () => {
  const columns: TableColumnsType<AnyObject> = [
    {
      title: '텍스트',
      dataIndex: 'field1',
      align: 'center',
      render: (value: string) => <div className="text-left">{value}</div>,
    },
    {
      title: '공간 대비 길어서 넘치는 텍스트',
      dataIndex: 'field2',
      align: 'center',
      ellipsis: true,
      className: '',
      render: (value: string) => (
        <div className="text-left text-ellipsis overflow-hidden ">{value}</div>
      ),
    },
    {
      title: '중앙정렬텍스트',
      dataIndex: 'field3',
      align: 'center',
      sorter: (a, b) => a.field3.localeCompare(b.field3),
      sortDirections: ['ascend', 'descend'],
      sortIcon: ({ sortOrder }) => <SortIcon order={sortOrder || ''} />,
      render: (value: string) => <div className="text-center">{value}</div>,
    },
    {
      title: '텍스트',
      dataIndex: 'field4',
      align: 'center',
      render: (value: string) => <div className="text-left">{value}</div>,
    },
    {
      title: '링크텍스트',
      dataIndex: 'field5',
      align: 'center',
      render: (text) => (
        <div className="text-center">
          <a
            href={text}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--table-cell-link-color)] underline"
          >
            {text}
          </a>
        </div>
      ),
    },
    {
      title: '링크텍스트',
      dataIndex: 'field6',
      align: 'center',
      render: (text) => (
        <div className="text-center">
          <a
            href={text}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--table-cell-link-color)] underline"
          >
            {text}
          </a>
        </div>
      ),
    },
    {
      title: '수치 우정렬',
      dataIndex: 'field7',
      align: 'center',
      sorter: (a, b) => a.field7 - b.field7,
      sortDirections: ['ascend', 'descend'],
      sortIcon: ({ sortOrder }) => <SortIcon order={sortOrder || ''} />,
      render: (value: number) => (
        <div className="text-right">{formatNumberWithComma(value) || '0'}</div>
      ),
    },
  ];

  const dataSource = Array.from<DashboardTableDataType>({
    length: 25,
  }).map<DashboardTableDataType>((_, i) => ({
    key: i,
    field1: '텍스트',
    field2: '공간 대비 길어서 넘치는 텍스트',
    field3: '홍길동',
    field4: '텍스트',
    field5: '링크텍스트',
    field6: '링크텍스트',
    field7: getRandomNumber(MIN_MONEY_AMOUNT, MAX_MONEY_AMOUNT) || 0,
  }));

  return (
    <div className="pl-[32px] pr-[32px] pb-[8px]">
      <PageTitle />
      <Flex vertical>
        <SearchForm />
        <DashboardTable
          columns={columns}
          currentRecord={21}
          dataSource={dataSource}
          totalRecord={23}
        />
        <ButtonRow />
      </Flex>
    </div>
  );
};

export default BaseContent;
