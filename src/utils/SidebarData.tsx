import react from "react";

import { AiOutlineHome } from "react-icons/ai";
import { GiReceiveMoney, GiPayMoney, GiMoneyStack } from "react-icons/gi";

export const SidebarData = [
  {
    title: "Home",
    icon: <AiOutlineHome />,
    link: "/",
  },
  {
    title: "Entrada",
    icon: <GiReceiveMoney />,
    link: "/mov/entrada",
  },
  {
    title: "Saida",
    icon: <GiPayMoney />,
    link: "/mov/saida",
  },
  {
    title: "Saldo",
    icon: <GiMoneyStack />,
    link: "/mov/saldo",
  },
];
