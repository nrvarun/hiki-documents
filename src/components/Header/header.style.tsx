import { IconButton, Input } from "@mui/material";
import styled from "styled-components";

export const StyledHeaderWrapper = styled.header<{ isAddView: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  width: ${({ isAddView = false }) =>
    isAddView ? "calc(100% - 0px)" : "calc(100% - 240px)"};
  background: #ffffff;
  padding: 18px 36px;
  box-shadow: 0px 0px 15px rgba(0, 82, 204, 0.1);
  z-index: 1000;
`;

export const StyledHeaderFlexCenterWrapper = styled.div`
  display: inline-flex;
  align-items: center;
`;

export const StyledHeaderSearchInput = styled(Input)`
  padding: 8px 16px;

  &:before,
  &:after {
    display: none;
  }

  input {
    padding: 0 16px 0 0 !important;
  }

  svg {
    fill: #1c1c1c;
    opacity: 0.4;
  }
`;

export const StyledNotificationBtn = styled(IconButton)`
  margin: 0 40px 0 0;
  padding: 10px;
`;

export const StyledHeaderAvatarContent = styled.div`
  text-align: left;
  margin: 0 0 0 16px;

  h3 {
    font-weight: 600;
    font-size: 14px;
    line-height: 150%;
    color: #1c1c1c;
    margin: 0;
  }

  p {
    font-size: 12px;
    color: #888888;
    margin: 0;
  }
`;
