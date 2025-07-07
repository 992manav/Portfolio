import React from "react";
import styled from "styled-components";

const Loader = ({ splineLoaded }) => {
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
        <div className="loading-content">
          <div className="text">Loading Portfolio...</div>
          <div className="progress-container">
            <div className="progress-bar">
              <div className={`progress-fill ${splineLoaded ? 'loaded' : ''}`}></div>
            </div>
            <div className="loading-steps">
              <div className="step completed">✓ Assets loaded</div>
              <div className="step completed">✓ Components ready</div>
              <div className={`step ${splineLoaded ? 'completed' : 'loading'}`}>
                {splineLoaded ? '✓' : '⏳'} 3D Scene {splineLoaded ? 'ready' : 'loading...'}
              </div>
            </div>
          </div>
        </div>
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

  @keyframes progressFill {
    0% { width: 0%; }
    33% { width: 33%; }
    66% { width: 66%; }
    100% { width: 100%; }
  }

  @keyframes pulse {
    0%, 100% { opacity: 0.6; }
    50% { opacity: 1; }
  }

  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%);
  padding: 1rem;

  .terminal-loader {
    border: 0.2em solid #333;
    background-color: #1a1a1a;
    color: #0f0;
    font-family: "Courier New", Courier, monospace;
    font-size: 1.5em;
    padding: 2em;
    width: 35em;
    max-width: 90vw;
    margin: auto;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6);
    border-radius: 12px;
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
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
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
    font-size: 1.2em;
  }

  .loading-content {
    margin-top: 3em;
  }

  .text {
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    border-right: 0.3em solid #0f0;
    animation: blinkCursor 1s step-end infinite;
    font-size: 1.3em;
    margin-bottom: 2em;
  }

  .progress-container {
    margin-top: 2em;
  }

  .progress-bar {
    width: 100%;
    height: 8px;
    background-color: #333;
    border-radius: 4px;
    overflow: hidden;
    margin-bottom: 1.5em;
  }

  .progress-fill {
    height: 100%;
    background: linear-gradient(90deg, #0f0, #4f4);
    border-radius: 4px;
    transition: width 0.5s ease;
    animation: progressFill 3s ease-in-out;
    width: 66%;
  }

  .progress-fill.loaded {
    width: 100% !important;
    background: linear-gradient(90deg, #0f0, #4f4, #0f0);
  }

  .loading-steps {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
  }

  .step {
    font-size: 0.9em;
    color: #888;
    transition: color 0.3s ease;
  }

  .step.completed {
    color: #0f0;
  }

  .step.loading {
    color: #ff0;
    animation: pulse 1.5s infinite;
  }

  /* Tablet Responsiveness */
  @media (max-width: 1024px) {
    .terminal-loader {
      font-size: 1.3em;
      padding: 1.8em;
      width: 32em;
    }

    .terminal-title {
      font-size: 1.1em;
    }

    .text {
      font-size: 1.2em;
    }
  }

  /* Mobile Responsiveness */
  @media (max-width: 768px) {
    padding: 0.5rem;

    .terminal-loader {
      font-size: 1.1em;
      padding: 1.5em;
      width: 28em;
      max-width: 95vw;
    }

    .terminal-title {
      font-size: 1em;
    }

    .text {
      font-size: 1.1em;
    }

    .control {
      width: 0.8em;
      height: 0.8em;
      margin-left: 0.4em;
    }

    .loading-steps {
      gap: 0.4em;
    }

    .step {
      font-size: 0.8em;
    }
  }

  /* Small Mobile */
  @media (max-width: 480px) {
    .terminal-loader {
      font-size: 1em;
      padding: 1.2em;
      width: 25em;
      max-width: 98vw;
    }

    .terminal-title {
      font-size: 0.9em;
    }

    .text {
      font-size: 1em;
    }

    .terminal-header {
      height: 2.5em;
    }

    .control {
      width: 0.7em;
      height: 0.7em;
      margin-left: 0.3em;
    }

    .progress-container {
      margin-top: 1.5em;
    }

    .progress-bar {
      margin-bottom: 1em;
    }

    .step {
      font-size: 0.75em;
    }
  }

  /* Extra Small Mobile */
  @media (max-width: 375px) {
    .terminal-loader {
      font-size: 0.9em;
      padding: 1em;
      width: 22em;
    }

    .terminal-title {
      font-size: 0.8em;
    }

    .text {
      font-size: 0.9em;
    }

    .step {
      font-size: 0.7em;
    }
  }
`;

export default Loader;