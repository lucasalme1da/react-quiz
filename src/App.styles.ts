import styled, { createGlobalStyle } from 'styled-components';
import BGImage from './images/background.jpg';

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    background-image: url(${BGImage});
    background-size: cover;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
  }

  * {
    box-sizing: border-box;
    font-family: 'Catamaran', sans-serif;
  }
`;


export const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;

  > p {
  color: #fff;
}

  .score {
  color: #fff;
  font-size: 2rem;
  margin: 0;
}

h1 {
  font-family: 'Sansita Swashed';
  color: whitesmoke;
  line-height: 150px;
  font-size: 100px;
  text-align: center;
  margin: 20px;
  text-shadow: 5px 5px 2px #000;
}

  .start, .next {
  cursor: pointer;
  background: linear-gradient(180deg, #fff, #fff);
  border: 0;
  box-shadow: 3px 3px 2px #000;
  border-radius: 10px;
  height: 40px;
  margin: 20px 0;
  padding: 0 40px;
  font-size: 20px;
}

   .start {
  max-width: 200px;
}

`;