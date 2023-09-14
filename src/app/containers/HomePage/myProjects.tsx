import React, { useState, forwardRef } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Carousel, { Dots, slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../../components/responsive";
import { IProject } from "../../../typings/project";
import { Project } from "../../components/project";


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

const EmptyCars = styled.div`
  ${tw`
    w-full
    flex
    justify-center
    items-center
    text-sm
    text-gray-500
  `};
`;

const LoadingContainer = styled.div`
  ${tw`
    w-full
    mt-9
    flex
    justify-center
    items-center
    text-base
    text-black
  `};
`;


export const TopProjects = forwardRef<HTMLDivElement>((props, ref) => {
  const [current, setCurrent] = useState(0);

  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

  const WaitEase: IProject = {
    imgSrc: "https://i.postimg.cc/QddYP86N/04-waitease.png", 
    name: "WaitEase", 
    summary: "Responsive fullstack business website for a Queue Management Application using Python Flask, Bootstrap, custom CSS, and MySQL.", 
    features: "Features: Registration, Authentication, Password Encryption, Admin Dashboard, Barcode generation, realtime position update.",
    websiteLink: "https://wait-ease-production.up.railway.app", 
    githubLink: "https://github.com/kenneth-alt/wait-ease-v1",
  };

    const wendyAi: IProject = {
    imgSrc: "https://i.postimg.cc/V6BfGnZz/wendyimages.png", 
    name: "Wendy AI", 
    summary: "Project to demonstrate deployment of a fullstack AI Application in AWS cloud, using LangChain, Vector databases, OpenAI, GoodData, React, Typescript, Tailwind.", 
    features: "Features: API first approach, Analtyics as code, SSO",
    websiteLink: "https://wendyai.ollysamm.com", 
    githubLink: "https://github.com/kenneth-alt/wendyAI",
  };

  const azureDeployment: IProject = {
    imgSrc: "https://i.postimg.cc/zvJ9K2KN/azure-architectute-java-app.png", 
    name: "Azure App Deployment", 
    summary: "CI/CD deployement of Azure App Service & Azure Kubernetes Service using Azure DevOps Pipelines and GitHub Actions.", 
    features: "Features: B2C Authentication, Blue/Green deployment, Azure Serverless.",
    websiteLink: "#", 
    githubLink: "https://github.com/kenneth-alt/Azure-Architecture-Java-App-Deployment",
  };

  const awsDeployment: IProject = {
    imgSrc: "https://i.postimg.cc/Vv11hzYR/02-AWS-cruddur.png", 
    name: "AWS Fullstack Deployment", 
    summary: "Project to demonstrate deployment of a fullstack web application with Python Flask backend and React frontend on AWS cloud. ", 
    features: "Features: Deployment, Docker, Authentication, Routing, Loadbalancing and Caching.",
    websiteLink: "#", 
    githubLink: "https://github.com/kenneth-alt/aws-bootcamp-cruddur-2023",
  };

    const everychildplays: IProject = {
    imgSrc: "https://i.postimg.cc/rFKtY71X/03-everychildplays.png", 
    name: "everychildplays", 
    summary: "Fullstack MERN pplication consuming a third party API to build a directory of all inclusive playgrounds in the city of Calgary.", 
    features: "Features: Registration, Authentication, Password Encryption, Session management, Maps and directions, Reviews.",
    websiteLink: "#", 
    githubLink: "https://github.com/kenneth-alt/everychildplays",
  };

  const AiArticleSummarizer: IProject = {
    imgSrc: "https://i.postimg.cc/7hFbNqdy/ai-summarizer.png", 
    name: "Sumz", 
    summary: "AI assistant that summarizes an article, OpenAI's GPT-4 API, React, Redux Toolkit, Tailwind, and Next.js.", 
    features: "Features: Rest API calling, Redux state management.",
    websiteLink: "#", 
    githubLink: "https://github.com/kenneth-alt/React-RTK-AI-article-summarizer",
  };

  const yycAero: IProject = {
    imgSrc: "https://i.postimg.cc/BQ6vnDbx/01-yyc-aero.png", 
    name: "YYC-Aero", 
    summary: "Responsive fullstack business website using React.js, GraphQL, Typescript, Tailwindcss, Express.js, Nest.js, TypeORM, Docker.", 
    features: "",
    websiteLink: "#", 
    githubLink: "https://github.com/kenneth-alt/calgary-aero-full-stack",
  };

  const projects = [
    <Project {...WaitEase} />,
    <Project {...wendyAi} />, 
    <Project {...azureDeployment} />,
    <Project {...awsDeployment} />,
    <Project {...everychildplays} />,
    <Project {...AiArticleSummarizer} />, 
    <Project {...yycAero} />, 

  ];

  const numberOfDots = isMobile ? projects.length : Math.ceil(projects.length / 3);

  return (
    <TopProjectsContainer ref={ref}>
      <Title>Explore My Latest Projects</Title>
      <ProjectsContainer>
        <Carousel
          value={current}
          onChange={setCurrent}
          slides={projects}
          plugins={[
            "clickToChange",
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
          <Dots value={current} onChange={setCurrent} number={numberOfDots} />
        </DotsContainer>
      </ProjectsContainer>
    </TopProjectsContainer>
  )
});
