import { Button as MuiButton } from "@mui/material";
import styled from "styled-components";

export const Button = styled(MuiButton)`
  height: 56px;
  color: ${({ theme: { colors } }) => colors.darkLight} !important;
  background: ${({ theme: { colors } }) =>
    `linear-gradient(270deg, ${colors.greenBlue} 2.73%, ${colors.green} 100%)`};
  border-radius: 30px !important;
`;
