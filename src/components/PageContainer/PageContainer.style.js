"use client";
import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  padding-top: ${({ paddingtop }) => paddingtop};
  background-image: url('bg03.jpg');
  background-size: cover;
  position: absolute;
  overflow-y: auto;

  h1,p {
    color: rgb(43, 237, 237);
    font-family: 'Alumni', sans-serif;
  }
`;

