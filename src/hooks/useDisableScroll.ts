import { useEffect } from "react";

export const useDisableScroll = (isShowMenu: boolean) => {
  const disableScroll = () => {
    document.body.style.overflow = "hidden";
  };

  const enableScroll = () => {
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    if (isShowMenu) {
      disableScroll();
    } else {
      enableScroll();
    }

    return () => {
      enableScroll();
    };
  }, [isShowMenu]);
};
