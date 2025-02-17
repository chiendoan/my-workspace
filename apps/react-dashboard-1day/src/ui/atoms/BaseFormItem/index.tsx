import { Form, FormItemProps } from "antd";
import clsx from "clsx";

interface BaseFormItemProps extends FormItemProps {
  type?: string;
}

const BaseFormItem = (props: BaseFormItemProps) => {
  const { className, ...otherProps } = props;
  return (
    <Form.Item
      className={clsx(className, "base_form_item")}
      {...otherProps}
    ></Form.Item>
  );
};

export default BaseFormItem;
