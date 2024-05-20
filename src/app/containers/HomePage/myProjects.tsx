import React, { useState, forwardRef } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import Carousel, { Dots, slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { useMediaQuery } from 'react-responsive';
import { SCREENS } from '../../components/responsive';
import { IProject } from '../../../typings/project';
import { Project } from '../../components/project';
import { useNavigationContext } from '../../context/NavigationContext';

const TopProjectsContainer = styled.div`
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

const ProjectsContainer = styled.div`
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

export const TopProjects = () => {
  const [devCurrent, setDevCurrent] = useState(0);
  const [devopsCurrent, setDevopsCurrent] = useState(0);
  const [dataEngCurrent, setDataEngCurrent] = useState(0);

  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

  const Clima: IProject = {
    imgSrc: 'https://i.postimg.cc/CKT5P5n1/clima1.png',
    name: 'Clima',
    summary:
      'Mobile first responsive weather app built in HTML, CSS and vanilla JavaScript, uisng the OpenWeatherMap API',
    features:
      'Features: async/await, fetch, geolcation API, persistent data storage, serverless functions',
    websiteLink: 'https://marvelous-tulumba-12d425.netlify.app/',
    githubLink: 'https://github.com/kenneth-alt/clima',
  };

  const WaitEase: IProject = {
    imgSrc: 'https://i.postimg.cc/QddYP86N/04-waitease.png',
    name: 'WaitEase',
    summary:
      'Responsive fullstack business website for a Queue Management Application using Python Flask, Bootstrap, custom CSS, and MySQL.',
    features:
      'Features: Registration, Authentication, Password Encryption, Admin Dashboard, Barcode generation, realtime position update.',
    websiteLink: 'https://wait-ease-production.up.railway.app',
    githubLink: 'https://github.com/kenneth-alt/wait-ease-v1',
  };

  const wendyAi: IProject = {
    imgSrc: 'https://i.postimg.cc/V6BfGnZz/wendyimages.png',
    name: 'Wendy AI',
    summary:
      'Project to demonstrate deployment of a fullstack AI Application in AWS cloud, using LangChain, Vector databases, OpenAI, GoodData, React, Typescript, Tailwind.',
    features: 'Features: API first approach, Analtyics as code, SSO',
    websiteLink: 'https://wendyai.ollysamm.com',
    githubLink: 'https://github.com/kenneth-alt/wendyAI',
  };

  const azureDeployment: IProject = {
    imgSrc: 'https://i.postimg.cc/zvJ9K2KN/azure-architectute-java-app.png',
    name: 'Azure App Deployment',
    summary:
      'CI/CD deployement of Azure App Service & Azure Kubernetes Service using Azure DevOps Pipelines and GitHub Actions.',
    features:
      'Features: B2C Authentication, Blue/Green deployment, Azure Serverless.',
    websiteLink: '#',
    githubLink:
      'https://github.com/kenneth-alt/Azure-Architecture-Java-App-Deployment',
  };

  const awsDeployment: IProject = {
    imgSrc: 'https://i.postimg.cc/Vv11hzYR/02-AWS-cruddur.png',
    name: 'AWS Fullstack Deployment',
    summary:
      'Project to demonstrate deployment of a fullstack web application with Python Flask backend and React frontend on AWS cloud. ',
    features:
      'Features: Deployment, Docker, Authentication, Routing, Loadbalancing and Caching.',
    websiteLink: '#',
    githubLink: 'https://github.com/kenneth-alt/aws-bootcamp-cruddur-2023',
  };

  const everychildplays: IProject = {
    imgSrc: 'https://i.postimg.cc/rFKtY71X/03-everychildplays.png',
    name: 'everychildplays',
    summary:
      'Fullstack MERN pplication consuming a third party API to build a directory of all inclusive playgrounds in the city of Calgary.',
    features:
      'Features: Registration, Authentication, Password Encryption, Session management, Maps and directions, Reviews.',
    websiteLink: '#',
    githubLink: 'https://github.com/kenneth-alt/everychildplays',
  };

  const AiArticleSummarizer: IProject = {
    imgSrc: 'https://i.postimg.cc/7hFbNqdy/ai-summarizer.png',
    name: 'Sumz',
    summary:
      "AI assistant that summarizes an article, OpenAI's GPT-4 API, React, Redux Toolkit, Tailwind, and Next.js.",
    features: 'Features: Rest API calling, Redux state management.',
    websiteLink: '#',
    githubLink:
      'https://github.com/kenneth-alt/React-RTK-AI-article-summarizer',
  };

  const yycAero: IProject = {
    imgSrc: 'https://i.postimg.cc/BQ6vnDbx/01-yyc-aero.png',
    name: 'YYC-Aero',
    summary:
      'Responsive fullstack business website using React.js, GraphQL, Typescript, Tailwindcss, Express.js, Nest.js, TypeORM, Docker.',
    features: '',
    websiteLink: '#',
    githubLink: 'https://github.com/kenneth-alt/calgary-aero-full-stack',
  };

  const azureDataProj: IProject = {
    imgSrc: 'https://i.postimg.cc/nrhb7rgZ/Azure-data-eng-proj.png',
    name: 'Azure Data Project',
    summary:
      'Project to extract and load data from on-prem SQL databases with ADF, transform in Databricks and load into Synapse analytics workspaces.',
    features: '',
    websiteLink: '#',
    githubLink: 'https://github.com/kenneth-alt',
  };

  const sqlProject: IProject = {
    imgSrc: 'https://i.postimg.cc/YCzsMMhw/SQL-project.png',
    name: 'SQL Project',
    summary:
      'Project to analyze job market data, utilizing complex SQL queries to extract insights from a large dataset',
    features: '',
    websiteLink: '#',
    githubLink: 'https://github.com/kenneth-alt/sql_project',
  };

  const devProjects = [
    <Project {...Clima} />,
    <Project {...WaitEase} />,
    <Project {...wendyAi} />,
    <Project {...everychildplays} />,
    <Project {...AiArticleSummarizer} />,
    <Project {...yycAero} />,
  ];

  const devopsProjects = [
    <Project {...azureDeployment} />,
    <Project {...awsDeployment} />,
  ];

  const dataEngProjects = [
    <Project {...azureDataProj} />,
    <Project {...sqlProject} />,
  ];

  const numberOfDevDots = isMobile
    ? devProjects.length
    : Math.ceil(devProjects.length / 3);

  const numberOfDevopsDots = isMobile
    ? devopsProjects.length
    : Math.ceil(devopsProjects.length / 3);

  const numberOfDataEngDots = isMobile
    ? devopsProjects.length
    : Math.ceil(devopsProjects.length / 3);

  const { projectsRef } = useNavigationContext();

  return (
    <TopProjectsContainer ref={projectsRef}>
      <Title>Explore My Latest Projects</Title>
      <ProjectsContainer>
        Software Engineering and Systems Design
        <Carousel
          value={devCurrent}
          onChange={setDevCurrent}
          slides={devProjects}
          plugins={[
            'clickToChange',
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 3,
              },
            },
          ]}
          breakpoints={{
            640: {
              plugins: [
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 1,
                  },
                },
              ],
            },
            900: {
              plugins: [
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 2,
                  },
                },
              ],
            },
          }}
        />
        <DotsContainer>
          <Dots
            value={devCurrent}
            onChange={setDevCurrent}
            number={numberOfDevDots}
          />
        </DotsContainer>
      </ProjectsContainer>

      <ProjectsContainer>
        DevOps and Infrastructure
        <Carousel
          value={devopsCurrent}
          onChange={setDevopsCurrent}
          slides={devopsProjects}
          plugins={[
            'clickToChange',
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 3,
              },
            },
          ]}
          breakpoints={{
            640: {
              plugins: [
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 1,
                  },
                },
              ],
            },
            900: {
              plugins: [
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 2,
                  },
                },
              ],
            },
          }}
        />
        <DotsContainer>
          <Dots
            value={devopsCurrent}
            onChange={setDevopsCurrent}
            number={numberOfDevopsDots}
          />
        </DotsContainer>
      </ProjectsContainer>

      <ProjectsContainer>
        Data Engineering and MLOps
        <Carousel
          value={dataEngCurrent}
          onChange={setDataEngCurrent}
          slides={dataEngProjects}
          plugins={[
            'clickToChange',
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 3,
              },
            },
          ]}
          breakpoints={{
            640: {
              plugins: [
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 1,
                  },
                },
              ],
            },
            900: {
              plugins: [
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 2,
                  },
                },
              ],
            },
          }}
        />
        <DotsContainer>
          <Dots
            value={dataEngCurrent}
            onChange={setDataEngCurrent}
            number={numberOfDataEngDots}
          />
        </DotsContainer>
      </ProjectsContainer>
    </TopProjectsContainer>
  );
};
