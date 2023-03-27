import styled from "styled-components";

export const StyledLogo = styled.img`
  width: auto;
  height: 26px;
`;

export const StyledAuthContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  max-height: 100vh;
  overflow: auto;
`;

export const StyledAuthContent = styled.div`
  margin: auto;
  width: 100%;
  max-width: 530px;
  padding: 100px 0;

  h1 {
    color: #000000;
    font-weight: 800;
    font-size: 30px;
    line-height: 38px;
    margin: 2rem 0 3rem 0;
  }

  p {
    font-weight: 600;
    font-size: 16px;
    line-height: 150%;
    color: #544b4b;
  }
`;

export const StyledAuthDesc = styled.p`
  margin: 0 0 2rem 0;
`;
