import styled from '@emotion/styled';
import { Divider } from '@mui/material';
import Utilities from './Utilities';
import Links from './Links';
import { useTheme } from '@mui/material';

const StyledDiv = styled.div`
  width: 270px;
  background-color: #fafafa;
  margin: -10px;
  padding: 5px 15px;
`;

const Title = styled.h1`
  font-size: 18px;
`;

type SubtitleProps = {
  $color: string;
};

const Subtitle = styled.h2<SubtitleProps>`
  color: ${props => props.$color};
  font-size: 14px;
  margin-bottom: -10px;
`;

const App = () => {
  const theme = useTheme();
  return (
    <StyledDiv>
      <main>
        <Title>EAF Dev Tools 😎</Title>
        <Divider />
        <Subtitle $color={theme.palette.primary.dark}>Utilities</Subtitle>
        <Utilities />
        <br />
        <Divider />
        <Subtitle $color={theme.palette.primary.dark}>Links</Subtitle>
        <Links />
        <br />
      </main>
    </StyledDiv>
  );
}

export default App;
