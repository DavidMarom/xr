"use client";

import React from 'react'
import PropTypes from "prop-types"
import { BarContainer } from "./Bar.style"
import { StyleSheetManager } from 'styled-components';

export default function Bar({
    children,
    margintop = "0px",
}) {

    return (
        <StyleSheetManager shouldForwardProp={(prop) => prop !== 'margintop'}>
            <BarContainer
                margintop={margintop}

            >
                {children}
            </BarContainer>
        </StyleSheetManager >
    )
}

Bar.propTypes = {
    children: PropTypes.node,
    margintop: PropTypes.string || PropTypes.number,
}
