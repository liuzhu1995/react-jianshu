import styled from "styled-components";


export const LoginWrapper = styled.div`
   position: absolute;
   left: 0;
   right: 0;
   bottom: 0;
   top: 56px;
   height: 100%;
   min-height: 750px;
   background-color: #eee;
`;


export const LoginBox= styled.div`
  box-sizing: border-box;
  width: 400px;
  margin: 60px auto 0;
  padding: 50px 50px 30px;
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(26,26,26,.1);
  .inputWrapper:first-child {
    input {
      border-bottom:none; 
    }
  }
 
  
`;
export const Input = styled.input`
  box-sizing: border-box;
  display: block;
  width: 100%;
  height: 50px;
  padding: 4px 12px 4px 35px;
  line-height: 30px;
  border-radius: 4px 4px 0;
  border: 1px solid #c8c8c8;
  background-color: #e8f0fe;
  outline: none;
`;

export const LoginBtn = styled.div`
  width: 100%;
  height: 40px;
  margin-top: 15px;
  line-height: 40px;
  text-align: center;
  border-radius: 25px;
  color: #fff;
  background-color: #3194d0;
  cursor: pointer;
  :hover {
    background-color: #187cb7;
  }
`;