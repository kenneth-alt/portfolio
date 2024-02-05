import React, { useState } from 'react';
import { useNavigationContext } from '../../context/NavigationContext';
import styled from 'styled-components';
import tw from 'twin.macro';
import emailjs from '@emailjs/browser';

import { Button } from '../button';

const FooterContainer = styled.div`
  //min-height: 24em;
  background-color: #1d2124;
  ${tw`
    flex
    flex-col
    min-w-full
    md:pt-20
    items-center
    justify-center
  `};
`;

const InnerContainer = styled.div`
  ${tw`
    flex
    flex-col
    p-3
  `};
`;

const FooterTextContainer = styled.div`
  ${tw`
    flex
  `};
`;

const FooterText = styled.small`
  font-size: 16px;
  ${tw`
    text-gray-300
    pt-3
    pb-3
    pl-1
    pr-1
  `}
`;

const FormContainer = styled.div`
  ${tw`
    flex
    flex-col
  `};
`;

const InputContainer = styled.div`
  ${tw`
    flex
    flex-wrap
    justify-between
    mb-1
  `};
`;

const NameEmailContainer = styled.div`
  ${tw`
    flex
    flex-col
    w-full
    mb-1
  `};
`;

const Input = styled.input`
  font-size: 14px;
  ${tw`
   flex-1
   rounded-md
   bg-gray-300
   p-1
   m-1
  `};
`;

const TextAreaContainer = styled.div`
  ${tw`
    flex
    flex-wrap
    justify-between
    m-1
  `};
`;

const TextArea = styled.textarea`
  font-size: 14px;
  ${tw`
    w-full
    rounded-md
    bg-gray-300
    p-1
    mb-3
  `};
`;

const BottomContainer = styled.div`
  ${tw`
    w-full
    flex
    max-w-screen-2xl
    justify-center
    mt-7
    md:mt-1
    p-3
  `};
`;

const ButtonsContainer = styled.div`
  ${tw`
    flex
    pl-2
  `};
`;

const CopyrightText = styled.small`
  font-size: 12px;
  ${tw`
    text-gray-300
  `}
`;

export const Footer = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Clear previous error messages
    setNameError('');
    setEmailError('');
    setMessageError('');
    setResponseMessage('');

    let isValid = true;

    // Perform form validation here
    if (name.trim() === '') {
      setNameError('Please enter your name');
      isValid = false;
    }

    if (email.trim() === '') {
      setEmailError('Please enter your email');
      isValid = false;
    }

    if (message.trim() === '') {
      setMessageError('Please enter your message');
      isValid = false;
    }

    if (!isValid) {
      return false;
    }

    // Form is valid, proceed with email sending
    sendEmail();

    // Reset form inputs after successful submission
    setName('');
    setEmail('');
    setMessage('');
  };

  const sendEmail = () => {
    var params = {
      from_name: name,
      email_id: email,
      message: message,
    };

    emailjs
      .send('service_4fd7ty9', 'template_ikz5lep', params, '_UyzTNpPZikFOjrvP')
      .then((res) => {
        setResponseMessage(
          "Message successfully sent! I'll be in touch with you shortly."
        );
      })
      .catch((error) => {
        setResponseMessage(
          'Error! Server is unable to send message. Please try again later.'
        );
      });
  };

  const { contactRef } = useNavigationContext();

  return (
    <FooterContainer ref={contactRef}>
      <InnerContainer>
        <FooterTextContainer>
          <FooterText>
            For inquiries, please contact me by kindly filling out the form
            below.
          </FooterText>
        </FooterTextContainer>

        <FormContainer>
          <form onSubmit={handleSubmit}>
            <InputContainer>
              <NameEmailContainer>
                <Input
                  type="text"
                  id="name"
                  placeholder="Name"
                  value={name}
                  onChange={(e: {
                    target: { value: React.SetStateAction<string> };
                  }) => setName(e.target.value)}
                />
                {nameError && (
                  <div className="text-red-500 text-xs pl-2">{nameError}</div>
                )}
              </NameEmailContainer>
              <NameEmailContainer>
                <Input
                  type="email"
                  id="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e: {
                    target: { value: React.SetStateAction<string> };
                  }) => setEmail(e.target.value)}
                />
                {emailError && (
                  <div className="text-red-500 text-xs pl-2">{emailError}</div>
                )}
              </NameEmailContainer>
            </InputContainer>

            <TextAreaContainer>
              <TextArea
                name="message"
                id="message"
                rows={5}
                placeholder="Message"
                value={message}
                onChange={(e: {
                  target: { value: React.SetStateAction<string> };
                }) => setMessage(e.target.value)}
              />
              {messageError && (
                <div className="text-red-500 text-xs pl-1 pb-2">
                  {messageError}
                </div>
              )}
            </TextAreaContainer>
            {responseMessage && (
              <div
                className={
                  responseMessage.startsWith('Error')
                    ? 'text-red-500 text-xs pl-2 pb-2'
                    : 'text-green-500 text-xs pl-2 pb-2'
                }
              >
                {responseMessage}{' '}
              </div>
            )}
            <ButtonsContainer>
              <Button theme="filled" text="Send Message" />
            </ButtonsContainer>
          </form>
        </FormContainer>
        <BottomContainer>
          <CopyrightText>
            © {new Date().getFullYear()} Kenneth Ugo.
          </CopyrightText>
        </BottomContainer>
      </InnerContainer>
    </FooterContainer>
  );
};
