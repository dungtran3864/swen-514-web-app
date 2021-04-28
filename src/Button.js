import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Styles from "./Styles";
import Colors from "./Colors";

const StyledLink = styled(Link)`
    ${Styles.centeredRow}
    ${Styles.resetLink}
    ${Styles.darkOutline}
    ${Styles.smallShadow}

    display: inline-flex;
    align-items: center;
    cursor: pointer;
    background-color: ${Colors.green2};
    margin: 12px;
  
    font-weight: bold;
    font-size: 15px;
`;

const Button = ({ to, label }) => (
    <StyledLink to={to} className="button">
        {label}
    </StyledLink>
);

export default Button;