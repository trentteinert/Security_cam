import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [cameras, setCameras] = useState([]);
  const [loadedImages, setLoadedImages] = useState(-1);
  const [isLoading, setIsLoading] = useState(true);

  const getRandomCameras = (camerasArray, count) => {
    const shuffled = camerasArray.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const fetchCameras = async () => {
    try {
      const response = await axios.get('/api/cameras/');
      const randomCameras = getRandomCameras(response.data, 12);
      setCameras(randomCameras);
    } catch (error) {
      console.error('Error fetching cameras:', error);
    }
  };

  const refreshCameras = async () => {
    setLoadedImages(-1);
    setIsLoading(true);
    await fetchCameras();
  };

  useEffect(() => {
    fetchCameras();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCameras((prevCameras) =>
        prevCameras.map((camera) => ({
          ...camera,
          imageurl: `${camera.imageUrl.split('?')[0]}?t=${Date.now()}`,
        }))
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleImageLoad = () => {
    setLoadedImages((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    if (loadedImages === cameras.length) {
      setIsLoading(false);
    }
  }, [loadedImages, cameras.length]);

  return (
    <div className='App'>
      <div className='navbar'>
        <h1>NYC Security</h1>
        <button onClick={refreshCameras}>Refresh</button>
      </div>

      {isLoading ? <p className='loading-text'>Loading...</p> : null}
      <ul>
        {cameras.map((camera) => (
          <li className='container' key={camera.id}>
            <img src={camera.imageurl} alt='' />
            {!isLoading && <p>{camera.name}</p>}
            {!isLoading && <p>{camera.area}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
