import React from "react";
import { IoSend } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import { MdAccessTime } from "react-icons/md";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import { GiHelp } from "react-icons/gi";
function Header() {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <HeaderAvatar size={30} />
        <MdAccessTime className="access-time" />
      </HeaderLeft>
      <HeaderSearch>
        <AiOutlineSearch />
        <input placeholder="Search..." />
      </HeaderSearch>
      <HeaderRight>
        <GiHelp className="help-icon" />
      </HeaderRight>
    </HeaderContainer>
  );
}
const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  color: #fff;
  background-color: var(--slack-color);
`;
const HeaderLeft = styled.div`
  flex: 0.4;
  display: flex;
  align-items: center;
  margin-left: 20px;
  > .access-time {
    margin-left: auto;
    margin-right: 30px;
  }
`;
const HeaderAvatar = styled(RxAvatar)`
  &:hover {
    opacity: 0.8;
  }
`;
const HeaderRight = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  > .help-icon {
    margin-left: auto;
    margin-right: 20px;
  }
`;
const HeaderSearch = styled.div`
  flex: 0.4;
  opacity: 1;
  border-radius: 6px;
  text-align: center;
  background-color: #421f44;
  padding: 0 50px;
  color: gray;
  border: 1px solid gray;
  > input {
    background-color: transparent;
    border: none;
    text-align: center;
    min-width: 20vw;
    outline: 0;
    color: #fff;
  }
`;

export default Header;
