import { ControlPointDuplicateRounded } from "@mui/icons-material";
import {
  FormControlLabel,
  Grid,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers";

import { Controller } from "react-hook-form";

import SVG from "react-inlinesvg";

import {
  StyledFieldTitle,
  StyledFormCTA,
  StyledFormCTAOutlined,
  StyledFormRadios,
  StyledRadioLabel,
} from "Styles/Global";

type Props = {
  control: any;
};

const CLIENTS = [
  {
    id: "Clarice",
    title: "Clarice Technologies",
  },
  {
    id: "Pfizer",
    title: "Pfizer lnc",
  },
];

const DOC_CATEGORIES = [
  {
    id: "returns",
    title: "IT & GST Returns",
  },
  {
    id: "image",
    title: "image",
  },
  {
    id: "document",
    title: "document",
  },
];

const CreateDocForm = ({ control }: Props) => {
  return (
    <>
      <Grid container>
        <Grid item xs={12} marginBottom={4}>
          <StyledFieldTitle>
            Personal or Client <span> *</span>
          </StyledFieldTitle>
          <Controller
            name="type"
            control={control}
            rules={{ required: false }}
            render={({ field, fieldState }) => (
              <StyledFormRadios>
                <RadioGroup row {...field}>
                  <Grid
                    xs={10}
                    container
                    spacing={2}
                    marginLeft={"-5px"}
                    marginBottom={1}
                  >
                    <Grid item xs={3}>
                      <FormControlLabel
                        value="Personal"
                        control={<Radio />}
                        label={
                          <StyledRadioLabel>
                            <SVG src="/images/icons/user.svg" />
                            <p>Personal</p>
                          </StyledRadioLabel>
                        }
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <FormControlLabel
                        value="Client"
                        control={<Radio />}
                        label={
                          <StyledRadioLabel>
                            <SVG src="/images/icons/company.svg" />
                            <p>Client</p>
                          </StyledRadioLabel>
                        }
                      />
                    </Grid>
                  </Grid>
                </RadioGroup>
              </StyledFormRadios>
            )}
          />
        </Grid>
        <Grid item xs={10} marginBottom={4}>
          <StyledFieldTitle>
            Client Name <span> *</span>
          </StyledFieldTitle>
          <Controller
            name={"Client"}
            control={control}
            rules={{ required: true }}
            render={({ field, fieldState }) => (
              <TextField
                fullWidth
                select
                label=""
                variant="outlined"
                defaultValue={CLIENTS[0].title}
                error={fieldState.error ? true : false}
                helperText={fieldState.error && "Client is required"}
                {...field}
              >
                {CLIENTS.map((client) => (
                  <MenuItem value={client.id}>{client.title}</MenuItem>
                ))}
              </TextField>
            )}
          />
        </Grid>
        <Grid item xs={10} marginBottom={4}>
          <StyledFieldTitle>
            Document Category <span> *</span>
          </StyledFieldTitle>
          <Controller
            name={"docCategory"}
            control={control}
            rules={{ required: true }}
            render={({ field, fieldState }) => (
              <TextField
                fullWidth
                select
                label=""
                defaultValue={DOC_CATEGORIES[0].title}
                error={fieldState.error ? true : false}
                helperText={fieldState.error && "Category is required"}
                {...field}
              >
                {DOC_CATEGORIES.map((client) => (
                  <MenuItem value={client.id}>{client.title}</MenuItem>
                ))}
              </TextField>
            )}
          />
        </Grid>
        <Grid item xs={10} marginBottom={4}>
          <StyledFieldTitle>
            Document Title <span> *</span>
          </StyledFieldTitle>
          <Controller
            name={"docTitle"}
            control={control}
            rules={{ required: true }}
            render={({ field, fieldState }) => (
              <TextField
                fullWidth
                label=""
                error={fieldState.error ? true : false}
                helperText={fieldState.error && "Document Title is required"}
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={10} marginBottom={4}>
          <StyledFieldTitle>
            Serial Number <span> *</span>
          </StyledFieldTitle>
          <Controller
            name={"serNo"}
            control={control}
            rules={{ required: true }}
            render={({ field, fieldState }) => (
              <TextField
                fullWidth
                label=""
                error={fieldState.error ? true : false}
                helperText={fieldState.error && "Serial Number is required"}
                {...field}
              />
            )}
          />
        </Grid>

        <Grid item xs={10} marginBottom={4}>
          <StyledFieldTitle>
            Document Type <span> *</span>
          </StyledFieldTitle>
          <Controller
            name={"docType"}
            control={control}
            rules={{ required: true }}
            render={({ field, fieldState }) => (
              <TextField
                fullWidth
                label=""
                error={fieldState.error ? true : false}
                helperText={fieldState.error && "Document Title is required"}
                {...field}
              />
            )}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default CreateDocForm;
