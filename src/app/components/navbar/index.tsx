import React, { useState, useEffect } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Logo } from "../logo";
import { NavItems } from "./navItems";

interface NavbarProps {
  homeRef: React.RefObject<HTMLDivElement>;
  aboutRef: React.RefObject<HTMLDivElement>;
  skillsRef: React.RefObject<HTMLDivElement>;
  projectsRef: React.RefObject<HTMLDivElement>;
  blogsRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
}

const NavbarContainer = styled.div`
  min-height: 68px;
  ${tw`
   w-full
   max-w-screen-2xl 
   flex
   flex-row
   items-center
   lg:pl-12
   lg:pr-12
   justify-between
  `}
  position: sticky;
  top: 0;
  background-color: #FAF9F6;
  z-index: 999;
`;

const LogoContainer = styled.div``;

export function Navbar({ homeRef, aboutRef, skillsRef, projectsRef, blogsRef, contactRef }: NavbarProps) {
  return (
    <NavbarContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <NavItems homeRef={homeRef} aboutRef={aboutRef} skillsRef={skillsRef} projectsRef={projectsRef} blogsRef={blogsRef} contactRef={contactRef} />
    </NavbarContainer>
  )
}