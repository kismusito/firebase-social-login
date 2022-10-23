import { Paper } from "@mui/material";
import styled from "styled-components";

export const StyledPaper = styled(Paper)`
  background-color: ${({ theme: { colors } }) => colors.dark} !important;
  color: ${({ theme: { colors } }) => colors.white} !important;
  border: 1px solid ${({ theme: { colors } }) => colors.darkLight} !important;
  transition: .6s ease-out !important;

  &:hover {
    background-color: ${({ theme: { colors } }) => colors.darkLight} !important;
  }
`;
