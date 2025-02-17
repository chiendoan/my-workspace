import { ReactComponent as SeparatorIcon } from "@/assets/icons/breadcrumb_separator.svg";
import { Breadcrumb, BreadcrumbProps } from "antd";

interface BreadcrumbItem {
  title: string;
  url: string;
  active?: boolean;
}
interface BaseBreadcrumbProps extends BreadcrumbProps {
  items: BreadcrumbItem[];
}
// TODO: Can update dynamically later. we can implement based on URL
const BaseBreadcrumb = (props: BaseBreadcrumbProps) => {
  const { items, ...otherProps } = props;
  return (
    <Breadcrumb
      {...otherProps}
      separator={
        <div className="flex items-center h-full">
          <SeparatorIcon />
        </div>
      }
      className="base_breadcrumbs"
    >
      {items.map((item) => (
        <Breadcrumb.Item
          key={item.title}
          className={`text-[var(--breadcrumb-item-color)] ${
            item.active ? "font-bold" : ""
          }`}
        >
          {item.title}
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
};

export default BaseBreadcrumb;
