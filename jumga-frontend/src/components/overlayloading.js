import React, { useState, useEffect } from "react";
import Loader from "react-loader";
import styled, { css } from "styled-components";

const DarkBackground = styled.div`
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1999; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */

  ${(props) =>
    props.disappear &&
    css`
      display: block; /* show */
    `}
`;

function OverlayLoading(props) {
  const { loaded } = props;

  return (
    <>
      <div className="App">
        <DarkBackground disappear={!loaded}>
          {
            <Loader
              loaded={loaded}
              lines={13}
              length={20}
              width={10}
              radius={30}
              corners={1}
              rotate={0}
              direction={1}
              color="#f7b100"
              speed={1}
              trail={60}
              shadow={false}
              hwaccel={false}
              className="spinner"
              zIndex={2e9}
              top="50%"
              left="50%"
              scale={1.0}
              loadedClassName="loadedContent"
            />
          }
        </DarkBackground>
      </div>

      {props.children}
    </>
  );
}

export default OverlayLoading;
