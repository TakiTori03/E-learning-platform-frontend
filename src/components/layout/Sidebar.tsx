import React from "react";
import { menuItems } from "@/constants";

import { TMenuItem } from "@/types";
import { ActiveLink } from "../common";
import { UserButton } from "@clerk/nextjs";
import { ModeToggle } from "../common/ToggleMode";

const Sidebar = () => {
  return (
    <div className="p-5 border-r border-gray-200 dark:border-opacity-10 bg-white dark:bg-grayDarker flex flex-col">
      <a href="/" className="font-bold text-3xl inline-block mb-5">
        <span className="text-primary">E</span>learning
      </a>
      <ul className="flex flex-col gap-2">
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            url={item.url}
            title={item.title}
            icon={item.icon}
          />
        ))}
      </ul>
      <div className="mt-auto flex items-center justify-end gap-2">
        <ModeToggle />
        <UserButton />
      </div>
    </div>
  );
};

export default Sidebar;

function MenuItem({ url, title, icon }: TMenuItem) {
  return (
    <li>
      <ActiveLink url={url}>
        {icon}
        {title}
      </ActiveLink>
    </li>
  );
}
