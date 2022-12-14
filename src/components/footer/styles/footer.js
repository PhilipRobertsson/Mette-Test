import styled from 'styled-components'

export const Container = styled.div`
  padding: 40px 30px;
  margin: center;
  //background: radial-gradient(circle, rgba(92, 39, 251, 1) 0%, rgba(112, 71, 247, 1) 100%);
  background: #171717;
  font-family: "Lora", serif; 
`;
export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 800px;
    margin: 0 auto;
    align-items: center;
`
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;

  p {
    font-size: 14px;
    color: #fff;
    font-family: "Lora", serif;
    line-height: 150%;
  }
`;
export const Row = styled.div`
    display: grid;
    // grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-template-columns: repeat(4, minmax(250px, 1fr));
    grid-gap: 20px;
    justify-content: center;

     @media (max-width: 960px) {
         grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
     }
`
export const Link = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;
  font-family: "Lora", serif;

  &:hover {
    color: #ff9c00;
    transition: 200ms ease-in;
  }
`;
export const Title = styled.div`
  font-size: 24px;
  color: #fff;
  margin-bottom: 30px;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
`;