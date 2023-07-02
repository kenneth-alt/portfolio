import React from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import { slide as Menu } from "react-burger-menu";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../responsive";
import menuStyles from "./menuStyles";
import { Button } from "../../components/button";

interface NavItemsProps {
  homeRef: React.RefObject<HTMLDivElement>;
  aboutRef: React.RefObject<HTMLDivElement>;
  skillsRef: React.RefObject<HTMLDivElement>;
  projectsRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
}

const NavItemsContainer = styled.div`
  ${tw`
    flex
  `}
`;

const ListContainer = styled.ul`
  ${tw`
    flex
    list-none
  `}
`;

const NavItem = styled.li<{ menu?: any }>`
  ${tw`
    pl-1
    pr-1
    pt-1
    pb-1
    text-xs
    md:text-base
    text-black
    font-medium
    mr-1
    md:mr-5
    cursor-pointer
    transition
    duration-300
    ease-in-out
    hover:text-orange-500
  `};

  ${({ menu }) => 
    menu && 
    css`
      ${tw`
        text-orange-100
        text-lg
        mb-3
        focus:text-orange-100
      `};
  `};
  &:hover {
    color: orange;
  }
`;

const ButtonsContainer = styled.div`
  ${tw`
    flex
    
  `};
`;



export function NavItems({ homeRef, aboutRef, skillsRef, projectsRef, contactRef }: NavItemsProps) {
  
  const handleNavItemClick = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

  if (isMobile)
    return (
      <Menu right styles={menuStyles}>
        <NavItemsContainer>
          <ListContainer className="flex-col">
            <NavItem menu onClick={() => handleNavItemClick(homeRef)}>
              Home
            </NavItem>
            <NavItem menu onClick={() => handleNavItemClick(aboutRef)}>
              About
            </NavItem>
            <NavItem menu onClick={() => handleNavItemClick(skillsRef)}>
              Skills
            </NavItem>
            <NavItem menu onClick={() => handleNavItemClick(projectsRef)}>
              Projects
            </NavItem>
          </ListContainer>
          <ButtonsContainer onClick={() => handleNavItemClick(contactRef)}>
            <Button theme="filled" text="Contact" />
          </ButtonsContainer>
        </NavItemsContainer>
      </Menu>
    )

  return (
    <NavItemsContainer>
      <ListContainer>
        <NavItem onClick={() => handleNavItemClick(homeRef)}>
          Home
        </NavItem>
        <NavItem onClick={() => handleNavItemClick(aboutRef)}>
          About
        </NavItem>
        <NavItem onClick={() => handleNavItemClick(skillsRef)}>
          Skills
        </NavItem>
        <NavItem onClick={() => handleNavItemClick(projectsRef)}>
          Projects
        </NavItem>
      </ListContainer>
      <ButtonsContainer onClick={() => handleNavItemClick(contactRef)}>
        <Button theme="filled" text="Contact" />
      </ButtonsContainer>
    </NavItemsContainer>
  )  
}