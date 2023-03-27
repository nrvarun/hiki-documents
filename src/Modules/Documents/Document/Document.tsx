import { PictureAsPdf } from "@mui/icons-material";
import {
  StyledDocumentItemPreview,
  StyledDocumentItemTitle,
  StyledDocumentItemTitleIcon,
  StyledDocumentItemTitleWrapper,
  StyledDocumentItemWrapper,
} from "./docmt.style";

import SVG from "react-inlinesvg";

type Props = {
  url: string;
  title: string;
  type: string;
};

const Document = ({ url, title, type }: Props) => {
  const getIcon = (type: string) => {
    if (type === "pdf") {
      return <SVG src="/images/icons/pdf.svg" />;
    }

    if (type === "image") {
      return <SVG src="/images/icons/placeholder-img.svg" />;
    }

    if (type === "docs") {
      return <SVG src="/images/icons/documents.svg" />;
    }

    return <SVG src="/images/icons/pdf.svg" />;
  };

  return (
    <StyledDocumentItemWrapper>
      <StyledDocumentItemPreview>
        <img src={url} alt={title} />
      </StyledDocumentItemPreview>
      <StyledDocumentItemTitleWrapper>
        <StyledDocumentItemTitleIcon>
          {getIcon(type)}
        </StyledDocumentItemTitleIcon>
        <StyledDocumentItemTitle title={title}>{title}</StyledDocumentItemTitle>
      </StyledDocumentItemTitleWrapper>
    </StyledDocumentItemWrapper>
  );
};

export default Document;
