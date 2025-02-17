import { Select, SelectProps } from "antd";
import clsx from "clsx";

import { ReactComponent as SelectDropDownIcon } from "@/assets/icons/select_dropdown.svg";

interface BaseSelectProps extends SelectProps {
  selectType?: string;
  text?: React.ReactNode;
}

const BaseSelect = (props: BaseSelectProps) => {
  const { className, ...selectProps } = props;
  return (
    <Select
      suffixIcon={<SelectDropDownIcon />}
      {...selectProps}
      className={clsx(className, "base_select")}
    ></Select>
  );
};

export default BaseSelect;
