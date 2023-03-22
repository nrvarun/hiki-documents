import { Divider, Grid } from "@mui/material";
import {
  StyledDashCardBody,
  StyledDashCardHeader,
  StyledDashCardWrapper,
} from "./dashcard.style";

type Props = {
  title: string;
  children: React.ReactNode;
  action?: React.ReactNode;
};

const DashboardCard = ({ title, children, action }: Props) => {
  return (
    <StyledDashCardWrapper>
      <StyledDashCardHeader>
        <Grid container alignItems="center">
          <Grid item xs={action ? 7 : 10}>
            <h2>{title}</h2>
          </Grid>
          <Grid item xs={action ? 5 : 2} textAlign="right">
            {action ? action : null}
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Divider
            style={{
              marginTop: 16,
            }}
          />
        </Grid>
      </StyledDashCardHeader>
      <StyledDashCardBody>{children}</StyledDashCardBody>
    </StyledDashCardWrapper>
  );
};

export default DashboardCard;
