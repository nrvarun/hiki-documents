import Header from "components/Header";

import {
  StyledAppDrawerBody,
  StyledAppDrawer,
  StyledAppDrawerHeader,
  StyledAppLayoutWrapper,
  StyledAppNavItem,
  StyledAppNavList,
  StyledAppBody,
} from "./applayout.style";

import { Divider } from "@mui/material";
import NavItem from "./NavItem";
import { NavLink, Outlet } from "react-router-dom";

type Props = {
  fluidHeader: boolean;
  firstTimeUser: boolean;
  children?: React.ReactNode;
};

const PRIMARY_NAV = [
  {
    id: 1,
    label: "Dashboard",
    icon: "/images/icons/nav/dashboard.svg",
    counter: 0,
    route: "/",
  },
  {
    id: 2,
    label: "My Firm",
    icon: "/images/icons/nav/firm.svg",
    counter: 0,
    route: "/firm",
  },
  {
    id: 3,
    label: "Clients",
    icon: "/images/icons/nav/clients.svg",
    counter: 0,
    route: "/clients",
  },
  {
    id: 3,
    label: "Colleagues",
    icon: "/images/icons/nav/colleagues.svg",
    counter: 0,
    route: "/colleagues",
  },
  {
    id: 4,
    label: "Messages",
    route: "/messages",
    icon: "/images/icons/nav/messages.svg",
    counter: 16,
  },
  {
    id: 5,
    label: "Tasks",
    icon: "/images/icons/nav/tasks.svg",
    counter: 0,
    route: "/tasks",
  },
  {
    id: 6,
    label: "Timesheet",
    icon: "/images/icons/nav/timesheet.svg",
    counter: 0,
    route: "/timesheet",
  },
  {
    id: 7,
    label: "Invoices",
    icon: "/images/icons/nav/invoices.svg",
    counter: 0,
    route: "/invoices",
  },
  {
    id: 8,
    label: "Documents",
    icon: "/images/icons/nav/documents.svg",
    counter: 0,
    route: "/documents",
  },
  {
    id: 9,
    label: "News",
    icon: "/images/icons/nav/news.svg",
    counter: 0,
    route: "/news",
  },
  {
    id: 10,
    label: "Settings",
    icon: "/images/icons/nav/settings.svg",
    counter: 0,
    route: "/settings",
  },
  {
    id: 11,
    label: "Logout",
    icon: "/images/icons/nav/logout.svg",
    counter: 0,
    route: "/sigin",
  },
];

const AppLayout = ({ fluidHeader, firstTimeUser, children }: Props) => {
  return (
    <StyledAppLayoutWrapper>
      <StyledAppDrawer>
        <StyledAppDrawerHeader>
          <img src="/images/logo.svg" alt="hiki" />
        </StyledAppDrawerHeader>
        <StyledAppDrawerBody>
          <StyledAppNavList>
            {PRIMARY_NAV.slice(0, 4).map((nav, index) => (
              <li key={nav.id}>
                <NavLink to={nav.route}>
                  <NavItem
                    icon={nav.icon}
                    title={nav.label}
                    counter={nav.counter}
                  />
                </NavLink>
              </li>
            ))}
          </StyledAppNavList>
          <Divider />
          <StyledAppNavList>
            {PRIMARY_NAV.slice(4, 10).map((nav, index) => (
              <li key={nav.id}>
                <NavLink to={nav.route}>
                  <NavItem
                    icon={nav.icon}
                    title={nav.label}
                    counter={nav.counter}
                  />
                </NavLink>
              </li>
            ))}
          </StyledAppNavList>
          <Divider />
          <StyledAppNavList>
            {PRIMARY_NAV.slice(10).map((nav, index) => (
              <li key={nav.id}>
                <NavLink to={nav.route}>
                  <NavItem
                    icon={nav.icon}
                    title={nav.label}
                    counter={nav.counter}
                  />
                </NavLink>
              </li>
            ))}
          </StyledAppNavList>
        </StyledAppDrawerBody>
      </StyledAppDrawer>
      <Header
        fullWidth={fluidHeader}
        firstTimeUser={firstTimeUser}
        addView={false}
      />
      <StyledAppBody>
        <Outlet />
      </StyledAppBody>
    </StyledAppLayoutWrapper>
  );
};

export default AppLayout;
