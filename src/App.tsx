import React from 'react';
import './index.css';
import styled from 'styled-components';
import tw from 'twin.macro';
import { HomePage } from './app/containers/HomePage';
import { NavigationProvider } from './app/context/NavigationContext';

const AppContainer = styled.div`
  ${tw`
    w-full
    h-full
    flex
    flex-col
  `}
`;

function App() {
  return (
    <NavigationProvider>
      <AppContainer>
        <HomePage />
      </AppContainer>
    </NavigationProvider>
  );
}

export default App;
