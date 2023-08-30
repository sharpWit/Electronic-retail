import { BsLaptop, BsBook } from "react-icons/bs";
import { IoShirtOutline, IoShirtSharp } from "react-icons/io5";
import { MdOutlineLocalOffer, MdOutlineToys } from "react-icons/md";
import { RiHeartPulseLine, RiFireLine } from "react-icons/ri";
import { AiOutlineHome } from "react-icons/ai";
import { BiFootball } from "react-icons/bi";

import { ImMobile } from "react-icons/im";
import { FiMonitor, FiHeadphones } from "react-icons/fi";

import { GiLargeDress } from "react-icons/gi";
import { FaBaby, FaRedhat } from "react-icons/fa";
import fa from "./fa";

const menuItems = [
  {
    category: `${fa.digital}`,
    icon: BsLaptop,
    productsGroup: [
      {
        title: `${fa.laptop}`,
        icon: BsLaptop,
        subtitles: [
          `${fa.asus}`,
          `${fa.apple}`,
          `${fa.dell}`,
          `${fa.lenovo}`,
          `${fa.samsung}`,
          `${fa.hp}`,
          `${fa.huawei}`,
          `${fa.acer}`,
          `${fa.msi}`,
        ],
      },
      {
        title: `${fa.mobile}`,
        icon: ImMobile,
        subtitles: [
          `${fa.samsung}`,
          `${fa.apple}`,
          `${fa.nokia}`,
          `${fa.xiaomi}`,
          `${fa.motorola}`,
          `${fa.lg}`,
          `${fa.sony}`,
        ],
      },
      {
        title: `${fa.computer}`,
        icon: FiMonitor,
        subtitles: [
          `${fa.monitor}`,
          `${fa.mouse}`,
          `${fa.keyboard}`,
          `${fa.hard}`,
        ],
      },
      {
        title: `${fa.other}`,
        icon: FiHeadphones,
        subtitles: [
          `${fa.tablet}`,
          `${fa.powerBank}`,
          `${fa.speaker}`,
          `${fa.headphones}`,
        ],
      },
    ],
  },
  {
    category: `${fa.fashion}`,
    icon: IoShirtOutline,
    productsGroup: [
      {
        title: `${fa.women}`,
        icon: GiLargeDress,
        subtitles: [
          `${fa.dress}`,
          `${fa.skirt}`,
          `${fa.jeans}`,
          `${fa.pants}`,
          `${fa.tShirt}`,
          `${fa.shoes}`,
          `${fa.scarf}`,
        ],
      },
      {
        title: `${fa.men}`,
        icon: IoShirtSharp,
        subtitles: [
          `${fa.shirt}`,
          `${fa.pants}`,
          `${fa.tie}`,
          `${fa.tShirt}`,
          `${fa.shoes}`,
          `${fa.jeans}`,
        ],
      },
      {
        title: `${fa.child}`,
        icon: FaBaby,
        subtitles: [
          `${fa.overalls}`,
          `${fa.mittens}`,
          `${fa.babyApron}`,
          `${fa.shoes}`,
          `${fa.tShirt}`,
        ],
      },
      {
        title: `${fa.other}`,
        icon: FaRedhat,
        subtitles: [`${fa.watch}`, `${fa.wallet}`, `${fa.hat}`, `${fa.belt}`],
      },
    ],
  },
  { category: `${fa.toys}`, icon: MdOutlineToys },
  { category: `${fa.cosmetic}`, icon: RiHeartPulseLine },
  { category: `${fa.home}`, icon: AiOutlineHome },
  { category: `${fa.sport}`, icon: BiFootball },
  { category: `${fa.stationery}`, icon: BsBook },
];

export default menuItems;

export const extraMenu = [
  { title: `${fa.offer}`, icon: MdOutlineLocalOffer, href: "/offers" },
  { title: `${fa.bestSells}`, icon: RiFireLine, href: "/" },
];
