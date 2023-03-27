import { SearchOutlined } from "@mui/icons-material";
import { Avatar, Badge, Button, Container, Grid, Input } from "@mui/material";
import { blue } from "@mui/material/colors";

import {
  StyledHeaderFlexCenterWrapper,
  StyledHeaderAvatarContent,
  StyledHeaderWrapper,
  StyledNotificationBtn,
  StyledHeaderSearchInput,
} from "./header.style";

type Props = {
  firstTimeUser?: boolean;
  fullWidth?: boolean;
  addView?: boolean;
};

const Header = ({
  addView = false,
  firstTimeUser,
  fullWidth = false,
}: Props) => {
  return (
    <StyledHeaderWrapper isAddView={addView}>
      <Container maxWidth={fullWidth ? false : "xl"}>
        <Grid container spacing="2" alignItems="center">
          <Grid item xs={4}>
            {addView ? (
              <img src="/images/logo.svg" alt="" />
            ) : (
              <StyledHeaderSearchInput
                placeholder="Search"
                endAdornment={<SearchOutlined color="action" />}
              ></StyledHeaderSearchInput>
            )}
          </Grid>
          <Grid item xs={8} textAlign="right">
            <StyledHeaderFlexCenterWrapper>
              {!firstTimeUser && (
                <StyledNotificationBtn
                  size="large"
                  aria-label="show 17 new notifications"
                  color="inherit"
                >
                  <Badge badgeContent={17} color="error">
                    <img src="/images/icons/bell.svg" alt="notifications" />
                  </Badge>
                </StyledNotificationBtn>
              )}
              <StyledHeaderFlexCenterWrapper>
                <Avatar
                  sx={{ bgcolor: blue[300] }}
                  alt="Remy Sharp"
                  src="/images/avatar.png"
                >
                  B
                </Avatar>
                <StyledHeaderAvatarContent>
                  <h3>Andrew</h3>
                  <p>
                    Last seen: <span>12 Nov 2022</span>
                  </p>
                </StyledHeaderAvatarContent>
              </StyledHeaderFlexCenterWrapper>
            </StyledHeaderFlexCenterWrapper>
          </Grid>
        </Grid>
      </Container>
    </StyledHeaderWrapper>
  );
};

export default Header;
