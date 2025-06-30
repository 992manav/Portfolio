import React from "react";
import styled from "styled-components";

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="terminal-loader">
        <div className="terminal-header">
          <div className="terminal-title">Status</div>
          <div className="terminal-controls">
            <div className="control close" />
            <div className="control minimize" />
            <div className="control maximize" />
          </div>
        </div>
        <div className="text">Loading...</div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  @keyframes blinkCursor {
    50% {
      border-right-color: transparent;
    }
  }

  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1a1a1a;

  .terminal-loader {
    border: 0.2em solid #333;
    background-color: #1a1a1a;
    color: #0f0;
    font-family: "Courier New", Courier, monospace;
    font-size: 2em;
    padding: 3em 2em;
    width: 30em;
    margin: auto;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
    border-radius: 8px;
    position: relative;
    overflow: hidden;
    box-sizing: border-box;
  }

  .terminal-header {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3em;
    background-color: #333;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    padding: 0 0.8em;
    box-sizing: border-box;
  }

  .terminal-controls {
    float: right;
  }

  .control {
    display: inline-block;
    width: 1em;
    height: 1em;
    margin-left: 0.6em;
    border-radius: 50%;
    background-color: #777;
  }

  .control.close {
    background-color: #e33;
  }

  .control.minimize {
    background-color: #ee0;
  }

  .control.maximize {
    background-color: #0b0;
  }

  .terminal-title {
    float: left;
    line-height: 3em;
    color: #eee;
    font-size: 1.5em;
  }

  .text {
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    border-right: 0.3em solid green;
    animation: blinkCursor 1s step-end infinite;
    margin-top: 3em;
    font-size: 1.5em;
  }
`;

export default Loader;