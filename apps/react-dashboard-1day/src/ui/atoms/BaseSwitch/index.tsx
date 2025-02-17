import { Switch, SwitchProps } from "antd";

interface BaseSwitchProps extends SwitchProps {
  type?: string;
}

const BaseSwitch = (props: BaseSwitchProps) => {
  const { ...otherProps } = props;
  return <Switch {...otherProps}></Switch>;
};

export default BaseSwitch;
