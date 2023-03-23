import { Grid } from "@mui/material";

type Props = {
  newUpload?: boolean;
};

const DocumentDetails = ({ newUpload }: Props) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        --- Documents {newUpload ? "Upload" : "Details"} ---
      </Grid>
    </Grid>
  );
};

export default DocumentDetails;
