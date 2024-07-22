import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import tw from 'twin.macro';
import axios from 'axios';

import openButton from '../../../assets/img/livechat/chat-2.png';
import closeButton from '../../../assets/img/livechat/chevron-1.png';
import xButton from '../../../assets/img/livechat/icons8-cancel-24.png';
import botPicture from '../../../assets/img/livechat/SuperCoderMin.png';
import sendButton from '../../../assets/img/livechat/send.png';

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const ChatButton = styled.img`
  ${tw`
    fixed
    bottom-4
    right-4
    w-10
    h-10
    z-50
  `}
  margin: 0;
  padding: 0;
  &:hover {
    cursor: pointer;
    transform: scale(1.2);
  }
`;

const ChatWindow = styled.div`
  ${tw`
    fixed
    bottom-20
    right-4
    w-80
    h-96
    bg-white
    shadow-lg
    z-50
    rounded-lg
    flex
    flex-col
  `}
  @media (max-width: 768px) {
    ${tw`
      w-11/12
      h-2/3
      bottom-4
      right-4
    `}
  }
`;

const PopupCard = styled.div`
  ${tw`
    fixed
    bottom-20
    right-4
    w-40
    bg-white
    shadow-lg
    z-50
    rounded-lg
    flex
    flex-col
    items-center
    p-2
    text-center
    cursor-pointer
    transform
  `}
  animation: ${slideIn} 0.5s forwards;
`;

const Header = styled.div`
  ${tw`
    flex
    items-center
    justify-between
    rounded-t-lg
    bg-gray-600
    p-2
    mb-0
    relative
  `}
`;

const HeaderContent = styled.div`
  ${tw`
    flex
    items-center
  `}
`;

const BotImageWrapper = styled.div`
  ${tw`
    relative
  `}
`;

const BotImage = styled.img`
  ${tw`
    w-10
    h-10
    rounded-full
  `}
`;

const BotImagePopup = styled(BotImage)`
  ${tw`
    absolute
    bg-white
  `}
  top: -25px;
  left: 50%;
  transform: translateX(-50%);
`;

const OnlineIndicator = styled.span`
  ${tw`
    w-2
    h-2
    bg-green-500
    rounded-full
    absolute
    bottom-0
    right-0
    border-white
  `}
`;

const CloseButton = styled.img`
  ${tw`
    w-4
    h-4
    cursor-pointer
    absolute
    top-2
    right-2
  `}
`;

const PopupCloseButton = styled(CloseButton)`
  ${tw`
    filter
    invert
  `}
`;

const HeaderText = styled.p`
  ${tw`
    text-white
    ml-2
  `}
`;

const PopupText = styled.p`
  ${tw`
    mt-6
    mb-2
    text-gray-700
    text-sm
  `}
`;

const ChatContainer = styled.div`
  ${tw`
  flex 
  flex-col 
  flex-grow 
  overflow-hidden`}
`;

const MessagesContainer = styled.div`
  ${tw`
    flex
    flex-col
    p-2
    flex-grow
    overflow-y-auto
  `}
`;

const UserBubble = styled.div`
  ${tw`
  relative 
  p-1 
  px-4
  mb-2
  max-w-[90%] 
  text-xs 
  text-white 
  bg-gray-500
  self-end 
  rounded-full 
  rounded-br-none`}
`;

const BotBubble = styled.div`
  ${tw`
  relative 
  p-1 
  px-4
  mb-2
  max-w-[90%] 
  text-xs 
  text-white
  font-thin
  bg-yellow-500
  self-start 
  rounded-full 
  rounded-tl-none`}
`;

const MessageFormContainer = styled.form`
  ${tw`
    flex
    items-center
    p-2
    border-t
    border-gray-200
    bg-white
  `}
`;

const MessageInput = styled.input`
  ${tw`
    flex-grow
    p-2
    border
    border-gray-300
    rounded-full
    text-xs
    text-gray-500
    mr-2
  `}
  &:focus {
    border: 1px solid #ffa500;
    outline: none;
  }
`;

const SendButton = styled.button`
  ${tw`
    w-8
    h-8
    cursor-pointer
    rounded-full
    p-1
  `}
  background: linear-gradient(180deg, #fdc50f 26.71%, #fb982f 99.36%);
  &:hover {
    background: #faf9f6;
    color: black;
    cursor: pointer;
    border: 1px solid #ffa500;
  }
`;

export function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [maverickResponse, setMaverickResponse] = useState<string | null>(null);
  const [userMessage, setUserMessage] = useState('');
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>(
    [{ text: 'Hi, this is Maverick. How may I help you?', isUser: false }]
  );
  const [isThinking, setIsThinking] = useState(false);
  const messageInputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setShowPopup(false);
  };

  const closePopup = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    e.stopPropagation();
    setShowPopup(false);
  };

  const handleMessageSend = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!userMessage.trim()) return;

    setMessages((prevMessages) => [
      ...prevMessages,
      { text: userMessage, isUser: true },
    ]);
    setIsThinking(true);

    try {
      // const response = await axios.post('apiUrl', { prompt: userMessage });
      // setMaverickResponse(response.data);

      setTimeout(() => {
        const maverickResponse =
          'Oh dear! I am not able to respond to your message right now. Please reach out to Kenneth with the Contact form.';
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: maverickResponse, isUser: false },
        ]);
        setIsThinking(false);
      }, 2000);
    } catch (error) {
      console.log(error);
      const errorMessage =
        'Oh dear! I am not able to respond to your message right now. Please try again later.';
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: errorMessage, isUser: false },
      ]);
    } finally {
      setIsThinking(false);
    }

    setUserMessage('');
    if (messageInputRef.current) {
      messageInputRef.current.value = '';
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserMessage(e.target.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <ChatButton
        src={isOpen ? closeButton : openButton}
        alt="Chat Button"
        onClick={toggleChat}
      />
      {showPopup && (
        <PopupCard onClick={toggleChat}>
          <PopupCloseButton src={xButton} alt="Close" onClick={closePopup} />
          <BotImagePopup src={botPicture} alt="Bot" />
          <PopupText>Got questions? I'm happy to help.</PopupText>
        </PopupCard>
      )}
      {isOpen && (
        <ChatWindow>
          <Header>
            <HeaderContent>
              <BotImageWrapper>
                <BotImage src={botPicture} alt="Bot" />
                <OnlineIndicator />
              </BotImageWrapper>
              <HeaderText>Live Chat</HeaderText>
            </HeaderContent>
            <CloseButton src={xButton} alt="Close" onClick={toggleChat} />
          </Header>
          <ChatContainer>
            <MessagesContainer>
              {messages.map((message, index) =>
                message.isUser ? (
                  <UserBubble key={index}>{message.text}</UserBubble>
                ) : (
                  <BotBubble key={index}>{message.text}</BotBubble>
                )
              )}
              {isThinking && <BotBubble>Thinking...</BotBubble>}
              {maverickResponse && <BotBubble>{maverickResponse}</BotBubble>}
            </MessagesContainer>
            <MessageFormContainer onSubmit={handleMessageSend}>
              <MessageInput
                ref={messageInputRef}
                placeholder="Ask Maverick..."
                value={userMessage}
                onChange={handleInputChange}
              />
              <SendButton type="submit">
                <img src={sendButton} alt="Send" />
              </SendButton>
            </MessageFormContainer>
          </ChatContainer>
        </ChatWindow>
      )}
    </>
  );
}
