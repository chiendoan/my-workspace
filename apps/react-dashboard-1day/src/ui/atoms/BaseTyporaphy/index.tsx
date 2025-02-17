import { Typography } from "antd";
import { TextProps } from "antd/es/typography/Text";

interface BaseTyporaphyProps extends TextProps {
  text: string;
}

const { Text } = Typography;

const BaseTyporaphy = (props: BaseTyporaphyProps) => {
  const { text, ...otherProps } = props;
  return <Text {...otherProps}>{text}</Text>;
};

export default BaseTyporaphy;
