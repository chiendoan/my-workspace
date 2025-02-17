import { Layout, Menu, MenuProps, Space } from "antd";
import { ReactComponent as MenuExpandIcon } from "@/assets/icons/menu_expand.svg";
import { ReactComponent as MenuCloseIcon } from "@/assets/icons/menu_close.svg";

const { Sider } = Layout;

// Update later when props are defined
interface LeftMenuProps extends MenuProps {
  titleText: string;
}

const BaseLeftMenu = ({ items, titleText }: LeftMenuProps) => {
  return (
    <Space direction="vertical" className="bg-[var(--menu-bg-color)] gap-[1px]">
      <div className="flex text-[var(--menu-title-color)] h-[61px] pt-[24px] pb-[16px] pl-[12px] pr-[8px] border-[var(--layout-boder-color)] border-b-[1px]">
        <span className="text-[14px] font-bold leading-[21px]">
          {titleText}
        </span>
      </div>
      <Sider width={230}>
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          style={{
            height: "100%",
            borderRight: 0,
            width: "calc(100% + 4px)",
            marginLeft: "-4px",
          }}
          items={items}
          inlineIndent={18}
          expandIcon={
            <>
              <MenuExpandIcon className="menu_expand_icon" />
              <MenuCloseIcon className="menu_close_icon" />
            </>
          }
          className="base_left_menu"
        />
      </Sider>
    </Space>
  );
};

export default BaseLeftMenu;
