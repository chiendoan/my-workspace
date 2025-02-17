import BaseButton from "../../atoms/BaseButton";
import BaseSwitch from "../../atoms/BaseSwitch";
import { Space } from "antd";
import BaseTyporaphy from "../../atoms/BaseTyporaphy";
import BookmarkButton from "../../atoms/BookmarkButton";

import { ReactComponent as StarIcon } from "@/assets/icons/star.svg";
import { ReactComponent as QuestionIcon } from "@/assets/icons/question.svg";
import { ReactComponent as SettingIcon } from "@/assets/icons/setting.svg";
import { ReactComponent as SunnyIcon } from "@/assets/icons/sunny.svg";
import { ReactComponent as MoonIcon } from "@/assets/icons/moon.svg";
import { ReactComponent as AvatarIcon } from "@/assets/icons/avatar.svg";

const BaseHeaderRight = () => {
  return (
    <Space align="center" className="h-[52px] px-[16px] py-[14px]">
      <Space className="util leading-[24px]">
        <BookmarkButton
          // icon={<StarOutlined />}
          icon={<StarIcon />}
          type="text"
          style={{
            width: "24px",
            height: "24px",
          }}
        />
        <BaseButton
          icon={<QuestionIcon />}
          type="text"
          style={{
            width: "24px",
            height: "24px",
          }}
        />
        <BaseButton
          icon={<SettingIcon />}
          type="text"
          style={{
            width: "24px",
            height: "24px",
          }}
        />
      </Space>
      <BaseSwitch
        className="toggle"
        checkedChildren={<SunnyIcon />}
        unCheckedChildren={<MoonIcon />}
      />
      <BaseButton
        icon={<AvatarIcon />}
        className="h-[30px] leading-[24px] p-0"
        type="text"
        text={
          <BaseTyporaphy
            text={"홍길동"}
            className="text-[var(-header-avatar-name-color)] text-[13px] font-medium"
          />
        }
      />
    </Space>
  );
};

export default BaseHeaderRight;
