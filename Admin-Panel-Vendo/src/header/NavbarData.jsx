import { TbBasketPlus } from "react-icons/tb";
import { FaChartPie } from "react-icons/fa6";
import { GiTwoCoins } from "react-icons/gi";
import { TiShoppingCart } from "react-icons/ti";
import { IoPerson } from "react-icons/io5";
import { CiPercent } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";

export const NavbarData = [
    {
        path: "/",
        name: "Dashboard",
        icon: <FaChartPie />,
    },
    {
        path: "/product",
        name: "Products",
        icon: <TbBasketPlus />,
    },
    {
        path: "/order",
        name: "Orders",
        icon: <GiTwoCoins />,
    },
    {
        path: "/transactions",
        name: "Transactions",
        icon: <CiPercent />,
    },
    {
        path: "/settings",
        name: "Settings",
        icon: <CiSettings />,
    },

];
