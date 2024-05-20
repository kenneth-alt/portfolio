import React from 'react';
import { useNavigationContext } from '../../context/NavigationContext';
import styled from 'styled-components';
import tw from 'twin.macro';

import DevSkills from '../../../assets/img/web-development.png';
import DevOpsSkills from '../../../assets/img/devopsSkill.png';
import DataEngSkills from '../../../assets/img/data-science.png';

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
    transform: scale(1.07);
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

export const SkillsSection = () => {
  const { skillsRef } = useNavigationContext();
  return (
    <Container ref={skillsRef}>
      <Title>My Skills: A man of many hats!</Title>
      <StepsContainer>
        <StepContainer>
          <Step>
            <StepIcon>
              <img src={DevSkills} />
            </StepIcon>
            <StepTitle>Software Engineering</StepTitle>
            <StepDescription>
              Python, JavaScript, Node.js/Express, Nest.js, TypeScript, React,
              Next.js, MongoDB, MySQL, Postgres, APIs, ORMs, Agile/Scrum.
            </StepDescription>
          </Step>
        </StepContainer>
        <StepContainer>
          <Step>
            <StepIcon>
              <img src={DevOpsSkills} />
            </StepIcon>
            <StepTitle>DevOps/Infrastructure</StepTitle>
            <StepDescription>
              GitOps, Azure, AWS, Jenkins, GitHubActions, Docker, Kubernetes,
              Terraform, Ansible, Prometheus, Grafana, ELK, Bash, Webservers,
              Linux.
            </StepDescription>
          </Step>
        </StepContainer>
        <StepContainer>
          <Step>
            <StepIcon>
              <img src={DataEngSkills} />
            </StepIcon>
            <StepTitle>Data Engineering</StepTitle>
            <StepDescription>
              ETL, ELT, SQL, T-SQL, Data Pipelines, Azure ADF, Databricks, &
              Synapse, AWS S3, Redshift, Lambda, EMR & Glue, Airflow, Kafka,
              Redis.
            </StepDescription>
          </Step>
        </StepContainer>
      </StepsContainer>
    </Container>
  );
};
