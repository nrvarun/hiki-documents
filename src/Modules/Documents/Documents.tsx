import {
  GridViewOutlined,
  List,
  SearchOutlined,
  UploadOutlined,
} from "@mui/icons-material";
import { Button, Grid, IconButton, MenuItem, TextField } from "@mui/material";

import {
  StyledDocsViewFilterWrapper,
  StyledMessagesContentWrapper,
  StyledMessagesWrapper,
  StyledTaskFilterWrapper,
} from "./docs.style";

import { StyledHeaderSearchInput } from "components/Header/header.style";
import { useCallback, useState } from "react";

import DocumentsListing from "./DocumentsListing";
import { NavLink } from "react-router-dom";

type Props = {};

const CMPNY_OPTIONS = [
  {
    value: "all",
    label: "All Companies",
  },
  {
    value: "Clarice",
    label: "Clarice Technologies",
  },
  {
    value: "Pfizer",
    label: "Pfizer lnc",
  },
];

const DOC_OPTIONS = [
  {
    value: "all",
    label: "All Files",
  },
  {
    value: "Returns",
    label: "It & GST Returns",
  },
  {
    value: "Bills",
    label: "Bills",
  },
  {
    value: "Other",
    label: "Other",
  },
];

const Tasks = (props: Props) => {
  const [docsView, setDocsView] = useState("grid");

  const handleToggleDocsView = useCallback((val: string) => {
    setDocsView(val);
  }, []);

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <StyledMessagesWrapper>
          <Grid container columnSpacing={2} alignItems="center">
            <Grid item xs={3.5}>
              <StyledHeaderSearchInput
                fullWidth
                placeholder="Search File"
                endAdornment={<SearchOutlined color="action" />}
              />
            </Grid>
            <Grid item xs={7}>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={5}>
                  <StyledTaskFilterWrapper>
                    <TextField
                      select
                      fullWidth
                      label=""
                      placeholder="All Companies"
                      defaultValue={CMPNY_OPTIONS[0].value}
                    >
                      {CMPNY_OPTIONS.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </StyledTaskFilterWrapper>
                </Grid>
                <Grid item xs={5}>
                  <StyledTaskFilterWrapper>
                    <TextField
                      select
                      fullWidth
                      label=""
                      placeholder="All Files"
                      defaultValue={DOC_OPTIONS[0].value}
                    >
                      {DOC_OPTIONS.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </StyledTaskFilterWrapper>
                </Grid>
                <Grid item xs={2}>
                  <StyledDocsViewFilterWrapper>
                    <Button
                      variant="text"
                      className={docsView === "grid" ? "active" : ""}
                      onClick={() => handleToggleDocsView("grid")}
                    >
                      <GridViewOutlined />
                    </Button>
                    <Button
                      variant="text"
                      className={docsView === "list" ? "active" : ""}
                      onClick={() => handleToggleDocsView("list")}
                    >
                      <List />
                    </Button>
                  </StyledDocsViewFilterWrapper>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              xs={1.5}
              style={{
                textAlign: "center",
              }}
            >
              <NavLink to={"/documents/upload"}>
                <Button variant="contained" startIcon={<UploadOutlined />}>
                  Upload
                </Button>
              </NavLink>
            </Grid>
          </Grid>
        </StyledMessagesWrapper>
      </Grid>
      <Grid item xs={12} marginTop={3}>
        <Grid container>
          <Grid xs={12} item>
            <DocumentsListing />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Tasks;
