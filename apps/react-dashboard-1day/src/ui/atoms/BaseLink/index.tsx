import { Button, ButtonProps } from "antd";

interface BaseLinkProps extends ButtonProps {
  buttonType: string;
  text: string;
}
const BaseLink = (props: BaseLinkProps) => {
  return <Button></Button>;
};

export default BaseLink;
