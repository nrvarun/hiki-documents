import { Grid } from "@mui/material";
import Header from "components/Header";
import React from "react";
import {
  StyledAddLayoutWrapper,
  StyledAddMainContent,
} from "./addlayout.style";

type Props = {
  addView?: boolean;
  children?: React.ReactNode;
};

const AddLayout = ({ addView, children }: Props) => {
  return (
    <StyledAddLayoutWrapper>
      <Header addView />
      <StyledAddMainContent>
        <Grid container maxWidth="1200px" margin="0 auto">
          <Grid item xs={12}>
            {children}
          </Grid>
        </Grid>
      </StyledAddMainContent>
    </StyledAddLayoutWrapper>
  );
};

export default AddLayout;
