import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { AiOutlineStar, AiOutlineInfoCircle } from "react-icons/ai";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import ChatInput from "./ChatInput";
import { db } from "../firebase";
import { collection, doc, orderBy, query } from "firebase/firestore";
import Message from "./Message";
function Chat() {
  const chatRef = useRef(null);
  const { roomId, loading } = useSelector((state) => state.app);
  const [roomDetail] = useDocument(
    roomId && doc(collection(db, "rooms"), roomId)
  );

  const [roomMessages] = useCollection(
    roomId &&
      query(
        collection(doc(db, "rooms", roomId), "messages"),
        orderBy("timestamp", "asc")
      )
  );
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [roomId, loading]);
  return (
    <ChatContainer>
      {roomDetail && roomId && (
        <>
          <ChatHeader>
            <ChatHeaderLeft>
              <h4>
                <storng>#{roomDetail?.data()?.name}</storng>
              </h4>
              <AiOutlineStar className="star-icon" />
            </ChatHeaderLeft>
            <ChatHeaderRight>
              <p>
                <AiOutlineInfoCircle /> Details
              </p>
            </ChatHeaderRight>
          </ChatHeader>
          <ChatMessages>
            {roomMessages?.docs.map((roomMessage) => {
              const { id, timestamp, user, userImage, message } =
                roomMessage.data();
              return (
                <Message
                  key={id}
                  timestamp={timestamp?.seconds}
                  user={user}
                  message={message}
                  userImage={userImage}
                />
              );
            })}
            <ChatBottom ref={chatRef} />
          </ChatMessages>
          <ChatInput
            chatRef={chatRef}
            channelName={roomDetail && roomDetail.data()}
            channelId={roomId}
          />
        </>
      )}
    </ChatContainer>
  );
}

const ChatContainer = styled.div`
  flex: 0.7;
  flex-grow: 1;
  overflow-y: scroll;
  margin-top: 60px;
`;
const ChatHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid lightgray;
`;

const ChatHeaderLeft = styled.div`
  display: flex;
  align-items: center;

  > h4 {
    display: flex;
    text-transform: lowercase;
    margin-right: 10px;
  }
  > h4 .star-icon {
    margin-left: 10px;
    font-size: 18px;
  }
`;
const ChatHeaderRight = styled.div`
  display: flex;
  align-items: center;
`;
const ChatMessages = styled.div``;
const ChatBottom = styled.div`
  padding-bottom: 200px;
`;
export default Chat;
