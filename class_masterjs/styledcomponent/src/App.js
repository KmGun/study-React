import styled from "styled-components";
import { keyframes } from "styled-components";

const ani1 = keyframes`
  from{
    color:tomato;
  }
  to{
    color:blue;
  }
`;

const Son = styled.p.attrs({value:"hello"})`
  color:red;
  border-radius: 5px;

`

const Father = styled.div`
  animation: ${ani1} 0.5s infinite;
  background-color: ${props => props.bgColor};
  width:100px;
  height:100px;
  ${Son} {
    &:hover{
      color:blue;
    }
  };
`

const Box = styled.div`
  width:200px; height:300px;
  background-color: ${props => props.theme.backgroundColor};
`


function App() {
  return (
    <div className="App">
      <Father bgColor = "yellow">
        <Son></Son>
      </Father>
      <Father as="a" bgColor = "blue">fuck</Father>
      <Box></Box>

    </div>
  );
}

export default App;
