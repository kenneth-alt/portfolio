import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import { Marginer } from "../../components/marginer";
import { Navbar } from "../../components/navbar";
import { TopSection } from "./topSection";
import { AboutMe } from "./aboutMe"
import { SkillsSection } from "./skillsSection"
import { TopProjects } from "./myProjects";
import { BlogSection } from "./blogSection";
import { Footer } from "../../components/footer";


const PageContainer = styled.div`
	${tw`
		flex
		flex-col
		w-full
		h-full
		items-center
		overflow-x-hidden
	`}
`;


export function HomePage() {
  const homeRef = React.createRef<HTMLDivElement>();
  const aboutRef = React.createRef<HTMLDivElement>();
  const skillsRef = React.createRef<HTMLDivElement>();
  const projectsRef = React.createRef<HTMLDivElement>();
  const blogsRef = React.createRef<HTMLDivElement>();
  const contactRef = React.createRef<HTMLDivElement>();

  return (
    <PageContainer>
      <Navbar homeRef={homeRef} aboutRef={aboutRef} skillsRef={skillsRef} projectsRef={projectsRef} blogsRef={blogsRef} contactRef={contactRef} />
      <TopSection ref={homeRef} />
      <Marginer direction="vertical" margin="5em" />
      <AboutMe ref={aboutRef} />
      <SkillsSection ref={skillsRef} />
      <Marginer direction="vertical" margin="2em" />
      <TopProjects ref={projectsRef} />
      <Marginer direction="vertical" margin="0.5em" />
      <BlogSection ref={blogsRef} />
      <Marginer direction="vertical" margin="4em" />
      <Footer ref={contactRef} />
    </PageContainer>
  )
}