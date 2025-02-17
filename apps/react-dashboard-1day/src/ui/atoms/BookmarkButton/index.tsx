import { Button, ButtonProps } from "antd";

interface BookmarkButtonProps extends ButtonProps {
  buttonType?: string;
}

const BookmarkButton = (props: BookmarkButtonProps) => {
  const { className, ...buttonProps } = props;
  return (
    <Button
      {...buttonProps}
      size="large"
      className={className + " align-middle"}
      type="text"
    />
  );
};

export default BookmarkButton;
