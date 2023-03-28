import { Grid } from "@mui/material";
import { NavLink } from "react-router-dom";
import { StyledDocsListWrapper } from "./docs.style";
import DocsTable from "./DocsTable";
import Document from "./Document";

type Props = {
  view: string;
};

const SAMPLE_DOCS = [
  {
    id: 1,
    type: "pdf",
    title: "Driving license asdfj; jasdfkj js23...",
    imgUrl: "/images/docs/1.png",
  },
  {
    id: 2,
    type: "pdf",
    title: "Documentation asdfj; jasdfkj js23...",
    imgUrl: "/images/docs/2.png",
  },
  {
    id: 3,
    type: "image",
    title: "International passport asdfj; jasd...",
    imgUrl: "/images/docs/3.png",
  },
  {
    id: 4,
    type: "pdf",
    title: "Aadhar card asdfj; jasdfkj js23...",
    imgUrl: "/images/docs/4.png",
  },
  {
    id: 5,
    type: "document",
    title: "Pan card asdfj; jasdfkj js23...",
    imgUrl: "/images/docs/5.png",
  },
];

const DocumentsListing = ({ view }: Props) => {
  return (
    <StyledDocsListWrapper>
      <Grid container spacing={2}>
        {view === "grid" ? (
          <>
            {SAMPLE_DOCS.map((doc, index) => (
              <Grid item xs={3} key={doc.id}>
                <NavLink to={`/documents/${doc.id}`}>
                  <Document
                    url={doc.imgUrl}
                    title={doc.title}
                    type={doc.type}
                  />
                </NavLink>
              </Grid>
            ))}
          </>
        ) : (
          <Grid item xs={12}>
            <DocsTable />
          </Grid>
        )}
      </Grid>
    </StyledDocsListWrapper>
  );
};

export default DocumentsListing;
