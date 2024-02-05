import React from 'react';
import { useNavigationContext } from '../../context/NavigationContext';
import styled from 'styled-components';
import tw from 'twin.macro';

const TopBlogsContainer = styled.div`
  ${tw`
    max-w-screen-lg
    w-full
    flex
    flex-col
    items-center
    justify-center
    pt-20
    pr-4
    pl-4
    md:pl-0
    md:pr-0
    mb-10
  `};
`;

const Title = styled.h2`
  ${tw`
    text-3xl
    lg:text-5xl
    text-black
    font-extrabold
  `};
`;

const BlogsContainer = styled.div`
  ${tw`
    w-full
    flex
    flex-wrap
    justify-center
    mt-7
    md:mt-10
    mb-14
  `};
`;

const DotsContainer = styled.div`
  ${tw`
    mt-4
  `};
`;

export const BlogSection = () => {
  const { blogsRef } = useNavigationContext();
  return (
    <TopBlogsContainer ref={blogsRef}>
      <Title>Blogs: Navigating the Digital Odyssey</Title>
      <BlogsContainer>Coming soon...</BlogsContainer>
    </TopBlogsContainer>
  );
};
