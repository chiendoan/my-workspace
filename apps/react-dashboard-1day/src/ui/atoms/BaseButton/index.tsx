import { Button, ButtonProps } from "antd";
import clsx from "clsx";

interface BaseButtonProps extends ButtonProps {
  buttonType?: string;
  text?: React.ReactNode;
}

const BaseButton = (props: BaseButtonProps) => {
  const { className, text, children, ...buttonProps } = props;
  return (
    <Button
      {...buttonProps}
      className={clsx("align-middle px-[8px] gap-[4px]", className)}
    >
      {children || text}
    </Button>
  );
};

export default BaseButton;
