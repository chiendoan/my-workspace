import { Flex, Space } from 'antd';
import BookmarkButton from '../../atoms/BookmarkButton';
import BaseBreadcrumb from '../../atoms/Breadcrumb';
import BaseButton from '../../atoms/BaseButton';

import { ReactComponent as StarIcon } from '@/assets/icons/star.svg';
import { ReactComponent as ResetIcon } from '@/assets/icons/reset.svg';
import { ReactComponent as QuestionIcon } from '@/assets/icons/question_medium.svg';
import { SAMPLE_BREADCRUMBS } from '../../../libs/contants';

const PageTitle = () => {
  return (
    <Flex justify="space-between" className="page-title h-[48px]">
      <Space className="left-container gap-x-[0.5px]">
        <BookmarkButton icon={<StarIcon />} className="h-[24px] w-[24px]" />
        <div className="text-[18px] leading-[22.5px] font-bold">
          화면 타이틀
        </div>
      </Space>
      <Space className="right-container gap-x-[12px]">
        <BaseBreadcrumb items={SAMPLE_BREADCRUMBS} />
        <Space className="gap-x-[4px]">
          <BaseButton icon={<ResetIcon />} className="h-[32px] !w-[32px]" />
          <BaseButton icon={<QuestionIcon />} className="h-[32px] !w-[32px]" />
        </Space>
      </Space>
    </Flex>
  );
};

export default PageTitle;
