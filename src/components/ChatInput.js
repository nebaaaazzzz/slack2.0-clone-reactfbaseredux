import { addDoc, collection, doc } from "firebase/firestore";
import React, { useRef } from "react";
import styled from "styled-components";
import { auth, db } from "../firebase";
import { serverTimestamp } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
function ChatInput({ channelName, channelId, chatRef }) {
  const [user] = useAuthState(auth);
  const inputRef = useRef(null);
  console.log(serverTimestamp());
  async function handleSubmit(e) {
    e.preventDefault();
    if (!channelId) return;
    const docRef = await doc(db, "rooms", channelId);
    const colRef = collection(docRef, "messages");
    await addDoc(colRef, {
      message: inputRef.current.value,
      timestamp: serverTimestamp(),
      user: user?.displayName,
      userImage: user?.photoURL,
    });
    inputRef.current.value = "";
    chatRef.current.scrollIntoView();
  }
  return (
    <ChatInputContainer>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} placeholder={`Message #${channelName?.name}`} />
        <button hidden type="submit">
          SEND
        </button>
      </form>
    </ChatInputContainer>
  );
}
const ChatInputContainer = styled.div`
  border-radius: 20px;
  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }
  > form > input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 20px;
    outline: none;
  }
`;
export default ChatInput;
