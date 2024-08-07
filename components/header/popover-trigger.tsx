"use client";

import { LOGGED_IN_USER_CONTENT } from "@/constants/popover-content";
import { useCustomOverlay } from "@/hooks/use-custom-overlay";
import UserIcon from "@/public/icons/user.svg";

import Popover from "../popover/popover";
import ModalLogout from "./components/modal-logout";

interface PopoverTriggerProps {
  nickname: string;
}

export default function PopoverTrigger({ nickname }: PopoverTriggerProps) {
  const modalLogoutOverlay = useCustomOverlay(({ close }) => (
    <ModalLogout close={close} />
  ));

  return (
    <div className="flex cursor-pointer items-center gap-2">
      <Popover
        triggerSvg={UserIcon}
        triggerHeight={24}
        triggerWidth={24}
        content={[
          {
            text: LOGGED_IN_USER_CONTENT[0],
          },
          {
            text: LOGGED_IN_USER_CONTENT[1],
          },
          {
            text: LOGGED_IN_USER_CONTENT[2],
          },
          {
            text: LOGGED_IN_USER_CONTENT[3],
            onClick: modalLogoutOverlay.open,
          },
        ]}
        triggerText={nickname}
        triggerClassName="text-sm font-medium text-text-primary"
        contentClassName="z-10 border-[1px] bg-background-secondary border-border-primary/10 w-[120px] h-[160px] text-white text-sm font-normal mt-3 md:w-[135px] md:h-[184px] md:text-base"
      />
    </div>
  );
}
