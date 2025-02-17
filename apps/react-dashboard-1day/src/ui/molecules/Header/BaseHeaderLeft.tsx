import BaseButton from "../../atoms/BaseButton";
import { Space } from "antd";

import { ReactComponent as HeaderMenuIcon } from "@/assets/icons/header_menu.svg";

interface Props {
  toggleShowMenu?: () => void;
}
const BaseHeaderLeft = (props: Props) => {
  const { toggleShowMenu } = props;
  return (
    <Space align="center" className="" size={"middle"}>
      <BaseButton
        type="primary"
        icon={<HeaderMenuIcon />}
        className="flex !h-[52px] !w-[52px] !rounded-0 !bg-[var(--header-menu-button-color)]"
        onClick={() => toggleShowMenu && toggleShowMenu()}
      />
      <div className="flex items-center margin-left-[4px] w-[61px] justify-between">
        <div className="text-[var(--header-app-name-color)] text-[24px] font-bold">
          ESN
        </div>
        <div className="h-[32px] w-[1px] bg-[var(--header-divider-color)] border-[1px]" />
      </div>

      <div className="mb-[8px] mt-[8px]">
        <div className="text-[var(--header-app-name-color)] text-[14px] font-[400] leading-[17.5px] ">
          한글시스템명
        </div>
        <div className="text-[12px] text-[var(--header-sub-title-color)] font-[300] leading-[18px]">
          English System Name
        </div>
      </div>
    </Space>
  );
};

export default BaseHeaderLeft;
