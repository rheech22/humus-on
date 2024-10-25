import { useState } from "react";

export const useToggleList = (initialState: boolean = false) => {
  const [toggleMap, setToggleMap] = useState<Record<string, boolean>>({});
  const isToggled = (key: string) => toggleMap[key] ?? initialState;
  const toggle = (key: string) =>
    setToggleMap((prev) => ({ ...prev, [key]: !prev[key] }));
  return {
    toggle,
    isToggled,
  };
};
