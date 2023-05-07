import React, { useState, useEffect } from 'react';
import cameras from './cameras';
import './App.css';

function CameraGrid() {
  const [lastUpdate, setLastUpdate] = useState(Date.now());
  const [cameraList, setCameraList] = useState([]);
  const [selectedCamera, setSelectedCamera] = useState(null);

  useEffect(() => {
    setCameraList(cameras.sort(() => 0.5 - Math.random()).slice(0, 12));
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setLastUpdate(Date.now());
    }, 500);

    return () => clearInterval(intervalId);
  }, []);

  const handleRefreshClick = () => {
    setCameraList(cameras.sort(() => 0.5 - Math.random()).slice(0, 12));
    setSelectedCamera(null);
  };

  const scrollToTop = (camera) => {
    setSelectedCamera(camera);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      <div className='navbar'>
        <h1>NYC Security</h1>
        <button onClick={handleRefreshClick}>Refresh</button>
      </div>
      {selectedCamera && (
        <img
          className='selected-img'
          src={`${selectedCamera.imageUrl}?t=${lastUpdate}`}
          alt='/'
        ></img>
      )}

      <ul className='camera-grid'>
        {cameraList.map((camera) => (
          <div key={camera.id} className='container'>
            <div onClick={() => scrollToTop(camera)}>
              <img
                loading='lazy'
                src={`${camera.imageUrl}?t=${lastUpdate}`}
                alt={camera.name}
              />
            </div>
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
