import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

interface IButtonProps {
  theme?: "filled" | "outlined";
  text: string;
  className?: string;
}

const BaseButton = styled.button`
  ${tw`
    pl-3
    pr-3
    pt-1
    pb-1
    outline-none
    rounded-full
    text-white
    text-xs
    md:text-base
    font-medium
    border-transparent
    border-2
    border-solid
    focus:outline-none
    transition-all
    duration-200
    ease-in-out
    mr-1
    md:mr-5
  `};
`;

const OutlinedButton = styled(BaseButton)`
  ${tw`
    bg-orange-500
    hover:bg-transparent
    hover:text-orange-500
    hover:border-orange-500
  `};
`;

const FilledButton = styled(BaseButton)`
  ${tw`
    border-orange-500
    text-white
    bg-transparent
  `};
  background: linear-gradient(180deg, #fdc50f 26.71%, #fb982f 99.36%);
  box-shadow: 0px 20px 24px 3px rgba(251, 161, 40, 0.42);
  
  &:hover {
    background: #FAF9F6;
    color: black;
    cursor: pointer;
    border: 1px solid var(--orange);
  }
`;


export function Button(props: IButtonProps) {
  const { theme, text, className } = props;

  if (theme === "filled")
    return <FilledButton className={className}>{text}</FilledButton>;
  else return <OutlinedButton className={className}>{text}</OutlinedButton>;
}