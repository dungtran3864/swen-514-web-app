import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Styles from "./Styles";

const StyledLink = styled(Link)`
    ${Styles.centeredRow}
    ${Styles.resetLink}

    display: inline-flex;
    align-items: center;
    align-self: flex-start;
    cursor: pointer;

    font-weight: bold;

    img {
        height: 1.5em;
        margin-right: 8px;
    }
`;

const Button = ({ to, label }) => (
    <StyledLink to={to} className="button">
        {label}
    </StyledLink>
);

export default Button;