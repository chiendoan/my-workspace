import { Input, InputProps } from "antd";
import clsx from "clsx";
import style from "./style.module.scss";

interface BaseInputProps extends InputProps {
  type?: string;
}

const BaseInput = (props: BaseInputProps) => {
  const { className, ...otherProps } = props;
  return (
    <Input
      {...otherProps}
      className={clsx(className, style.base_input_container)}
    ></Input>
  );
};

export default BaseInput;
