import React, { useState, useEffect } from 'react';
import cameras from './cameras';
import './App.css';

function CameraGrid() {
  const [lastUpdate, setLastUpdate] = useState(Date.now());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setLastUpdate(Date.now());
    }, 500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <div className='navbar'>
        <h1>NYC Security</h1>
        <button>Refresh</button>
      </div>

      <ul className='camera-grid'>
        {cameras.slice(0, 12).map((camera) => (
          <div key={camera.id} className='container'>
            <img
              loading='lazy'
              src={`${camera.imageUrl}?t=${lastUpdate}`}
              alt={camera.name}
            />
            <div className='camera-info'>
              <h2>{camera.name}</h2>
              <p>{camera.area}</p>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default CameraGrid;
