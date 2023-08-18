import { useEffect } from 'react';
import { useZoomStore } from '../stores/zoomStore';

export default function useReset() {
  document.documentElement.style.transform = '';
  const { resetZoom } = useZoomStore();
  
  useEffect(() => {
    resetZoom();
  }, []);
}
