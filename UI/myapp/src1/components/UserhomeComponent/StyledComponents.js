import styled, { keyframes } from 'styled-components';

const shakeAnimation = keyframes`
  0%, 100% {
    transform: translateX(0);
  }
  10%, 30%, 50%, 70%, 90% {
    transform: translateX(-10px);
  }
  20%, 40%, 60%, 80% {
    transform: translateX(10px);
  }
`;

export const Container = styled.div`
  margin: 0;
  padding: 0;
`;

export const Body = styled.body`
  background: #2e3740;
  color: #435160;
  font-family: 'Open Sans', sans-serif;
`;

export const Heading = styled.h2`
  color: #6d7781;
  font-family: 'Sofia', cursive;
  font-size: 15px;
  font-weight: bold;
  font-size: 3.6em;
  text-align: center;
  margin-bottom: 20px;
`;

export const Link = styled.a`
  color: #435160;
  text-decoration: none;
`;

export const LoginForm = styled.div`
  width: 350px;
  position: absolute;
  top: 10%;
  left: 50%;
  margin-left: -175px;
`;

export const Input = styled.input`
  &[type="text"],
  &[type="password"] {
    width: 350px;
    padding: 20px 0px;
    background: transparent;
    border: 0;
    border-bottom: 1px solid #435160;
    outline: none;
    color: #6d7781;
    font-size: 16px;
  }

  &[type="checkbox"] {
    display: none;
  }
`;

export const Label = styled.label`
  display: block;
  position: absolute;
  margin-right: 10px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: transparent;
  content: "";
  transition: all .3s ease-in-out;
  cursor: pointer;
  border: 3px solid #435160;

  #agree:checked ~ label[for="agree"] {
    background: #435160;
  }
`;

export const SubmitButton = styled.input`
  background: #1fce6d;
  border: 0;
  width: 350px;
  height: 40px;
  border-radius: 3px;
  color: #fff;
  font-size: 12px;
  cursor: pointer;
  transition: background .3s ease-in-out;

  &:hover {
    background: #16aa56;
    animation-name: ${shakeAnimation};
  }
`;

export const Forgot = styled.div`
  margin-top: 30px;
  display: block;
  font-size: 11px;
  text-align: center;
  font-weight: bold;

  &:hover {
    margin-top: 30px;
    display: block;
    font-size: 11px;
    text-align: center;
    font-weight: bold;
    color: #6d7781;
  }
`;

export const Agree = styled.div`
  padding: 30px 0px;
  font-size: 12px;
  text-indent: 25px;
  line-height: 15px;
`;

export const Placeholder = styled.input`
  &::-webkit-input-placeholder {
    color: #435160;
    font-size: 12px;
  }
`;

export const Animated = styled.div`
  animation-fill-mode: both;
  animation-duration: 1s;
`;
