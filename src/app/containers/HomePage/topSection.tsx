import React from 'react';
import { useNavigationContext } from '../../context/NavigationContext';
import styled, { keyframes } from 'styled-components';
import tw from 'twin.macro';

import TopSectionImg from '../../../assets/img/SuperCoder.png';
import BlobImg from '../../../assets/img/blob.svg';
import LinkedIn from '../../../assets/img/linkedin.png';
import GitHub from '../../../assets/img/github.png';
import Medium from '../../../assets/img/medium.png';
import { SCREENS } from '../../components/responsive';

const bounceAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  25% {
    transform: translateY(0);
  }
  35% {
    transform: translateY(-700px);
  }
  65% {
    transform: translateY(-700px);
  }
  75% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(0);
  }
`;

const TopSectionContainer = styled.div`
  min-height: 540px;
  ${tw`
    w-full
    // max-w-screen-2xl
    flex
    justify-between
    pt-20
    pl-3
    pr-3
    lg:pl-12
    lg:pr-12
  `};
`;

const LeftContainer = styled.div`
  ${tw`
    w-1/2
    flex
    flex-col
    justify-between
  `};
  z-index: 9;
`;

const RightContainer = styled.div`
  ${tw`
    w-1/2
    flex
    flex-col
    relative
    mt-10
  `};
`;

const Greeting = styled.h1`
  ${tw`
    font-bold
    text-2xl
    xl:text-5xl
    sm:text-3xl
    md:text-4xl
    lg:font-black
    md:font-extrabold
    text-black
    sm:leading-snug
    lg:leading-normal
    xl:leading-relaxed
  `};
`;

const MyName = styled.h1`
  ${tw`
    font-bold
    text-2xl
    xl:text-5xl
    sm:text-3xl
    md:text-4xl
    lg:font-black
    md:font-extrabold
    text-orange-500
    sm:leading-snug
    lg:leading-normal
    xl:leading-relaxed
  `};
`;

const Description = styled.p`
  ${tw`
    text-xs
    lg:text-sm
    xl:text-lg
    sm:max-h-full
    overflow-hidden
    max-h-20
    text-gray-600 
  `};
`;

const SocialsContainer = styled.div`
  display: flex;
  justify-content: flex-start;

  img {
    width: 50%;
    height: auto;

    &:hover {
      cursor: pointer;
      transform: scale(1.2)
  }
`;

const BlobContainer = styled.div`
  width: 20em;
  height: 10em;
  position: absolute;
  right: -5em;
  top: -9em;
  transform: rotate(-30deg);

  img {
    width: 100%;
    height: auto;
    max-height: max-content;
  }

  @media (min-width: ${SCREENS.sm}) {
    width: 40em;
    max-height: 10em;
    right: -9em;
    top: -16em;
    transform: rotate(-25deg);
  }

  @media (min-width: ${SCREENS.lg}) {
    width: 50em;
    max-height: 30em;
    right: -7em;
    top: -15em;
    transform: rotate(-30deg);
  }

  @media (min-width: ${SCREENS.xl}) {
    width: 70em;
    max-height: 30em;
    right: -15em;
    top: -25em;
    transform: rotate(-20deg);
  }
`;

const SuperCoder = styled.div`
  width: auto;
  height: 10em;
  right: -6em;
  top: -5em;
  position: absolute;

  img {
    width: auto;
    height: 100%;
    animation: ${bounceAnimation} 15s infinite;
  }

  @media (min-width: ${SCREENS.sm}) {
    height: 16em;
    right: -6em;
    top: -6em;
  }

  @media (min-width: ${SCREENS.lg}) {
    height: 21em;
    right: -8em;
    top: -5em;
  }

  @media (min-width: ${SCREENS.xl}) {
    height: 30em;
    right: -13em;
    top: -9em;
  }
`;

export const TopSection = () => {
  const { homeRef } = useNavigationContext();
  return (
    <TopSectionContainer ref={homeRef}>
      <LeftContainer>
        <div>
          <Greeting>Hi, I am</Greeting>
          <MyName>Kenneth</MyName>
          <Description>
            Solution-oriented <strong>Cloud/DevOps</strong>{' '}
            <strong>Software</strong> Engineer.
          </Description>
        </div>
        <SocialsContainer>
          <a
            href="https://www.linkedin.com/in/kenneth-ugo"
            target="blank"
            rel="noopener noreferrer"
          >
            <img src={LinkedIn} />
          </a>
          <a
            href="https://github.com/kenneth-alt"
            target="blank"
            rel="noopener noreferrer"
          >
            <img src={GitHub} />
          </a>
          <a
            href="https://medium.com/@kenneth-alt"
            target="blank"
            rel="noopener noreferrer"
          >
            <img src={Medium} />
          </a>
        </SocialsContainer>
      </LeftContainer>
      <RightContainer>
        <BlobContainer>
          <img src={BlobImg} />
        </BlobContainer>
        <SuperCoder>
          <img src={TopSectionImg} />
        </SuperCoder>
      </RightContainer>
    </TopSectionContainer>
  );
};
