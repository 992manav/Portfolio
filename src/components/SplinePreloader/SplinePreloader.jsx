import React, { useEffect, useRef } from 'react';
import Spline from '@splinetool/react-spline';

const SplinePreloader = ({ onLoad }) => {
  const hasLoaded = useRef(false);

  const handleSplineLoad = () => {
    if (!hasLoaded.current) {
      hasLoaded.current = true;
      console.log('Spline scene preloaded successfully');
      onLoad();
    }
  };

  const handleSplineError = (error) => {
    console.warn('Spline preload error:', error);
    // Still call onLoad to prevent infinite loading
    if (!hasLoaded.current) {
      hasLoaded.current = true;
      onLoad();
    }
  };

  return (
    <div style={{
      position: 'fixed',
      top: '-9999px',
      left: '-9999px',
      width: '1px',
      height: '1px',
      opacity: 0,
      pointerEvents: 'none',
      zIndex: -9999
    }}>
      <Spline
        scene="https://prod.spline.design/rq6RUTakGP-XWNQ3/scene.splinecode"
        onLoad={handleSplineLoad}
        onError={handleSplineError}
      />
    </div>
  );
};

export default SplinePreloader;