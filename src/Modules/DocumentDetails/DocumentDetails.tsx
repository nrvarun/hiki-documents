import { ArrowBack, FileUpload } from "@mui/icons-material";
import { Alert, Button, Grid, Snackbar } from "@mui/material";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import {
  StyledFieldError,
  StyledFormCTA,
  StyledFormCTAOutlined,
} from "Styles/Global";
import CreateDocForm from "./CreateDocForm";

import { useDropzone } from "react-dropzone";

import {
  StyledDocDetailsBody,
  StyledDocDetailsFooter,
  StyledDocDetailsFormWrapper,
  StyledDocDetailsHeader,
  StyledDocDetailsWrapper,
  StyledDocsEntryFileDetail,
  StyledDocsEntryFileDetailsWrapper,
  StyledDocUploadWrapper,
  StyledFileSelectInputOverlay,
  StyledFileSelectWrapper,
  StyledUploadDocText,
} from "./docdetails.style";
import { useEffect, useState } from "react";

type Props = {
  newUpload?: boolean;
};

type FormValues = {
  type: "Personal" | "Client";
  Client: "";
  docCategory: "";
  docTitle: "";
  docType: "";
  serNo: "";
  file: File[];
};

const DocumentDetails = ({ newUpload }: Props) => {
  const [showFileAlert, setFileAlert] = useState(false);

  const { control, handleSubmit, setValue } = useForm<FormValues>({
    defaultValues: {
      type: "Personal",
      Client: "",
      docCategory: "",
      docTitle: "",
      docType: "",
      serNo: "",
      file: [],
    },
    mode: "all",
  });

  const onSubmit = (values: any) => {
    console.log("form submitted", values);
    if (values.file.length === 0) {
      handleClick();
    }
  };

  const { getRootProps, getInputProps, open, acceptedFiles } = useDropzone({
    // Disable click and keydown behavior
    noClick: true,
    noKeyboard: true,
    accept: {
      "image/png": [".png"],
      "image/jpeg": [".jpeg"],
      "image/jpg": [".jpg"],
      "application/pdf": [".pdf"],
    },
    maxFiles: 1,
  });

  useEffect(() => {
    if (acceptedFiles.length) {
      setValue("file", acceptedFiles);
    }
  }, [acceptedFiles]);

  const handleClick = () => {
    setFileAlert(true);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setFileAlert(false);
  };

  const files = acceptedFiles.map((file: any) => (
    <li key={file.path}>
      <StyledDocsEntryFileDetail>
        <div>
          <svg
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.6998 10.8007L11.6998 6.80073L3.6998 14.8007M2.7398 0.800781H14.2598C15.0518 0.800781 15.6998 1.61078 15.6998 2.60078V13.4008C15.6998 14.3908 15.0518 15.2008 14.2598 15.2008H2.7398C1.9478 15.2008 1.2998 14.3908 1.2998 13.4008V2.60078C1.2998 1.61078 1.9478 0.800781 2.7398 0.800781ZM7.2998 5.00078C7.2998 5.99489 6.49392 6.80078 5.4998 6.80078C4.50569 6.80078 3.6998 5.99489 3.6998 5.00078C3.6998 4.00667 4.50569 3.20078 5.4998 3.20078C6.49392 3.20078 7.2998 4.00667 7.2998 5.00078Z"
              stroke="#0052CC"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p title={file.name}>{file.path}</p>
        </div>
      </StyledDocsEntryFileDetail>
    </li>
  ));

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} marginBottom={3}>
        <NavLink
          to="/documents"
          style={{
            textDecoration: "none",
          }}
        >
          <Button variant="text" startIcon={<ArrowBack />}>
            Back to documents
          </Button>
        </NavLink>
      </Grid>
      <Grid item xs={12}>
        <StyledDocDetailsWrapper>
          <StyledDocDetailsHeader>
            <h3>Upload Document</h3>
          </StyledDocDetailsHeader>
          <StyledDocDetailsBody>
            <form name="create-task-form" onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={4}>
                <Grid item xs={8}>
                  <StyledDocDetailsFormWrapper>
                    <CreateDocForm control={control} />
                  </StyledDocDetailsFormWrapper>
                </Grid>
                <Grid item xs={4}>
                  <StyledDocUploadWrapper>
                    <div {...getRootProps({ className: "dropzone" })}>
                      <input {...getInputProps()} />
                      <StyledUploadDocText>Drop file here</StyledUploadDocText>
                      <Button
                        type="button"
                        variant="outlined"
                        onClick={open}
                        startIcon={<FileUpload />}
                      >
                        Attach Document
                      </Button>
                    </div>
                  </StyledDocUploadWrapper>

                  {files.length > 0 && (
                    <StyledDocsEntryFileDetailsWrapper>
                      <aside>
                        <StyledUploadDocText>Files</StyledUploadDocText>
                        <ul>{files}</ul>
                      </aside>
                    </StyledDocsEntryFileDetailsWrapper>
                  )}
                </Grid>
                <Grid item xs={12}>
                  <StyledDocDetailsFooter>
                    <Grid container>
                      <Grid item xs={4}></Grid>
                      <Grid item xs={2}>
                        <StyledFormCTAOutlined type="button">
                          Cancel
                        </StyledFormCTAOutlined>
                      </Grid>
                      <Grid item xs={2}>
                        <StyledFormCTA type="submit">Upload</StyledFormCTA>
                      </Grid>
                      <Grid item xs={4}></Grid>
                    </Grid>
                  </StyledDocDetailsFooter>
                </Grid>
              </Grid>
            </form>
          </StyledDocDetailsBody>
        </StyledDocDetailsWrapper>
      </Grid>
      <Snackbar
        open={showFileAlert}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          Please upload a file!
        </Alert>
      </Snackbar>
    </Grid>
  );
};

export default DocumentDetails;
