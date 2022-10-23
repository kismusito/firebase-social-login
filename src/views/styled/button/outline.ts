import { Button as MuiButton } from "@mui/material";
import styled from "styled-components";

export const ButtonOutline = styled(MuiButton)`
  height: 56px;
  position: relative;
  font-weight: 400;
  color: ${({ theme: { colors } }) => colors.white} !important;
  background: ${({ theme: { colors } }) => colors.dark} !important;
  border: 1px solid transparent !important;
  background-clip: padding-box;
  border-radius: 30px !important;

  &:before {
    content: '';
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    z-index: -1;
    margin: -2px;
    background: ${({ theme: { colors } }) =>
      `linear-gradient(270deg, ${colors.greenBlue} 2.73%, ${colors.green} 100%)`};
    border-radius: inherit;
  }
`;
