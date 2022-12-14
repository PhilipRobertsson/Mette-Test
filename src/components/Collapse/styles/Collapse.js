import styled from 'styled-components'

export const Container = styled.div`
  text-align: center;
  object-align: center;
  width: 100%;
  height: 100%;

  p {
    font-size: clamp(16px, 1.1vw, 24px);
    font-family: "Lora", serif;
    text-align: center;
  }
`;
export const Button = styled.button`
  padding: 10px;
  // font: unset
  font-size: 17px;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
  width: 70%;
  //background-color: #f18227;
  margin-bottom: 0.2rem;
  // color: #db830f;
  //color: white;
  cursor: pointer;
  border-radius: 5px;
  border-style: none;

  &:hover {
    color: white;
    background-color: #ed820e;
  }
`; 

export const Content = styled.div`
border: 0.5px solid;
padding: 2rem;
border-radius: 5px;
width: 60%;
text-align: center;
max-right: 13.5rem;
max-left: 13.5rem;
margin: auto;
border-color: #f1f1f1;
text-align: center;
`

