import React, { forwardRef } from "react";
import styled from "styled-components";
import tw from "twin.macro";

import DevSkills from "../../../assets/img/web-development.png"
import DevOpsSkills from "../../../assets/img/devopsSkill.png"
import EssentialSkills from "../../../assets/img/essentialSkills.png"

const Container = styled.div`
  ${tw`
    w-full
    flex
    flex-col
    items-center
    pt-20    
    pb-3
  `};
`;

const Title = styled.h2`
  ${tw`
    text-3xl
    lg:text-5xl
    text-black
    font-extrabold
    m-3
  `};
`;

const StepsContainer = styled.div`
  ${tw`
    flex
    justify-evenly
    flex-wrap
    mt-5
    lg:mt-16
  `};
`;

const StepContainer = styled.div`
  ${tw`
    flex
    flex-col
    md:w-64
    items-center
    transition-colors
    hover:text-orange-500
    m-3
  `};
  > * {
    flex: 1;
  }
  &:hover {
    cursor: pointer;
    transform: scale(1.07)
  }
`;

const Step = styled.div`
  width: 16.5em;
  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
  ${tw`
    flex
    flex-col
    rounded-lg
    items-center
    justify-center
    py-4
  `};
`;


const StepTitle = styled.h4`
  ${tw`
    text-black
    text-lg
    font-semibold
    mt-4
  `};
`;

const StepDescription = styled.p`
  ${tw`
    w-10/12
    text-xs
    md:text-sm
    text-center
    text-gray-600
  `};
`;

const StepIcon = styled.span`
  display: flex;
  justify-content: center;

  img {
    width: 30%;
    height: auto;

  `;


  export const SkillsSection = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <Container ref={ref}>
      <Title>My Skills: A man of many hats!</Title>
      <StepsContainer>
        <StepContainer>
          <Step>
            <StepIcon>
              <img src={DevSkills} />
            </StepIcon>
            <StepTitle>Developer</StepTitle>
            <StepDescription>
              JavaScript, React, Express, Node.js, MongoDB, Python, Flask, fastapi, MySQL, Agile/Scrum.
            </StepDescription>
          </Step>
        </StepContainer>
        <StepContainer>
          <Step>
            <StepIcon>
            <img src={DevOpsSkills} />
            </StepIcon>
            <StepTitle>DevOps Engineer</StepTitle>
            <StepDescription>
              AWS, Azure, Jenkins, GitHubActions, Docker, Kubernetes, Terraform, Ansible, Prometheus-Grafana, Bash, YAML, Nginix, Linux server.
            </StepDescription>
          </Step>
        </StepContainer>
        <StepContainer>
          <Step>
            <StepIcon>
                <img src={EssentialSkills} />
            </StepIcon>
            <StepTitle>Essential Skills</StepTitle>
            <StepDescription>
              Leadership, Critical Thinking, Communication & Collaboration, Lifelong Learning.
            </StepDescription>
          </Step>
        </StepContainer>
      </StepsContainer>
    </Container>
  );
});