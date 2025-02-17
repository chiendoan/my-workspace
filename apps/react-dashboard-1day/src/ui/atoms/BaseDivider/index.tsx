import { Divider, DividerProps } from "antd";

interface BaseDividerProps extends DividerProps {
  width?: string;
}

const BaseDivider = (props: BaseDividerProps) => {
  const { ...otherProps } = props;
  return <Divider {...otherProps}></Divider>;
};

export default BaseDivider;
