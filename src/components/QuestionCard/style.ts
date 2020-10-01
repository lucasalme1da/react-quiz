import styled from 'styled-components';

type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean
}

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all 0.3s ease;

  :hover {
    opacity: 0.8;
  }

  button {
    width: 100%;
    margin-bottom: 12px;
    cursor: pointer;
    background: ${({ correct, userClicked }) =>
    correct
      ? '#59bc86'
      : (!correct && userClicked)
        ? '#c15868'
        : '#FE8168'
  };
    color: white;
    border: 0;
    border-radius: 10px;
    height: 40px;
    font-size: 15px;
  }

  button:disabled {
    color: #F3F3F3;
    cursor: default;
  }
`;


export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  border-radius: 8px;
  background-color: white;
  text-align: center;
  box-shadow: 2px 2px 5px #000;

  p {
    font-size: 20px;
    margin-top: 0;
  }

`;
