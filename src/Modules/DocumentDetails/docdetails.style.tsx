import { IconButton } from "@mui/material";
import styled from "styled-components";

export const StyledDocDetailsWrapper = styled.section`
  background: #ffffff;
  border-radius: 2px;
`;

export const StyledDocDetailsHeader = styled.header`
  background: #ffffff;
  border-bottom: 1px solid rgba(136, 136, 136, 0.4);
  padding: 24px 30px;

  h3 {
    font-weight: 700;
    font-size: 18px;
    line-height: 23px;
    color: #000000;
  }
`;

export const StyledDocDetailsBody = styled.div`
  background: #ffffff;
  padding: 24px 60px;
`;

export const StyledDocDetailsFooter = styled.div`
  background: #ffffff;
  padding: 32px;
  border-top: 1px solid rgba(136, 136, 136, 0.4);
`;

export const StyledDocDetailsFormWrapper = styled.div`
  border-right: 1px solid rgba(136, 136, 136, 0.2);
`;

export const StyledDocUploadWrapper = styled.div`
  background: #f8fcff;
  border: 1px dashed rgba(136, 136, 136, 0.4);
  border-radius: 8px;
  text-align: center;
  // height: 100%;
  // max-height: 170px;
  padding: 76px 40px;
  margin: 0 0 18px 0;
`;

export const StyledDocsEntryFileDetailsWrapper = styled.div`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  p {
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #888888;
  }
`;

export const StyledUploadDocText = styled.p`
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  color: #1c1c1c;
`;

export const StyledDocsEntryFileDetail = styled.div`
  padding: 12px 16px;
  background: #f2f9ff;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;

    svg {
      margin: 0 8px 0 0;
    }
  }

  p {
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: #0052cc;
    margin: 0;
    max-width: 250px;
    text-overflow: ellipsis;
    whitespace: no-wrap;
    overflow: hidden;
  }
`;

export const StyledFileSelectInputOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  border: 1px solid #0052cc !important;
  border-radius: 8px;
  padding: 12px;
  pointer-events: none;

  p {
    text-align: center;
    width: 100%;
  }
`;

export const StyledFileSelectWrapper = styled.div`
  position: relative;

  * {
    border: 0;
  }

  input {
    opacity: 0;
    cursor: pointer;
    width: 100%;
  }

  p {
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #0052cc;
    margin: 0;

    svg {
      margin: 0 8px 0 0;
    }
  }

  .MuiFormHelperText-root {
    position: absolute;
    bottom: -26px;
    left: 0;
  }
`;

export const StyledDocDeleteBtn = styled(IconButton)`
  position: absolute;
  top: 10px;
  right: 10px;
`;
