import { MENU_ITEMS } from "../libs/contants";
import BaseContent from "../ui/organisms/BaseContent";
import DashboardTemplate from "../ui/templates/DashboardTemplate";

function DashboardPage() {
  return (
    <DashboardTemplate menuItems={MENU_ITEMS} titleText={"1Depth Menu Name"}>
      <BaseContent />
    </DashboardTemplate>
  );
}

export default DashboardPage;
