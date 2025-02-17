import { TabsProps } from "antd";
import BaseTab from "../../atoms/BaseTab";

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "1Depth Menu",
  },
  {
    key: "2",
    label: "1Depth Menu",
  },
  {
    key: "3",
    label: "1Depth Menu",
  },
  {
    key: "4",
    label: "1Depth Menu",
  },
];

const BaseHeaderContent = () => {
  return (
    <div className="overflow-x-auto overflow-y-hidden max-w-[1076px]">
      <BaseTab items={items} className="base-header-content" />
    </div>
  );
};

export default BaseHeaderContent;
