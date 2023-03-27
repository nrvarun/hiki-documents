import styled from "styled-components";

export const StyledMessagesWrapper = styled.div`
  background: #ffffff;
  padding: 21px 16px;

  input {
    height: 100%;
  }
`;

export const StyledMessagesContentWrapper = styled.div`
  padding: 0;
  height: calc(100vh - 260px);
`;

export const StyledTaskFilterWrapper = styled.div`
  display: flex;
  border-radius: 8px;
  align-items: center;
  border: 1px solid #e4eaee;
  padding: 0 16px;

  p {
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    color: #888888;
    margin: 0 12px 0 0;
    min-width: 60px;
  }

  .MuiInputBase-root {
    border: 0;

    .MuiSelect-outlined {
      font-weight: 500;
      font-size: 14px;
      line-height: 18px;
      color: #0052cc;
    }

    svg {
      color: #0052cc;
    }

    fieldset {
      border: 0;
    }
  }
`;

export const StyledDocsViewFilterWrapper = styled.div`
  display: flex;
  border-radius: 8px;
  align-items: center;
  border: 1px solid #e4eaee;
  padding: 0px;

  button {
    width: 50%;
    min-width: auto;

    svg {
      path {
        color: #1c1c1c;
      }
    }

    &.active {
      background: #f2f9ff;

      svg {
        path {
          color: #0052cc;
        }
      }
    }
  }
`;

export const StyledDocsListWrapper = styled.div`
  a {
    text-decoration: none;
  }
`;

export const StyledDocDropWrapper = styled.div`
  background: #ffffff;
  border-radius: 8px;
  padding: 15px 20px;
  height: 100%;
`;

export const StyledDocDrop = styled.div`
  background: #f8fcff;
  padding: 15px 20px;
  height: 100%;
  display: flex;
  text-align: center;
  border: 0.7px dashed #ccd5e7;
  border-radius: 7.43014px;

  img {
    margin: auto;
  }
`;
