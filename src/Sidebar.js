import React from 'react'
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import { IoMdHome } from "react-icons/io";
import { MdWhatshot } from "react-icons/md";
import { MdOutlineSubscriptions } from "react-icons/md";
import { MdVideoLibrary } from "react-icons/md";
import { MdHistory } from "react-icons/md";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { MdWatchLater } from "react-icons/md";
import { BiLike } from "react-icons/bi";
import { MdOutlineExpandMore } from "react-icons/md";


function Sidebar() {
  return (
    <div className='sidebar'>

        <SidebarRow selected Icon={IoMdHome} title="Home" />
        <SidebarRow Icon={MdWhatshot} title="Trending" />
        <SidebarRow Icon={MdOutlineSubscriptions} title="Subscription" />
        <hr />
        <SidebarRow Icon={MdVideoLibrary} title="Library" />
        <SidebarRow Icon={MdHistory} title="History" />
        <SidebarRow Icon={MdOutlineOndemandVideo} title="Your videos" />
        <SidebarRow Icon={MdWatchLater} title="Watch Later" />
        <SidebarRow Icon={BiLike} title="Liked videos" />
        <SidebarRow Icon={MdOutlineExpandMore} title="Show more" />
        <hr />


    </div>
  )
}

export default Sidebar