import { Flex } from "antd";
import BaseButton from "../../atoms/BaseButton";

import { ReactComponent as EditIcon } from "@/assets/icons/edit.svg";
import { ReactComponent as CopyIcon } from "@/assets/icons/copy.svg";
import { ReactComponent as DeleteIcon } from "@/assets/icons/delete.svg";

const ButtonRow = () => {
  return (
    <div>
      <Flex gap={"small"} justify="flex-end" className="mt-[4px]">
        <BaseButton
          text={"신규"}
          className="h-[32px] px-[6px]"
          icon={<EditIcon />}
        />
        <BaseButton
          text={"복사"}
          className="h-[32px] px-[6px]"
          icon={<CopyIcon />}
        />
        <BaseButton
          text={"삭제"}
          className="h-[32px] px-[6px]"
          icon={<DeleteIcon />}
        />
      </Flex>
    </div>
  );
};

export default ButtonRow;
