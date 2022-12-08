import React from "react";
import styled from "styled-components";
import { BsFillRecordFill } from "react-icons/bs";
import { IoMdCreate } from "react-icons/io";
import SidebarOption from "./SidebarOption";
import { BiCommentDetail } from "react-icons/bi";
import {
  MdAddReaction,
  MdOutlineOpenInBrowser,
  MdOutlineKeyboardArrowDown,
  MdKeyboardArrowUp,
} from "react-icons/md";
import { VscAdd } from "react-icons/vsc";
import {
  AiOutlineAppstore,
  AiFillFolderOpen,
  AiTwotoneSave,
} from "react-icons/ai";

function Sidebar() {
  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>neboyi</h2>
          <h3>
            <BsFillRecordFill className="record-icon" /> neba{" "}
          </h3>
        </SidebarInfo>

        <IoMdCreate className="create-icon" />
      </SidebarHeader>
      {[
        {
          Icon: BiCommentDetail,
          title: "Threads",
        },
        {
          Icon: MdAddReaction,
          title: "Mention & reaction",
        },
        {
          Icon: AiTwotoneSave,
          title: "Saved items",
        },
        {
          Icon: MdOutlineOpenInBrowser,
          title: "Channel browser",
        },
        {
          Icon: AiOutlineAppstore,
          title: "Apps",
        },
        {
          Icon: AiFillFolderOpen,
          title: "File browser",
        },
        {
          Icon: MdKeyboardArrowUp,
          title: "Show less",
        },
      ].map(({ Icon, title }) => (
        <SidebarOption Icon={Icon} title={title} />
      ))}
      <hr />
      <SidebarOption title="channels" Icon={MdOutlineKeyboardArrowDown} />
      <hr />
      <SidebarOption title="channel" addChannelOption Icon={VscAdd} />
    </SidebarContainer>
  );
}
const SidebarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #49274b;
  padding: 13px;
  > .create-icon {
    padding: 8px;
    color: #49274b;
    font-size: 18px;
    background-color: #fff;
    border-radius: 999px;
  }
`;
const SidebarInfo = styled.div`
  flex: 1;
  > h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
  }
  > h3 {
    display: flex;
    font-size: 13px;
    align-items: center;
    font-weight: 400;
  }
  > h3 .record-icon {
    color: green;
    margin-right: 2px;
    margin-top: 1px;
    font-size: 14px;
  }
`;
const SidebarContainer = styled.div`
  background-color: var(--slack-color);
  color: #fff;
  flex: 0.3;
  margin-top: 40px;
  max-width: 260px;
  border-top: 10px solid #49274b;
  > hr {
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid #49274b;
  }
`;
export default Sidebar;
