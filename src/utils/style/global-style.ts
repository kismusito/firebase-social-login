import { createGlobalStyle } from "styled-components";
import "typeface-roboto";

export default createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    body {
        font-family: Roboto;
        margin: 0;
        padding: 0;
        background-color: ${({ theme }) => theme.colors.dark}
    }
`;
