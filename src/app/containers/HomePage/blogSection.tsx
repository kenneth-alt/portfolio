import React, { useState, forwardRef } from "react";
import styled from "styled-components";
import tw from "twin.macro";


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
  `};
`;

const DotsContainer = styled.div`
  ${tw`
    mt-4
  `};
`;


export const BlogSection = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <TopBlogsContainer ref={ref}>
      <Title>Blogs: Navigating the Digital Odyssey</Title>
      <BlogsContainer>
        Coming soon...
      </BlogsContainer>
    </TopBlogsContainer>
  )
});
