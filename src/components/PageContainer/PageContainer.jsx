"use client";

import React from 'react'
import PropTypes from "prop-types"
import { Container } from "./PageContainer.style"

export default function PageContainer({
    children,
    paddingtop = "0px",
}) {

    return (
        <Container paddingtop={paddingtop}>
            {children}
        </Container>
    )
}

PageContainer.propTypes = {
    children: PropTypes.node.isRequired,
    paddingtop: PropTypes.string,
}
