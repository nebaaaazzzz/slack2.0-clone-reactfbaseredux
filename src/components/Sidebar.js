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
import { useCollection } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import { auth, db } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function Sidebar() {
  const [user] = useAuthState(auth);
  const [channels, loading] = useCollection(collection(db, "rooms"), {
    snapshotListenOptions: {
      includeMetadataChanges: false,
    },
  });
  if (loading) return <h1>loading</h1>;
  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>{user?.displayName}</h2>
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
      {channels.docs.map((channel) => {
        return (
          <SidebarOption
            key={channel.id}
            id={channel.id}
            title={channel.data().name}
          />
        );
      })}
    </SidebarContainer>
  );
}
const SidebarHeader = styled.div`
  display: flex;
  margin-top: 10px;
  border-bottom: 1px solid #49274b;
  padding: 20px 10px;
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
