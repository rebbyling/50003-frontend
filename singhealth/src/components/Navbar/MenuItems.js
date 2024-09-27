import * as Ai from "react-icons/ai";
import * as Fi from "react-icons/fi";
import * as Io from "react-icons/io5";
import React from "react";

export const MenuItems = [
  {
    title: "Search",
    url: "/search",
    // cName: "icons",
    image: <Fi.FiSearch />,
  },
  {
    title: "Home",
    url: "/",
    // cName: "icons",
    image: <Ai.AiFillHome />,
  },
  {
    title: "Avatar",
    url: "/avatar",
    // cName: "icons",
    image: <Io.IoPersonCircleOutline />,
  },
];
