import React, { useState } from "react";
import Header from "../../organisms/BaseHeader";
import LeftMenu from "../../organisms/BaseLeftMenu";
import { Layout } from "antd";
import { ItemType } from "antd/es/menu/interface";
import "./style.scss";

interface DashboardTemplateProps {
  children: React.ReactNode;
  menuItems: ItemType[];
  titleText: string;
}

const { Content } = Layout;

const DashboardTemplate = ({
  menuItems,
  titleText,
  children,
}: DashboardTemplateProps) => {
  const [showMenu, setShowMenu] = useState(true);
  const toggleShowMenu = () => setShowMenu(!showMenu);
  return (
    <Layout className="dashboard-template">
      <Header toggleShowMenu={toggleShowMenu} />
      <Layout>
        {showMenu && <LeftMenu items={menuItems} titleText={titleText} />}
        <Layout className="content">
          <Content>{children}</Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default DashboardTemplate;
