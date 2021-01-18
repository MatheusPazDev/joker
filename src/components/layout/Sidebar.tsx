import Link from "next/link";
import React from "react";

import { SidebarData } from "../../utils/SidebarData";

function Sidebar() {
  return (
    <div className="bg-sidebar w-64 min-h-screen flex flex-col">
      <ul className="h-auto w-full">
        {SidebarData.map((val, key) => {
          return (
            <li className="w-full h-11 my-1 text-white " key={key}>
              <Link href={val.link}>
                <a
                  className="p-3 list-none
                                flex flex-row justify-center items-center
                                hover:bg-sidebarFocus hover:cursor-pointer"
                >
                  <div
                    className="grid place-items-center"
                    style={{ flex: "30%" }}
                  >
                    {val.icon}
                  </div>
                  <div style={{ flex: "70%" }}>{val.title}</div>
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
