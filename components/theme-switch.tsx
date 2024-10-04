import React, { useEffect, useState } from "react";
import { Switch } from "@nextui-org/react";
import { WiMoonWaxingCrescent4, WiMoonWaningCrescent4 } from "react-icons/wi";
import { useTheme } from "next-themes";
import clsx from "clsx";

export interface ThemeSwitchProps {
  className?: string;
  classNames?: any;
}

const ThemeSwitch: React.FC<ThemeSwitchProps> = ({ className, classNames }) => {
  const { resolvedTheme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTheme(e.target.checked ? "dark" : "light");
  };

  if (!isMounted) {
    return null;
  }

  return (
    <Switch
      defaultSelected = {resolvedTheme === "dark"}
      size="lg"
      color="default"
      onChange={onChange}
      startContent={<WiMoonWaxingCrescent4 />}
      endContent={<WiMoonWaningCrescent4 />}
      className={clsx(
        "px-px transition-opacity hover:scale-110 cursor-pointer",
        className,
        classNames
      )}
    />
  );
};

export { ThemeSwitch };
