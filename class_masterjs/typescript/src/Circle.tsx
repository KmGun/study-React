import styled from "styled-components";

interface ContainerProps {
    bgColor:string,
    borderColor:string,
}

const Container = styled.div<ContainerProps>`
    width:100px; height:100px;
    background-color: ${props => props.bgColor};
    border-color: ${props => props.borderColor};

`


interface CircleProps {
    bgColor:string,
    borderColor?:string,
}

function Circle({bgColor,borderColor}:CircleProps){
    return (
        <div>
            <Container bgColor={bgColor} borderColor = {borderColor ?? bgColor}></Container>
        </div>
    );
}







export default Circle;