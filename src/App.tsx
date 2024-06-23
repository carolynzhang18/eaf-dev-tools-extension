import React from 'react';
import styled from '@emotion/styled';
import Utilities from './Utilities';
import Links from './Links';

const StyledDiv = styled.div`
  width: 240px;
  padding: 0px 5px;
`;

const Title = styled.h1`
  font-size: 18px;
`;

const Subtitle = styled.h2`
  font-size: 14px;
`;

const App = () => {
  return (
    <StyledDiv>
      <Title>EAF Dev Tools 😎</Title>
      <Subtitle>Utilities</Subtitle>
      <Utilities />
      <Subtitle>Links</Subtitle>
      <Links />
    </StyledDiv>
  );
}

export default App;
