import {
  BanknotesIcon,
  UserPlusIcon,
  UserIcon,
  ChartBarIcon,
} from "@heroicons/react/24/solid";

export const statisticsCardsData = [
  {
    color: "blue",
    icon: BanknotesIcon,
    title: "Ongoing Orders",
    value: "3",
    footer: {
      color: "text-green-500",
      value: "+55%",
      label: "than last week",
    },
  },
  {
    color: "pink",
    icon: UserIcon,
    title: "Recent Order",
    value: "143",
    footer: {
      color: "text-green-500",
      value: "+3%",
      label: "than last month",
    },
  },
  // {
  //   color: "green",
  //   icon: UserPlusIcon,
  //   title: "New Customers",
  //   value: "34",
  //   footer: {
  //     color: "text-red-500",
  //     value: "-2%",
  //     label: "than yesterday",
  //   },
  // }, 
  {
    color: "orange",
    icon: ChartBarIcon,
    title: "Cart",
    value: "1,430",
    footer: {
      color: "text-green-500",
      value: "+5%",
      label: "than yesterday",
    },
  },
];

export default statisticsCardsData;
