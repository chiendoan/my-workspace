import { Tabs, TabPaneProps, TabsProps } from "antd";

interface BaseTabProps extends TabPaneProps {
  items: TabsProps["items"];
}

const BaseTab = (props: BaseTabProps) => {
  const { items, ...otherProps } = props;
  return <Tabs items={items} {...otherProps}></Tabs>;
};

export default BaseTab;
