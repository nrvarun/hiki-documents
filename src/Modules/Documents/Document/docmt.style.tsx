import styled from "styled-components";

export const StyledDocumentItemWrapper = styled.article`
  background: #f5f5f5;
  border: 1px solid #e4eaee;
  border-radius: 8px;
`;

export const StyledDocumentItemPreview = styled.div`
  padding: 16px 12px;
  overflow: auto;

  img {
    width: 100%;
    height: 100%;
    max-height: 140px;
  }
`;

export const StyledDocumentItemTitleWrapper = styled.div`
  padding: 12px 24px;
  display: flex;
  align-items: center;
  width: 100%;
  background: #ffffff;
  border-radius: 0px 0px 8px 8px;
`;

export const StyledDocumentItemTitleIcon = styled.div`
  padding: 6px;
  background: #f2f9ff;
  border-radius: 3px;
  margin: 0 16px 0 0;
`;

export const StyledDocumentItemTitle = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: #000000;
  max-width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;
