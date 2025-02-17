import { Form, Select } from 'antd';
import clsx from 'clsx';
import BaseFormItem from '../../atoms/BaseFormItem';
import BaseSelect from '../../atoms/BaseSelect';
import style from './style.module.scss';
import BaseInput from '../../atoms/BaseInput';
import BaseButton from '../../atoms/BaseButton';
import ResetIcon from '@/assets/icons/reset.svg';
import SearchIcon from '@/assets/icons/search_gray.svg';
import ArrowDownIcon from '@/assets/icons/arrow_down.svg';
import SearchIconWhite from '@/assets//icons/search.svg';
import { CloseCircleFilled } from '@ant-design/icons';

const formItemLayout = {
  labelCol: {
    // xs: { span: 24 },
    // sm: { span: 6 },
  },
  wrapperCol: {
    // xs: { span: 24 },
    // sm: { span: 14 },
  },
};
const SearchForm = () => {
  const [form] = Form.useForm();
  return (
    <Form
      {...formItemLayout}
      form={form}
      className={clsx(style.search_container)}
    >
      <div className="grid grid-cols-[4fr,2fr,1fr] gap-x-6 gap-y-[6px]">
        <div className="flex gap-6">
          <BaseFormItem
            label="필수 조회조건 01"
            rules={[{ required: true, message: 'Please enter value' }]}
            className="flex-1"
            name={'name1'}
          >
            <BaseSelect placeholder="Select options">
              <Select.Option value="option2">Option 2</Select.Option>
            </BaseSelect>
          </BaseFormItem>
          <BaseFormItem
            label="필수 조회조건 02"
            rules={[{ required: true, message: 'Please enter value' }]}
            className="flex-1"
            name={'name2'}
          >
            <BaseSelect
              placeholder="Select options"
              mode="multiple"
              suffixIcon={null}
              prefix={
                <img
                  alt="Search Icon"
                  src={SearchIcon}
                  style={{ transform: 'scale(0.8)' }}
                />
              }
              removeIcon={
                <CloseCircleFilled
                  style={{
                    fontSize: 14,
                  }}
                />
              }
            >
              <Select.Option value="keyword1">Keyword 1</Select.Option>
              <Select.Option value="keyword2">Keyword 2</Select.Option>
            </BaseSelect>
          </BaseFormItem>
        </div>
        <div>
          <BaseFormItem label="필수 조회조건 01">
            <BaseInput placeholder="입력하세요" />
          </BaseFormItem>
        </div>
        <div></div>
        <div className="flex gap-1">
          <BaseFormItem label="필수 조회조건 02">
            <BaseSelect placeholder="Selected" className="min-w-[150px]">
              <Select.Option value="option2">Option 2</Select.Option>
            </BaseSelect>
          </BaseFormItem>
          <BaseFormItem
            rules={[{ required: true, message: 'Please enter value' }]}
            className="flex-1"
          >
            <BaseInput placeholder="Filled Text" />
          </BaseFormItem>
        </div>
        <div>
          <BaseFormItem label="필수 조회조건 03">
            <BaseInput placeholder="입력하세요" />
          </BaseFormItem>
        </div>
        <div className="flex gap-1">
          <BaseButton
            icon={<img alt="Reset Button" src={ResetIcon} />}
          ></BaseButton>
          <BaseButton type="primary">
            <img src={SearchIconWhite} alt="Search Icon White" />
            조회
          </BaseButton>
          <BaseButton
            icon={<img src={ArrowDownIcon} alt="Extend Button" />}
            type="primary"
          ></BaseButton>
        </div>
      </div>
    </Form>
  );
};

export default SearchForm;
