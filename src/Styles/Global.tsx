import { Button } from "@mui/material";
import styled from "styled-components";

type FormCTAType = {
  fullWidth?: boolean;
  minwidth?: string;
};

export const StyledFormField = styled.div`
  margin: 0 0 2rem 0;
`;

export const StyledFormCTA = styled(Button)<FormCTAType>`
  &,
  &:hover {
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    color: #ffffff;
    background: #0052cc;
    border-radius: 8px;
    padding: 16px 24px;
    min-width: ${(p) => (p.minwidth ? p.minwidth : "132px")};
    width: ${(p) => (p.fullWidth ? "100%" : "auto")};
    border: none;
    cursor: pointer;
    text-align: center;

    &.Mui-disabled {
      background: rgba(136, 136, 136, 0.1);
    }

    svg {
      margin: 0 0 0 8px;
    }
  }
`;

export const StyledFormCTAOutlined = styled(StyledFormCTA)`
  &,
  &:hover {
    color: #0052cc;
    background: transparent;
    border: 1px solid #0052cc;

    svg {
      margin: 0 8px 0 0;
    }
  }
`;

export const StyledFieldError = styled.p`
  font-weight: 500 !important;
  font-size: 12px !important;
  line-height: 150% !important;
  color: #eb4747 !important;
  margin: 0 0 4px 0 !important;
`;

export const StyledFormRadios = styled.div`
  .MuiFormControlLabel-root {
    width: 100%;
    text-align: center;
    position: relative;
  }

  svg {
    path {
      fill: currentColor;
      stroke: currentColor;
    }
  }

  .MuiRadio-root {
    position: absolute;
    opacity: 0;
    width: 100%;
  }

  .Mui-checked {
    & + .MuiTypography-root {
      color: #0052cc;
      background: rgba(0, 82, 204, 0.1);
      border: 1px solid #0052cc;

      svg {
        color: #0052cc;
      }
    }
  }

  .MuiTypography-root {
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    color: rgba(136, 136, 136, 0.8);
    width: 100%;
    border: 1px solid rgba(136, 136, 136, 0.4);
    border-radius: 4px;
    padding: 10px 24px;
  }
`;
