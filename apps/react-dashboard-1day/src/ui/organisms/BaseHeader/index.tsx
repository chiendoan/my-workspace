import { Flex, Layout } from "antd";
import BaseHeaderLeft from "../../molecules/Header/BaseHeaderLeft";
import BaseHeaderContent from "../../molecules/Header/BaseHeaderContent";
import BaseHeaderRight from "../../molecules/Header/BaseHeaderRight";
import style from "./style.module.scss";
import clsx from "clsx";

const { Header } = Layout;
interface Props {
  toggleShowMenu?: () => void;
}

const BaseHeader = (props: Props) => {
  const { toggleShowMenu } = props;
  return (
    <Header
      className={clsx(
        "flex items-center bg-transparent  h-[52px] p-0 leading-[52px]",
        style.header_container
      )}
    >
      <Flex justify="space-between" className="w-full">
        <BaseHeaderLeft toggleShowMenu={toggleShowMenu} />
        <BaseHeaderContent />
        <BaseHeaderRight />
      </Flex>
    </Header>
  );
};

export default BaseHeader;
