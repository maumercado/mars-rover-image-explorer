import React, { useEffect, useState } from 'react';
import RoverAPI from '../services/rover';
import ImgMetadata from '../atoms/ImgMetadata';

const SPEED = 3000;

function Slideshow () {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const roverAPI = new RoverAPI();
    let imagesGenerator = roverAPI.getImages();
    const fetchImages = async () => {
      try {
        for await (let img of imagesGenerator) {
          setLoading(false);
          setImage(img);
          await new Promise(r => setTimeout(r, SPEED)); // pause for 5 seconds before fetching the next image
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className='appContainer'>
      {error ? <div>{error}</div> :
      loading ? <div>Loading...</div> : (
        <div className="imageContainer">
          <img src={image.images.base64} alt="Mars Rover" />
          <ImgMetadata sol={image.metadata.sol} earth_date={image.metadata.earth_date} />
        </div>
      )}
    </div>
  );
};

export default Slideshow;
