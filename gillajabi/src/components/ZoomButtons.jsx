import React from 'react';
import { useZoomStore } from '../stores/zoomStore';
import '../styles/components/ZoomButtons.css';

const ZoomButtons = () => {
  const { toggleZoom, zoomIn, zoomOut, resetZoom } = useZoomStore();

  return (
    <div className={`zoom-glass ${toggleZoom ? 'slideOutFromRight' : 'slideInFromRight'}`}>
      <button onClick={zoomIn}>+</button>
      <button onClick={resetZoom}>Ο</button>
      <button onClick={zoomOut}>-</button>
    </div>
  );
};

export default ZoomButtons;