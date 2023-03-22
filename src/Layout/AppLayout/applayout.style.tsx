import { Button } from "@mui/material";
import styled from "styled-components";

export const StyledAppLayoutWrapper = styled.section`
  background-color: rgb(233 240 246);
  min-height: 100vh;
`;

export const StyledAppDrawer = styled.aside`
  padding: 24px 32px;
  width: 240px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  background: #ffffff;
  z-index: 1200;
  box-shadow: 0px 0px 15px rgba(0, 82, 204, 0.1);
`;

export const StyledAppDrawerHeader = styled.header`
  position: relative;
  margin: 0 0 48px 0;
`;

export const StyledAppDrawerBody = styled.section`
  position: relative;
`;

export const StyledAppNavItem = styled(Button)<{ isActive?: boolean }>`
  padding: 8px 14px;
  display: flex;
  align-items: center;
  width: 100%;
  background: ${({ isActive }) => (isActive ? "#F2F9FF" : "transparent")};
  margin: 0 0 4px 0;

  &:before {
    content: "";
    width: 4px;
    height: 100%;
    background: #0052cc;
    border-radius: 0px 8px 8px 0px;
    position: absolute;
    left: -32px;
    top: 0;
    bottom: 0;
    display: none;
  }

  svg {
    margin: 0 12px 0 0;
    height: 16px;
    width: auto;
    color: #888;
  }

  h4 {
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    margin: 0;
    color: ${({ isActive }) => (isActive ? "#0052CC" : "#888888")};
  }

  p {
    margin: 0;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    background: #eb4747;
    border-radius: 10px;
    padding: 0px 4px;
    color: #ffffff;
  }
`;

export const StyledAppNavList = styled.ul`
  position: relative;
  padding: 0;
  list-style: none;

  li {
    a {
      &,
      &:hover {
        text-decoration: none;
      }

      &.active {
        ${StyledAppNavItem} {
          background: #f2f9ff;

          &:before {
            display: block;
          }

          svg {
            color: #0052cc;
          }

          h4 {
            font-weight: 500;
            font-size: 16px;
            line-height: 150%;
            margin: 0;
            color: #0052cc;
          }
        }
      }
    }
  }
`;

export const StyledAppNavItemBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const StyledAppBody = styled.div`
  width: calc(100% - 240px);
  margin: 0 0 0 auto;
  padding: 120px 36px 36px;
`;
