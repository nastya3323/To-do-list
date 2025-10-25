import { createGlobalStyle } from "styled-components";
import normalize from "styled-normalize";
import { Theme } from "../models/theme";

export const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
${normalize}

* {
    box-sizing: border-box;
}

body {
    transition: background-color .2s;
    background-color: ${({ theme }) => theme.colors.backgroundSecondary};
    padding: 50px 0 0 0;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    line-height: 1.429;
    color: black;
}

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    gap: 10px;
}

.error {
    text-align: center;
    padding: 16px;
    color: rgba(255, 130, 45, 0.85);

    & h1 {
        margin: -10px 0 -30px;
        font-size: calc(17vw + 40px);
        opacity: .8;
        letter-spacing: -17px;
    }

    & p {
        opacity: .8;
        font-size: 20px;
        margin: 8px 0 38px 0;
        font-weight: bold;
    }
}

.error-link {
    text-decoration: none;
    color: #935a09;
    font-size: 20px;

    &:hover {
        text-decoration: underline;
    }
}
`;
