import * as Icons from "react-icons/io5";
import { IMenuItem } from '../../../types'

export const menu: IMenuItem[] = [
  {
    title: "My page",
    link: "/profile",
    icon: Icons.IoHome,
  },
  {
    title: "Friends",
    link: "/friends",
    icon: Icons.IoPeople,
  },
  {
    title: "News",
    link: "/",
    icon: Icons.IoNewspaper
  },
];
