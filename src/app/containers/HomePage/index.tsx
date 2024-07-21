import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

import { Marginer } from '../../components/marginer';
import { Navbar } from '../../components/navbar';
import { TopSection } from './topSection';
import { AboutMe } from './aboutMe';
import { SkillsSection } from './skillsSection';
import { TopProjects } from './myProjects';
import { BlogSection } from './blogSection';
import { Footer } from '../../components/footer';
import { LiveChat } from '../../components/livechat';

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
  return (
    <PageContainer>
      <Navbar />
      <TopSection />
      <Marginer direction="vertical" margin="5em" />
      <AboutMe />
      <SkillsSection />
      <Marginer direction="vertical" margin="2em" />
      <TopProjects />
      <Marginer direction="vertical" margin="0.5em" />
      <BlogSection />
      <Marginer direction="vertical" margin="4em" />
      <Footer />
      <LiveChat />
    </PageContainer>
  );
}
